
const AuthorInfo = ({ name, bio, avatar }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-md p-4 my-4 bg-slate-100 dark:bg-slate-700 flex items-center font-body">
            <div className="w-28 rounded-full overflow-hidden border-slate-500 border-4 shadow-xl mr-4">
                <img className="w-full" src={avatar} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold dark:text-white mb-1" >{name}</span>
                <span className="text-sm text-slate-500 font-bold dark:text-slate-400">{bio}</span>
            </div>
        </div>
    )
}

export default AuthorInfo
