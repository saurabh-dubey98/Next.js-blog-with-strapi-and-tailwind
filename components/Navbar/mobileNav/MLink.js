import Link from "next/link";

const MLink = ({ linkName, href, toggle }) => {
    return (
        <Link href={href}>
            <a onClick={() => toggle(prev => !prev)} className="w-full px-5 py-2 block text-black font-body font-bold duration-300 hover:underline hover:text-white hover:bg-slate-800 dark:text-white md:hidden">
                {linkName}
            </a>
        </Link>
    )
}

export default MLink;
