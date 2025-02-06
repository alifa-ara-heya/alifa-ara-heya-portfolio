import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Details: {id}</h2>
        </div>
    );
};

export default DetailsPage;