import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>


    </>
    return (
        <div className="navbar backdrop-blur-lg sticky top-0 z-50 p-4 md:w-11/12 mx-auto max-w-6xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="text-xl text-slate-100 font-semibold">
                    Alifa Ara
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn'>
                    <a
                        href="/cv.pdf"
                        download="cv-of-alifa.pdf"
                        className=" flex items-center gap-2"
                    >
                        <IoDownloadOutline size={20} />
                        Download Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;