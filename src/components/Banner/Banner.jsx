// import bannerImg from '../../assets/cool-background.png'
import './banner.css'
import { IoDownloadOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// style={{ backgroundImage: `url(${bannerImg})` }}
const Banner = () => {
    return (
        <div className=" py-12 bg-cover bg-center bg-no-repeat banner" >
            <div className='container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20  w-auto md:p-8'>

                {/* text content */}
                <div className='space-y-10 text-center'>
                    <h2 className='font-extrabold text-3xl  md:text-7xl leading-relaxed '>Frontend <br /> <span className='bg-gradient-to-r from-indigo-300 to-blue-500  bg-clip-text text-transparent'>Web Developer</span></h2>
                    <p className='text-xl font-medium md:w-3/4 mx-auto'>Crafting Dynamic Interfaces with React & Tailwind CSS – Junior Web Developer Ready to Bring Your Ideas to Life!</p>

                    <section className='flex items-center justify-center gap-4 '>
                        <Link to='https://github.com/alifa-ara-heya' target='_blank' ><FaGithub size={30} /></Link>
                        <Link to='https://www.linkedin.com/in/alifa-ara' target='_blank'><FaLinkedin size={30} /></Link>
                    </section>

                    <button className='btn'>
                        <a
                            href="/resume-alifa-ara.pdf"
                            download="resume-alifa-ara.pdf"
                            className="flex items-center gap-2"
                        >
                            <IoDownloadOutline size={20} />
                            Download Resume
                        </a>
                    </button>
                </div>

                {/* image */}
                {/* <div className=''>
                    <img src={computer} alt="" className='w-3/4 mx-auto' />
                </div> */}
            </div>
        </div>

    );
};

export default Banner;