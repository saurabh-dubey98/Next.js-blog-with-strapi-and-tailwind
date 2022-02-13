import React from 'react'
import moment from 'moment'

const Comment = ({ name, time, comment }) => {
    return (
        <div className="border-l-4 border-blue-400 pl-3 py-2 mb-2 bg-blue-100 dark:bg-slate-600 leading-4">
            <h2 className="font-bold">{name}</h2>
            <span className="text-sm text-slate-800 dark:text-slate-300 block mb-1">{moment(time).format("DD-MMM-YYYY H:mm:ss")}</span>
            <p>{comment}</p>
        </div>
    )
}

export default Comment
