import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "motion/react"

import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const location = useLocation();
    // const navigate = useNavigate();

    /*   const handleNavClick = (sectionId) => {
          if (location.pathname !== "/") {
              navigate(`/#${sectionId}`); // Navigate to home and scroll
          } else {
              document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
              console.log(document.getElementById(sectionId));
          }
      }; */



    const navLinks = (
        <>
            <li><HashLink smooth to="/#about" onClick={() => setIsOpen(false)} className=" cursor-pointer text-gray-400 font-semibold px-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none">About Me</HashLink></li>
            <li><HashLink to="/#skills" onClick={() => setIsOpen(false)} className=" cursor-pointer text-gray-400 font-semibold px-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none">Skills</HashLink></li>
            <li><HashLink to="/#projects" onClick={() => setIsOpen(false)} className=" cursor-pointer text-gray-400 font-semibold border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none px-4">Projects</HashLink></li>
            <li><HashLink to="/#education" onClick={() => setIsOpen(false)} className=" cursor-pointer text-gray-400 font-semibold border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none px-4">Education</HashLink></li>
            <li><HashLink to="/#contact" onClick={() => setIsOpen(false)} className=" cursor-pointer text-gray-400 font-semibold border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none px-4">Contact</HashLink></li>
        </>
    );

    return (
        <>
            {/* Navbar */}
            <div className="navbar backdrop-blur-lg sticky top-0 z-50 py-6 mx-auto max-w-7xl flex justify-between items-center">
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
                <ul className="hidden lg:flex lg:justify-center lg:items-center list-none ">
                    {/* <nav>
                        <ul className="flex space-x-4">
                            <li className=" cursor-pointer text-gray-400 font-semibold px-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none"><button onClick={() => handleNavClick("about")} className="text-gray-400 hover:text-blue-600">About Me</button></li>
                            <li><button onClick={() => handleNavClick("skills")} className="text-gray-400 hover:text-blue-600">Skills</button></li>
                            <li><button onClick={() => handleNavClick("projects")} className="text-gray-400 hover:text-blue-600">Projects</button></li>
                            <a href="#education"><button onClick={() => handleNavClick("education")} className="text-gray-400 hover:text-blue-600">Education</button></a>
                            <li><button onClick={() => handleNavClick("contact")} className="text-gray-400 hover:text-blue-600">Contact</button></li>
                        </ul>
                    </nav> */}
                    {navLinks}
                </ul>

                {/* Download Resume Button */}
                <div>
                    <button className='btn rounded-md'>
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
