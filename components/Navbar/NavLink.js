import Link from "next/link";

const NavLink = ({ linkName, href }) => {
    return (
        <Link href={href}>
            <a className="hidden text-black font-body font-bold mr-4 hover:underline dark:text-white md:block">
                {linkName}
            </a>
        </Link>
    )
}

export default NavLink
