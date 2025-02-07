import blood1 from '../../../../assets/blood1.png'
import blood2 from '../../../../assets/blood2.png'
import blood3 from '../../../../assets/blood3.png'
import blood4 from '../../../../assets/blood4.png'
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


const BloodAid = () => {

    return (

        <div className="container mx-auto max-w-6xl mb-10 lg:mb-16">
            <h2 className='text-center text-xl font-bold'>Blood Aid</h2>
            <span className='divider'></span>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='md:w-1/2 w-full'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper "
                    >
                        <SwiperSlide><img src={blood1} className=' rounded-md' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={blood2} alt="" className=' rounded-md' /></SwiperSlide>
                        <SwiperSlide><img src={blood3} alt="" className=' rounded-md' /></SwiperSlide>
                        <SwiperSlide><img src={blood4} alt="" className='rounded-md ' /></SwiperSlide>
                    </Swiper>
                </div>

                <div className='md:w-1/2  '>
                    <p>
                        Blood Aid is a web-based platform designed to simplify and streamline blood donation processes by connecting donors with recipients in need.
                    </p>
                    <ul className='list-disc list-inside p-3'>
                        <li>Built using the MERN stack (MongoDB, Express.js, React, Node.js) for robust performance and scalability.</li>
                        <li>Provides role-based access control for Admins, Volunteers, and Donors, ensuring secure and efficient operations.</li>
                        {/* <li>Includes a search functionality to locate donors based on blood group, district, and upazila.</li> */}
                        <li>Features Stripe integration for secure donation and funding management.</li>
                        <li>Offers real-time management of blood donation requests with filtering, pagination, and status updates.</li>
                    </ul>
                    {/* <p>Built using the MERN stack (MongoDB, Express.js, React, Node.js), the platform provides role-based access for administrators, volunteers, and donors, ensuring efficient management of users, donation requests, and funding.</p> */}

                    <div className='flex justify-start items-center'>
                        <Link to='https://github.com/alifa-ara-heya/blood-aid-client'>
                            <Button text={'Github'} icon={<FaGithub />} /></Link>
                        <Link to='https://blood-aid-by-alifa.web.app'>
                            <Button text={'Live'} icon={<FaExternalLinkAlt />} />
                        </Link>
                        <Link to='/blood-aid-details'>
                            <Button text={'Details'} icon={<FaCircleInfo />} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BloodAid;