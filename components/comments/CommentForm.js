import { useState } from 'react'
import { Notification } from '..';

const CommentForm = ({ postId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [commentStatus, setCommentStatus] = useState({
        type: '',
        text: '',
        status: false
    });

    const onSubmithandler = async (e) => {
        e.preventDefault();

        const commentData = {
            data: {
                Name: name,
                Email: email,
                Comment: comment,
                posts: { id: postId }
            }
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        });

        if (res.status === 200) {
            setCommentStatus({ type: 'success', text: 'Your comment is successfully submitted.', status: true });

            setTimeout(() => {
                setCommentStatus({ type: '', text: '', status: false });
            }, 4000);
        } else {
            setCommentStatus({ type: 'danger', text: 'Something went wrong please try again', status: true });

            setTimeout(() => {
                setCommentStatus({ type: '', text: '', status: false });
            }, 4000);
        }
    }

    if (commentStatus.status) {
        return <Notification text={commentStatus.text} type={commentStatus.type} />
    }

    return (
        <div className="rounded-lg shadow-md p-5 bg-slate-100 dark:bg-slate-700 font-body dark:text-white">
            <h2 className="font-extrabold text-2xl mb-3">Leave a reply:</h2>
            <form onSubmit={onSubmithandler}>
                <label className="block mb-1 font-bold" htmlFor="name">Name</label>
                <input required onChange={e => setName(e.target.value)} className="rounded-lg py-1 pl-2 mb-4 w-full outline-none dark:text-black duration-300 dark:bg-slate-400 dark:focus:bg-slate-300 bg-slate-300 focus:bg-slate-200" type="text" id="name" />
                <label className="block mb-1 font-bold" htmlFor="email" >Email</label>
                <input required onChange={e => setEmail(e.target.value)} className="rounded-lg py-1 pl-2 mb-4 w-full outline-none dark:text-black duration-300 dark:bg-slate-400 dark:focus:bg-slate-300 bg-slate-300 focus:bg-slate-200" type="email" id="email" />
                <label className="block mb-1 font-bold" htmlFor="comment">Comment</label>
                <textarea required onChange={e => setComment(e.target.value)} className="rounded-lg py-1 pl-2 mb-4 w-full outline-none dark:text-black duration-300 dark:bg-slate-400 dark:focus:bg-slate-300 bg-slate-300 focus:bg-slate-200" id="comment" />
                <button className="font-bold w-full py-2 mb-1 text-white text-lg duration-300 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 rounded-full shadow-lg tracking-wider">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm
