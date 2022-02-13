import React from 'react';
import Link from 'next/link';

const Page404 = () => {
    return <main className="main-container-style flex justify-center">
        <div className="mt-24 text-center dark:text-slate-300">
            <h1 className="text-9xl tracking-wider">404</h1>
            <p className="text-xl mt-2 tracking-wider">Page not found :(</p>
            <Link href="/">
                <a className="mt-4 inline-block uppercase tracking-widest font-medium hover:underline">{`<--`} Go Back To Homepage</a>
            </Link>
        </div>
    </main>;
};

export default Page404;
