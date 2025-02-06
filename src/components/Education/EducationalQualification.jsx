import './logoInvert.css';
import cuLogo from '../../assets/cu-logo.png';
import phLogo from '../../assets/ph-logo.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './custom-tabs.css'

const EducationalQualification = () => {
    const qualifications = [
        {
            logo: cuLogo,
            degree: "Bachelor of Science in Chemistry",
            institution: "University of Chittagong",
            year: "2022", // Replace with the actual year
            description: "CGPA: 3.54",
            logoClass: "logo-invert w-[120px] h-[180px]", // Apply invert for this logo
        },
        {
            logo: phLogo,
            degree: "Complete Web Development Course",
            institution: "Programming Hero",
            year: "June, 2024-ongoing", // Replace with the actual year
            description:
                "Frontend focused MERN stack development, learning React, Tailwind CSS. Basic hands-on experience in MongoDB, Express.js.",
            logoClass: "no-invert w-[200px] h-[180px]", // No invert for this logo
        },
    ];

    return (
        <section className="bg-gray-900 py-16 px-6" id="education">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center  mb-10">
                    Education and Courses
                </h2>

                <Tabs>
                    <TabList className='flex justify-center items-center gap-6 my-6 border-b border-gray-600 pb-4'>
                        <Tab className='px-4 py-2 cursor-pointer text-gray-400 font-semibold border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none'>Education</Tab>
                        <Tab className='px-4 py-2 cursor-pointer text-gray-400 font-semibold border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 transition-all duration-300 focus:outline-none'>Courses</Tab>
                    </TabList>

                    <TabPanel className={''}>
                        <div
                            className="card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4 gradientCard text-center "
                        >
                            {/* Use dynamic class based on logoClass */}
                            <img
                                src={qualifications[0].logo}
                                className={`${qualifications[0].logoClass} mx-auto`}
                                alt={`${qualifications[0].institution} Logo`}
                            />
                            <h3 className="text-2xl font-semibold text-gray-200 my-2">
                                {qualifications[0].degree}
                            </h3>
                            <p className="text-gray-400 mb-1">
                                <span className="font-bold text-gray-300">Institution: </span>
                                {qualifications[0].institution}
                            </p>
                            <p className="text-gray-400 mb-2">
                                <span className="font-bold text-gray-300">Year: </span>
                                {qualifications[0].year}
                            </p>
                            {qualifications[0].description && (
                                <p className="text-gray-400">
                                    <span className="font-bold text-gray-300">Description: </span>
                                    {qualifications[0].description}
                                </p>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div
                            className="card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4 gradientCard text-center"
                        >
                            {/* Use dynamic class based on logoClass */}
                            <img
                                src={qualifications[1].logo}
                                className={`${qualifications[1].logoClass} mx-auto`}
                                alt={`${qualifications[1].institution} Logo`}
                            />
                            <h3 className="text-2xl font-semibold text-gray-200 my-2">
                                {qualifications[1].degree}
                            </h3>
                            <p className="text-gray-400 mb-1">
                                <span className="font-bold text-gray-300">Institution: </span>
                                {qualifications[1].institution}
                            </p>
                            <p className="text-gray-400 mb-2">
                                <span className="font-bold text-gray-300">Year: </span>
                                {qualifications[1].year}
                            </p>
                            {qualifications[1].description && (
                                <p className="text-gray-400 md:w-1/2 mx-auto">
                                    <span className="font-bold text-gray-300">Description: </span>
                                    <span className=''>{qualifications[1].description}</span>
                                </p>
                            )}
                        </div>
                    </TabPanel>
                </Tabs>

                {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {qualifications.map((qualification, index) => (
                        <div
                            key={index}
                            className="card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4 gradientCard"
                        >
                            
                            <img
                                src={qualification.logo}
                                className={`${qualification.logoClass} `}
                                alt={`${qualification.institution} Logo`}
                            />
                            <h3 className="text-2xl font-semibold text-gray-200 my-2">
                                {qualification.degree}
                            </h3>
                            <p className="text-gray-400 mb-1">
                                <span className="font-bold text-gray-300">Institution: </span>
                                {qualification.institution}
                            </p>
                            <p className="text-gray-400 mb-2">
                                <span className="font-bold text-gray-300">Year: </span>
                                {qualification.year}
                            </p>
                            {qualification.description && (
                                <p className="text-gray-400">
                                    <span className="font-bold text-gray-300">Description: </span>
                                    {qualification.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default EducationalQualification;
