import where1 from '../../../../assets/where-s-1.png'
import where2 from '../../../../assets/where-s-2.png'
import where3 from '../../../../assets/where-s-3.png'
import where4 from '../../../../assets/where-s-4.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import '../../paginationBullets.css'
import Button from '../../../myButton/Button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const WhereIsIt = () => {

    return (

        <div className="container mx-auto max-w-6xl mb-10 lg:mb-16">
            <h2 className='text-center text-xl font-bold'>WhereIsIt</h2>
            <span className='divider'></span>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='md:w-1/2 w-full flex-1'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper "
                    >
                        <SwiperSlide><img src={where1} className='rounded-md' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={where2} alt="" className=' rounded-md' /></SwiperSlide>
                        <SwiperSlide><img src={where3} alt="" className=' rounded-md' /></SwiperSlide>
                        <SwiperSlide><img src={where4} alt="" className=' rounded-md' /></SwiperSlide>
                    </Swiper>
                </div>

                <div className='md:w-1/2'>
                    <p>
                        WhereIsIt is a lost and found platform designed to help people reconnect with their lost belongings or claim items they have found.
                    </p>
                    <ul className='list-disc list-inside p-3'>
                        <li>Built a responsive platform for managing lost and found items with secure JWT-based authentication.</li>
                        <li>Implemented search, filters, and recovery tracking features using React and Firebase.
                        </li>
                        {/* <li>Includes a search functionality to locate donors based on blood group, district, and upazila.</li> */}
                        <li>Designed a dynamic UI using Tailwind CSS, DaisyUI, and Lottie animations.</li>
                        <li>Developed RESTful APIs for post management and user authentication using Node.js, Express.js, and
                            MongoDB.
                        </li>
                    </ul>


                    <div className='flex justify-start items-center'>
                        <Link to='https://github.com/alifa-ara-heya/where-is-it'>
                            <Button text={'Github'} icon={<FaGithub />} /></Link>
                        <Link to='https://where-is-it-by-alifa.web.app'>
                            <Button text={'Live'} icon={<FaExternalLinkAlt />} />
                        </Link>
                        <Link to='/where-is-it-details'>
                            <Button text={'Details'} icon={<FaCircleInfo />} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WhereIsIt;