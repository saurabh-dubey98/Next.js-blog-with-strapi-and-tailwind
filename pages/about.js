import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MetaHeadInfo } from "../components"

const About = () => {
    return (
        <div className="main-container-style">
            <MetaHeadInfo title="About" />
            <div className="rounded-lg overflow-hidden shadow-lg bg-zinc-100 dark:bg-slate-700 p-5 font-body mb-5">
                <h1 className="text-xl font-bold mb-2 dark:text-white">// About Techbrunch</h1>
                <p className="dark:text-slate-300">Techbrunch is a Tech blog, giving you latest articles related to tech industry. This blog is built with latest technologies that makes it fast and responsive.</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-zinc-100 dark:bg-slate-700 p-5 font-body">
                <h2 className="text-xl font-bold mb-2 dark:text-white">// Tech Stack</h2>

                <h3 className="font-bold dark:text-white mb-2">Frontend <FaAngleDown className="inline-block" /></h3>
                <ul className="dark:text-slate-300">
                    <li className="flex items-center mb-1">{'>'}
                        <img className="w-5 ml-2 dark:bg-white  rounded-full border" src="img/next-js.svg" />
                        <span className="ml-2">Nextjs</span>
                    </li>
                    <li className="flex items-center mb-1">{'>'}
                        <img className="w-5 ml-2" src="img/react-2.svg" />
                        <span className="ml-2">Reactjs</span>
                    </li>
                    <li className="flex items-center mb-1">{'>'}
                        <img className="w-5 ml-2" src="img/tailwindcss.svg" />
                        <span className="ml-2">Tailwind CSS</span>
                    </li>
                </ul>

                <h3 className="font-bold dark:text-white mb-2 mt-3">Backend <FaAngleDown className="inline-block" /></h3>
                <ul className="dark:text-slate-300">
                    <li className="flex items-center mb-1">{'>'}
                        <img className="w-5 ml-2" src="img/strapi-2.svg" />
                        <span className="ml-2">Strapi</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
