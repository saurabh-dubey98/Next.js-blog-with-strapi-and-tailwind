import { useState } from 'react';
import { motion } from "framer-motion"
import NavContainer from './NavContainer';
import Nav from './Nav';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger';
import MContainer from './mobileNav/MContainer';

const Navbar = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const dropIn = {
        hidden: {
            opacity: 0,
            y: "-20px"
        },
        visible: {
            opacity: 1,
            y: "0px"
        },
        exit: {
            opacity: 0,
            y: "-20px"
        }
    }

    return (
        <NavContainer>
            <Nav>
                <NavLogo />
                <div className="flex ml-8">
                    <NavLink linkName="Home" href="/" />
                    <NavLink linkName="Contact" href="/contact" />
                    <NavLink linkName="About" href="/about" />
                </div>
                <DarkModeToggle />
                <Hamburger toggle={setMobileMenuToggle} />
                {mobileMenuToggle && <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                > <MContainer toggle={setMobileMenuToggle} /> </motion.div>}
            </Nav>
        </NavContainer>
    )
}

export default Navbar
