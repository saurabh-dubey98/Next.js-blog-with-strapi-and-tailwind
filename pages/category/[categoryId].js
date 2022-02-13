import qs from 'qs';
import { SectionContainer, MetaHeadInfo, PostCard, Notification } from '../../components';

const CategoryPage = ({ data }) => {
    const categoryName = data.data.attributes.Category;
    const posts = data.data.attributes.posts.data;
    return (
        <div className="main-container-style">
            <MetaHeadInfo title={categoryName} />
            <h1 className="dark:text-white font-body text-3xl mb-5" >Category:// <span className="font-bold">"{categoryName}"</span></h1>
            <SectionContainer>
                {posts.length > 0 ?
                    posts.map(post => {
                        const { Title, publishedAt, featured_image, author } = post.attributes;
                        const imageUrl = featured_image.data.attributes.url;
                        const authorName = author.data.attributes.Name;
                        return <PostCard key={post.id} id={post.id} title={Title} publishedAt={publishedAt} imageUrl={imageUrl} author={authorName} />
                    })
                    : <Notification text="No posts found in this category :(" type="danger" />}

            </SectionContainer>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const query = qs.stringify({
        populate: ["posts", "posts.featured_image", "posts.author"]
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/categories/${params.categoryId}?${query}`);
    const data = await res.json();
    if (data?.data === null) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/categories`);
    const data = await res.json();
    const paths = data.data.map(category => {
        return {
            params: {
                categoryId: category.id.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: 'blocking'
    }
}
export default CategoryPage;
