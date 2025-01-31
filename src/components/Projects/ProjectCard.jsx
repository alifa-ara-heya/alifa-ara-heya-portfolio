import DetailsModal from "./DetailsModal";

const ProjectCard = ({ heading, screenshot1, screenshot2, screenshot3, screenshot4, technologies, description, livelink, github, id }) => {
    return (
        <div>
            {/* <button type="button" onClick={() => document.getElementById('my_modal_5').showModal()}> */}
            <button type="button" onClick={() => document.getElementById(id).showModal()}>
                <div className="card rounded-lg shadow-lg p-6 duration-500 capitalize gradientCard  ease-in-out hover:scale-105 transition ">
                    <img
                        src={screenshot1}
                        className="rounded-lg w-full mb-4 h-48 object-cover"
                    />

                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                        {heading}
                    </h3>
                </div>
            </button>
            <DetailsModal heading={heading} screenshot1={screenshot1} screenshot2={screenshot2} screenshot3={screenshot3} technologies={technologies} description={description} livelink={livelink} github={github} screenshot4={screenshot4} id={id} />
        </div>
    );
};

export default ProjectCard;