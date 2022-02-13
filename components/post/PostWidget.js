import { useEffect, useState } from 'react'
import Link from 'next/link';
import moment from 'moment';
import { Notification } from '..';

const PostWidget = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/posts?sort=publishedAt:desc`);
                const data = await res.json();
                setRecentPosts(data.data.slice(0, 3));
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
        }
        getPosts();
    }, [])

    if (isError) {
        return <Notification text="Some error occured while loading this component" type="danger" />
    }

    return <div className="overflow-hidden rounded-lg bg-slate-100 p-5 dark:bg-slate-700 shadow-md mb-5">
        <div>
            <h2 className="mb-4 font-body font-extrabold uppercase tracking-wider text-lg dark:text-white">Recent Posts</h2>
            <div>
                {recentPosts.map(post => {
                    const { Title, publishedAt } = post.attributes;
                    return (<Link href={`/post/${post.id}`} key={post.id}>
                        <a>
                            <div className="group mb-2 flex flex-col font-body">
                                <p className="group-hover:underline group-hover:text-purple-600 duration-500 dark:text-white">{Title}</p>
                                <span className="text-slate-500 text-sm" >{moment(publishedAt).format("DD-MMM-YYYY")}</span>
                            </div>
                        </a>
                    </Link>)
                })}
            </div>
        </div>
    </div>;
}

export default PostWidget
