import moment from 'moment';
import { Button } from '..'

const PostCard = ({ imageUrl, title, publishedAt, author, id }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-zinc-100 dark:bg-slate-700">
            <div className="w-full h-52 overflow-hidden">
                <img className="object-cover object-center" src={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}${imageUrl}`} alt={title} />
            </div>
            <div className="text-center mt-5 text-base font-light text-gray-600 dark:text-gray-300 font-body">
                <span className="mr-2">{moment(publishedAt).format("DD-MMMM-YYYY")}</span>||
                <span className="ml-2">By {author}</span>
            </div>
            <h2 className="px-4 py-4 text-lg dark:text-white font-body font-bold text-center">{title}</h2>
            <div className="text-center mb-5">
                <Button buttonText="Read More" btnDestination={`/post/${id}`} />
            </div>
        </div>
    )
}

export default PostCard
