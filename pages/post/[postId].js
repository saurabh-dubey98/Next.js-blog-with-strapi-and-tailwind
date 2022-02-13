import qs from 'qs';
import { marked } from 'marked';
import moment from 'moment';
import { SectionContainer, MetaHeadInfo, AuthorInfo, CommentForm, CommentsContainer } from '../../components';

const PostDetails = ({ data }) => {
    const { Title, content, publishedAt, featured_image, author } = data.data.attributes
    const { Name, Bio, Avatar } = author.data.attributes;
    const imageUrl = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}${featured_image.data.attributes.url}`;
    const authorAvatar = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}${Avatar.data.attributes.url}`;

    return (
        <div className="main-container-style">
            <MetaHeadInfo title={Title} />
            <SectionContainer type="post">
                <div className="rounded-lg overflow-hidden shadow-md w-full">
                    <img className="w-full" src={imageUrl} alt={Title} />
                </div>
                <div>
                    <span className="text-sm font-body font-light dark:text-white">{moment(publishedAt).format("DD MMM, YYYY h:m A")}</span>
                </div>
                <h1 className="font-body font-bold text-3xl dark:text-white">{Title}</h1>
                <div className="font-body text-justify text-slate-700 text-lg leading-8 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                <AuthorInfo name={Name} bio={Bio} avatar={authorAvatar} />
                <CommentForm postId={data.data.id} />
                <CommentsContainer postId={data.data.id} />
            </SectionContainer>
        </div>
    )
}

export default PostDetails;

export const getStaticProps = async ({ params }) => {
    const query = qs.stringify({
        populate: ["featured_image", "author.Avatar"],
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/posts/${params.postId}?${query}`)
    const data = await res.json();

    if (data?.data === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/posts`);
    const data = await res.json();
    const paths = data.data.map(post => {
        return {
            params: {
                postId: post.id.toString()
            }
        }
    });
    return {
        paths: paths,
        fallback: 'blocking'
    }
}
