import crowd1 from '../../../../assets/crowd1.png'
import crowd2 from '../../../../assets/crowd2.png'
import crowd3 from '../../../../assets/crowd3.png'
// import blood4 from '../../../../assets/blood4.png'
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


const CrowdCube = () => {

    return (

        <div className="container mx-auto max-w-6xl mb-10 lg:mb-16">
            <h2 className='text-center text-xl font-bold'>CrowdCube</h2>
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
                        <SwiperSlide><img src={crowd1} className=' rounded-md' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={crowd2} alt="" className=' rounded-md' /></SwiperSlide>
                        <SwiperSlide><img src={crowd3} alt="" className=' rounded-md' /></SwiperSlide>
                        {/* <SwiperSlide><img src={blood4} alt="" className=' ' /></SwiperSlide> */}
                    </Swiper>
                </div>

                <div className='md:w-1/2  '>
                    <p>
                        A modern crowdfunding platform where individuals and organizations can create, manage, and support meaningful campaigns.
                    </p>
                    <ul className='list-disc list-inside p-3'>
                        <li>Create and Manage Campaigns:
                            Users can start their own campaigns with detailed information like title, description, minimum donation, goal, and deadlines.</li>
                        <li>Dynamic Sorting and Filtering:
                            View and sort campaigns based on minimum donation amounts and explore campaigns by category.</li>

                        <li>Responsive Design:
                            The platform is fully responsive, offering a seamless experience across all devices, from mobile to desktop.</li>
                        <li>Real-Time Updates:
                            Campaigns and donations are updated in real-time, providing instant feedback to users.

                        </li>
                    </ul>


                    <div className='flex justify-start items-center'>
                        <Link to='https://github.com/alifa-ara-heya/crowdcube'>
                            <Button text={'Github'} icon={<FaGithub />} /></Link>
                        <Link to='https://crowdcube-3f046.web.app'>
                            <Button text={'Live'} icon={<FaExternalLinkAlt />} />
                        </Link>
                        <Link to='/crowd-cube-details'>
                            <Button text={'Details'} icon={<FaCircleInfo />} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CrowdCube;