import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "motion/react"

import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = (
        <>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </>
    );

    return (
        <>
            {/* Navbar */}
            <div className="navbar backdrop-blur-lg sticky top-0 z-50 p-4 md:w-11/12 mx-auto max-w-6xl flex justify-between items-center">
                {/* Left Section */}
                <div className="flex items-center">
                    {/* Sidebar Toggle Button (only on md and smaller screens) */}
                    <button onClick={() => setIsOpen(true)} className="lg:hidden text-2xl">
                        <FaBars />
                    </button>
                    <Link to='/' className="ml-4 text-xl  font-semibold">
                        Alifa Ara
                    </Link>
                </div>

                {/* Navigation Links (Shown only on large screens) */}
                <div className="hidden lg:flex space-x-6">
                    {navLinks}
                </div>

                {/* Download Resume Button */}
                <div>
                    <button className='btn'>
                        <a href="/resume-alifa-ara.pdf" download="resume-alifa-ara.pdf" className="flex items-center gap-2">
                            <IoDownloadOutline size={20} />
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>

            {/* Sidebar - Medium & Small Screens Only */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)} >
                    {/*   Clicking outside the sidebar closes it */}
                    <motion.div
                        initial={{ x: "-100%" }} // Start off-screen (hidden) (fully hidden to the left).
                        animate={{ x: 0 }} // Slide into view
                        exit={{ x: "-100%" }}  // Slide back out when closing
                        transition={{ duration: 0.3 }} // Smooth animation (0.3 seconds)
                        className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg flex flex-col p-6"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button onClick={() => setIsOpen(false)} className=" self-end">
                            <FaTimes />
                        </button>

                        {/* Navigation Links */}
                        <ul className="mt-8 space-y-4">
                            {navLinks}
                        </ul>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Navbar;
