import { useEffect, useState } from 'react'
import qs from 'qs';
import { Comment } from '..';

const CommentsContainer = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const query = qs.stringify({
                filters: {
                    posts: {
                        id: {
                            $eq: postId.toString()
                        }
                    }
                }
            })

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/comments?${query}`);
                const data = await res.json();
                setComments(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        getComments();
    }, [postId])

    return (
        <div className="rounded-lg shadow-md p-5 bg-slate-100 dark:bg-slate-700 font-body dark:text-white">
            <h2 className="font-bold text-2xl mb-3">Comments</h2>
            <div className="">
                {comments.length === 0 && <h3>No comments found for this article.</h3>}
                {comments.length > 0 && comments.map(comment => {
                    const { Name, Comment: commentContent, createdAt } = comment.attributes;
                    return <Comment key={comment.id} name={Name} time={createdAt} comment={commentContent} />
                })}
            </div>
        </div>
    )
}

export default CommentsContainer
