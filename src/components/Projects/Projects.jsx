import ProjectCard from "./ProjectCard";
import where1 from '../../assets/where-s-1.png'
import where2 from '../../assets/where-s-2.png'
import where3 from '../../assets/where-s-3.png'
import where4 from '../../assets/where-s-4.png'
import crowd1 from '../../assets/crowd1.png'
import crowd2 from '../../assets/crowd2.png'
import crowd3 from '../../assets/crowd3.png'
import blood1 from '../../assets/blood1.png'
import blood2 from '../../assets/blood2.png'
import blood3 from '../../assets/blood3.png'
import blood4 from '../../assets/blood4.png'

const Projects = () => {
    return (
        <div className="py-16 px-6" id="projects">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* project1 */}
                    <ProjectCard heading={'Blood Aid, A Blood Donation Platform'} screenshot1={blood1} screenshot2={blood2} screenshot3={blood3} screenshot4={blood4} technologies={'React, JWT Authentication, Tanstack Query, React Hook Form, Tailwind CSS, Express JS, MongoDB'} description={'Blood Aid is a user-friendly platform designed to connect blood donors with recipients in need. It streamlines the donation process while promoting a safe and efficient blood donation network.'} livelink={'https://blood-aid-by-alifa.web.app'} github={'https://github.com/alifa-ara-heya/blood-aid-client'} id={'1'} />

                    {/* project2 */}
                    <ProjectCard heading={'WhereIsIt- a Lost and Found Platform'} screenshot1={where1} screenshot2={where2} screenshot3={where3} screenshot4={where4} technologies={'React, Tailwind CSS, MongoDB, Express.js, Node.js'} description={'WhereIsIt is a lost and found platform designed to help people reconnect with their lost belongings or claim items they have found. The platform allows users to post details about lost or found items, search for items, and manage their posts. It promotes community collaboration to solve real-world problems.'} livelink={'https://where-is-it-by-alifa.web.app'} github={'https://github.com/alifa-ara-heya/where-is-it'} id={'2'} />

                    {/* project3 */}
                    <ProjectCard heading={'CrowdCube, a crowdfunding platform'} screenshot1={crowd1} screenshot2={crowd2} screenshot3={crowd3} technologies={'React, Tailwind CSS, Express JS, MongoDB'} description={'A modern crowdfunding platform where individuals and organizations can create, manage, and support meaningful campaigns.'} livelink={'https://crowdcube-3f046.web.app'} github={'https://github.com/alifa-ara-heya/crowdcube'} id={'3'} />
                </div>
            </div>

            {/* <button className="btn">See All Projects</button> */}
        </div>
    );
};

export default Projects;