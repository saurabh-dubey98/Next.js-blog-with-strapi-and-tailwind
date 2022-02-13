import Link from "next/link";
import { HiOutlineViewGrid } from 'react-icons/hi';


const NavLogo = () => {
    return (
        <Link href="/">
            <a className="flex items-center group">
                <span className="text-black text-xl rotate-45 group-hover:rotate-0 duration-300 dark:text-white">
                    <HiOutlineViewGrid />
                </span>
                <span className="ml-2 font-body text-xl font-extrabold text-black dark:text-white">
                    Tectbrunch
                </span>
            </a>
        </Link>
    )
}

export default NavLogo
