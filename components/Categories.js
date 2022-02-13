import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Notification } from '.';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_NAME}/categories`);
                const data = await res.json();
                if (data?.error?.status === 404) {
                    setIsError(true);
                }
                setCategories(data.data);
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
        }
        getCategories();
    }, [])

    if (isError) {
        return <Notification text="Some error occured while loading this component" type="danger" />
    }

    return (
        <div className="overflow-hidden rounded-lg bg-slate-100 p-5 dark:bg-slate-700 shadow-md mb-5">
            <div>
                <h2 className="mb-4 font-body font-extrabold uppercase tracking-wider text-lg dark:text-white">Categories</h2>
                <div>
                    {categories?.map(category => {
                        const { Category } = category.attributes;
                        return (<Link href={`/category/${category.id}`} key={category.id}>
                            <a >
                                <div className="group mb-2 flex flex-col font-body">
                                    <p className="group-hover:underline group-hover:text-purple-600 duration-500 dark:text-white">{Category}</p>
                                </div>
                            </a>
                        </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories
