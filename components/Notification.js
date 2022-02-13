import React from 'react'

const Notification = ({ text, type }) => {
    return (
        <div className={`font-body font-bold p-3 my-5 text-lg rounded-lg shadow-md text-white ${type === "danger" && 'bg-red-500'} ${type === "success" && 'bg-emerald-600'}`}>
            {text}
        </div>
    )
}

export default Notification
