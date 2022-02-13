import MLink from "./MLink";

const MContainer = ({ toggle }) => {
    return (
        <div className="absolute top-5 -right-4 overflow-hidden shadow-2xl mr-5 mt-2 rounded-lg bg-white border-slate-400 dark:border-slate-500 border-2 dark:bg-slate-700 md:hidden">
            <nav>
                <MLink toggle={toggle} linkName="Home" href="/" />
                <MLink toggle={toggle} linkName="About" href="/about" />
                <MLink toggle={toggle} linkName="Contact" href="/contact" />
            </nav>
        </div>

    )
}

export default MContainer;


