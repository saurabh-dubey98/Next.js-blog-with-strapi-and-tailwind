import { PostWidget, Categories } from "."

const SectionContainer = ({ children, type }) => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-10 gap-5">
			<div className={`md:col-span-6 col-span-1 sm:grid ${!type && 'sm:grid-cols-2'} md:grid-cols-1 grid gap-5 items-start`}>
				{children}
			</div>
			<div className="md:col-span-4 col-span-1">
				<PostWidget />
				<Categories />
			</div>
		</section>
	)
}

export default SectionContainer;