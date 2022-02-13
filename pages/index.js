import qs from "qs";
import { MetaHeadInfo, PostCard, SectionContainer, Pagination } from "../components"

export default function Home({ data }) {
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
				<Pagination page={"1"} data={data.meta} />
			</SectionContainer>
		</div>
	)
}

export const getStaticProps = async () => {
	const query = qs.stringify({
		populate: ["featured_image", "author"],
		sort: ["publishedAt:desc"],
		pagination: {
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
		props: { data },
		revalidate: 10,
	}
}