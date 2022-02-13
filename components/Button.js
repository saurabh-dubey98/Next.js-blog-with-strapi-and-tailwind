import Link from "next/link"

const Button = ({ buttonText, btnDestination }) => {
    return (
        <Link href={btnDestination}>
            <a className="rounded-3xl shadow-md bg-purple-800 text-white px-5 py-2 font-body font-bold text-base inline-block hover:scale-110 hover:bg-purple-900 duration-300">{buttonText}</a>
        </Link>
    )
}

export default Button
