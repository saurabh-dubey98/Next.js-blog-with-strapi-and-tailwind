import { Navbar, Footer } from '.'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-200 dark:bg-gray-800">
            <Navbar />
            <span className="flex-1">
                {children}
            </span>
            <Footer />
        </div>
    )
}

export default Layout
