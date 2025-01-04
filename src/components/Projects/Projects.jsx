import { useState } from "react";
import winter1 from '../../assets/winter-1.jpeg'
import winter2 from '../../assets/winter-2.jpeg'
import winter3 from '../../assets/winter-3.jpeg'

import crowd1 from '../../assets/crowd-1.jpeg'
import crowd2 from '../../assets/crowd-2.jpeg'
import crowd3 from '../../assets/crowd-3.jpeg'

import where1 from '../../assets/where1.jpeg'
import where2 from '../../assets/where2.jpeg'
import where3 from '../../assets/where3.jpeg'
import { GoArrowRight } from "react-icons/go";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "WhereIsIt- a Lost and Found Platform ",
            image: where1,
            screenshots: [
                where1, where2, where3
            ],
            technologies: "React, Tailwind CSS, MongoDB, Express.js, Node.js",
            description:
                "WhereIsIt is a lost and found platform designed to help people reconnect with their lost belongings or claim items they have found. The platform allows users to post details about lost or found items, search for items, and manage their posts. It promotes community collaboration to solve real-world problems.",
            challenges:
                "Faced issues with payment gateway integration and optimizing database queries for fast performance.",
            improvements:
                "Planning to implement advanced search filters and improve UI responsiveness.",
            liveLink: "https://where-is-it-by-alifa.web.app",
            githubLink: "https://github.com/alifa-ara-heya/where-is-it",
        },
        {
            id: 2,
            name: "CrowdCube, a crowdfunding platform",
            image: crowd1,
            screenshots: [
                crowd1,
                crowd2,
                crowd3
            ],
            technologies: "React, Tailwind CSS, Express JS, MongoDB",
            description:
                "A modern crowdfunding platform where individuals and organizations can create, manage, and support meaningful campaigns.",
            challenges:
                "Faced challenges in implementing backend and ensuring cross-browser compatibility.",
            improvements:
                "Planning to enhance user experience. Right now, it's slow.",
            liveLink: "https://crowdcube-3f046.web.app",
            githubLink: "https://github.com/alifa-ara-heya/crowdcube",
        },
        {
            id: 3,
            name: "WinterAid - Donation Web Application",
            image: winter1,
            screenshots: [
                winter1, winter2, winter3
            ],
            technologies: "React Router, Firebase Authentication, Tailwind CSS, AOS (Animate On Scroll), DaisyUI",
            description:
                "WinterAid is a web application designed to help people donate winter clothing and essentials to those in need across Bangladesh. ",
            challenges:
                "Encountered difficulties with Firebase real-time updates and managing state efficiently.",
            improvements:
                "Planning to add division with categories.",
            liveLink: "https://winter-donation-alifa.web.app",
            githubLink: "https://github.com/alifa-ara-heya/winter-donation",
        },

    ];

    return (
        <section className=" py-16 px-6" id="projects">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-white mb-10">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="card rounded-lg shadow-lg p-6  duration-500 capitalize gradientCard  ease-in-out hover:scale-105 transition "
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg w-full mb-4 h-48 object-cover"
                            />
                            <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                                {project.name}
                            </h3>
                            <div>
                                <button
                                    className="mt-4 btn text-white ease-in-out hover:scale-105 transition duration-300"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View More
                                    <GoArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative">
                            <button
                                className="absolute top-4 right-4 text-white text-2xl"
                                onClick={() => setSelectedProject(null)}
                            >
                                &times;
                            </button>
                            <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>

                            {/* Stack of Screenshots */}
                            <div className="flex gap-4 justify-center mb-4">
                                {selectedProject.screenshots.map((screenshot, index) => (
                                    <img
                                        key={index}
                                        src={screenshot}
                                        alt={`Screenshot ${index + 1}`}
                                        className="h-[250px] rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 w-full"
                                    />
                                ))}
                            </div>


                            <p className="text-gray-300 mb-2">
                                <span className="font-bold text-gray-200">Technologies: </span>
                                {selectedProject.technologies}
                            </p>
                            <p className="text-gray-300 mb-2">
                                <span className="font-bold text-gray-200">Description: </span>
                                {selectedProject.description}
                            </p>
                            <p className="text-gray-300 mb-2">
                                <span className="font-bold text-gray-200">Challenges: </span>
                                {selectedProject.challenges}
                            </p>
                            <p className="text-gray-300 mb-4">
                                <span className="font-bold text-gray-200">Improvements: </span>
                                {selectedProject.improvements}
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 py-2 px-4 rounded text-white hover:bg-green-500 transition duration-300"
                                >
                                    Live Link
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-600 py-2 px-4 rounded text-white hover:bg-gray-500 transition duration-300"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Projects;
