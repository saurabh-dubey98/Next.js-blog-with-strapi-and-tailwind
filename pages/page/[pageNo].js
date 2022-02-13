import qs from "qs";
import { MetaHeadInfo, PostCard, SectionContainer, Pagination } from "../../components";

export default function Page({ data, page }) {
    return (
        <div className="main-container-style">
            <MetaHeadInfo title="Tectbrunch | 2022" />
            <SectionContainer>
                {data.data.map((post) => {
                    const { Title, publishedAt, featured_image, author } = post.attributes;
                    const imageUrl = featured_image.data.attributes.url;
                    const authorName = author.data.attributes.Name;

                    return <PostCard key={post.id} id={post.id} title={Title} publishedAt={publishedAt} imageUrl={imageUrl} author={authorName} />
                })}
                <Pagination data={data.meta} page={page} />
            </SectionContainer>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const query = qs.stringify({
        populate: ["featured_image", "author"],
        sort: ["publishedAt:desc"],
        pagination: {
            page: params.pageNo.toString(),
            pageSize: 2
        }
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/posts?${query}`);
    const data = await res.json();

    if (data?.data === null) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data, page: params.pageNo },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
    const query = qs.stringify({
        pagination: {
            pageSize: 2
        }
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/posts?${query}`);
    const data = await res.json();

    const paths = [];
    for (let i = 1; i < data.meta.pagination.pageCount; i++) {
        let paramObj = {
            params: {
                pageNo: (i + 1).toString()
            }
        }
        paths.push(paramObj)
    }

    return {
        paths: paths,
        fallback: 'blocking'
    }
}