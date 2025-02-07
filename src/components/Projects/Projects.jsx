import BloodAid from "./individualProject/BloodAid/BloodAid";
import CrowdCube from "./individualProject/CrowdCube/CrowdCube";
import WhereIsIt from "./individualProject/WhereIsIt/WhereIsIt";

const Projects = () => {
    return (
        <div className="py-16 px-6" id="projects">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

                <BloodAid />
                <WhereIsIt />
                <CrowdCube />
            </div>
        </div>
    );
};

export default Projects;