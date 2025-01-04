import './logoInvert.css';
import cuLogo from '../../assets/cu-logo.png';
import phLogo from '../../assets/ph-logo.jpg';

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
            degree: "Web Development Bootcamp",
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
                <h2 className="text-4xl font-bold text-center text-white mb-10">
                    Educational Qualification
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {qualifications.map((qualification, index) => (
                        <div
                            key={index}
                            className="card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4 gradientCard"
                        >
                            {/* Use dynamic class based on logoClass */}
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
                </div>
            </div>
        </section>
    );
};

export default EducationalQualification;
