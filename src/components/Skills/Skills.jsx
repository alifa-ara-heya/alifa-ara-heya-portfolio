import '../AboutMe/aboutMe.css'
import reactLogo from '../../assets/react-logo.png'
import tailwindLogo from '../../assets/tailwind-logo.png'
import nodeLogo from '../../assets/node-logo.png'
import expressLogo from '../../assets/express-logo.png'
import mongoLogo from '../../assets/mongo-logo.png'
import firebaseLogo from '../../assets/firebase-logo.png'
const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "React", logo: reactLogo },
                { name: "Tailwind CSS", logo: tailwindLogo },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", logo: nodeLogo },
                { name: "Express.js", logo: expressLogo },
                { name: "MongoDB", logo: mongoLogo },
            ],
        },
        {
            category: "Tools",
            items: [
                { name: "Firebase", logo: firebaseLogo },
            ],
        },
    ];

    return (
        <section className=" py-16 px-6" id="skills">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-white mb-10">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="card rounded-lg p-6 shadow-lg gradientCard">
                            <h3 className="text-2xl font-semibold text-gray-200 mb-4 text-center">{skillCategory.category}</h3>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {skillCategory.items.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center text-center gap-2 hover:scale-105 transition transform duration-300"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain"
                                        />
                                        <span className="text-gray-300 text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
