import Link from 'next/link';

const Pagination = ({ page, data, type }) => {
    const pageCount = data.pagination.pageCount;
    const pageBtnLinks = [];
    for (let i = 0; i < pageCount; i++) {
        if (i === 0) {
            pageBtnLinks.push(<Link href="/" key={i}>
                <a className={`pagination-btn ${page === "1" && "active-pagination-btn"}`}>{i + 1}</a>
            </Link>)
        } else {
            pageBtnLinks.push(<Link href={`/page/${i + 1}`} key={i}>
                <a className={`pagination-btn ${(i + 1).toString() === page && "active-pagination-btn"}`}>{i + 1}</a>
            </Link>)
        }
    }

    return <div className="mt-5">
        <Link href={`${page === "2" ? '/' : '/page/' + (parseInt(page) - 1).toString()}`}><a className={`pagination-btn ${page === "1" && 'pointer-events-none'}`}>Prev</a></Link>
        {pageBtnLinks}
        <Link href={`${'/page/' + (parseInt(page) + 1).toString()}`}><a className={`pagination-btn ${page === pageCount.toString() && 'pointer-events-none'}`}>Next</a></Link>
    </div>
};

export default Pagination;
