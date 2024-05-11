import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="nav" className='sticky top-0 bg-[#1e3a8a] z-[1] '>
            <nav className="relative flex flex-col md:flex-row md:justify-between md:items-center text-white">
                <div className='flex justify-between items-center'>
                    <Link to="hero" smooth={true} duration={500} offset={-1000}>
                    <h2 className='mx-4 my-2 sm:my-0 text-3xl hover:scale-110 transition-transform duration-300 ease-in-out font-cursive hover:cursor-default'>
                        Ankit <span className='text-blue-400'>Kumar</span>
                    </h2>
                    </Link>
                    <button onClick={toggleMenu} className='m-4 text-2xl md:hidden block'>
                        {!menuOpen && <GiHamburgerMenu />}
                        {menuOpen && <IoMdClose />}
                    </button>
                </div>
                <ul className={`absolute top-full left-0 ${menuOpen ? 'w-full bg-blue-900 text-white' : ''} md:relative md:flex md:items-center md:text-lg ${menuOpen ? 'block' : 'hidden'}`}>
                    <Link to="hero" smooth={true} duration={500} offset={-1000}>
                        <li className={`m-4 hover:cursor-pointer`}>
                            Home
                        </li>
                    </Link>
                    <Link to="about" smooth={true} duration={500} offset={-100}>
                        <li className={`m-4 hover:cursor-pointer`}>
                            About Me
                        </li>
                    </Link>
                    <Link to="skills" smooth={true} duration={500} offset={-100}>
                    <li className={`m-4 hover:cursor-pointer`}>
                        My Skills
                    </li>
                    </Link>
                    <Link to="projects" smooth={true} duration={500} offset={-70}>
                    <li className={`m-4 hover:cursor-pointer`}>
                        My Projects
                    </li>
                    </Link>
                    <Link to="contact" smooth={true} duration={500} offset={-10}>
                    <li className='m-4'>
                        <button className={`${menuOpen ? ' text-white' : ''}`}>
                            Contact Me
                        </button>
                    </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
