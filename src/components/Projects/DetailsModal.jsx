// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const DetailsModal = ({ heading, screenshot1, screenshot2, screenshot3, screenshot4, technologies, description, livelink, github, id }) => {
    return (
        // <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={screenshot1} className=' w-full' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={screenshot2} alt="" className='w-full ' /></SwiperSlide>
                    <SwiperSlide><img src={screenshot3} alt="" className=' w-full ' /></SwiperSlide>
                    {!!screenshot4 && <SwiperSlide><img src={screenshot4} alt="" className=' w-full ' /></SwiperSlide>}

                </Swiper>


                <h2 className="text-xl font-bold my-4">{heading}</h2>

                <p className="text-gray-300 mb-2">
                    <span className="font-bold text-gray-200">Technologies: </span>
                    {technologies}
                </p>

                <p className="text-gray-300 mb-2">
                    <span className="font-bold text-gray-200">Description: </span>
                    {description}
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 py-2 px-4 rounded text-white hover:bg-green-500 transition duration-300"
                    >
                        Live Link
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 py-2 px-4 rounded text-white hover:bg-gray-500 transition duration-300"
                    >
                        GitHub
                    </a>
                    {/* <Link to={`/details/${id}`}>
                        <button className='bg-blue-900 py-2 px-4 rounded text-white hover:bg-gray-500 transition duration-300'>View Details</button>
                    </Link> */}
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <div className='flex justify-center items-center'>
                            <button className="rounded-btn"><GrClose /></button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default DetailsModal;