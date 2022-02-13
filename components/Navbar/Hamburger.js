import { BiMenu } from 'react-icons/bi';

const Hamburger = ({ toggle }) => {
    const clickHandler = () => {
        toggle(prev => !prev)
    }

    return (
        <div onClick={clickHandler} className="md:hidden text-xl ml-1 border p-2 rounded-md duration-300 active:bg-orange-300 hover:bg-orange-200 cursor-pointer border-black dark:hover:text-black dark:border-white dark:text-white">
            <BiMenu />
        </div>
    )
}

export default Hamburger;
