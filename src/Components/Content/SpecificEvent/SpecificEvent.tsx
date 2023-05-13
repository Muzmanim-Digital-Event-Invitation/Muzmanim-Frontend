import "./SpecificEvent.css";
import { useParams } from "react-router-dom";

function SpecificEvent(): JSX.Element {
    const { id } = useParams();

    return (
        <div className="SpecificEvent">
			פה יהיה העיצוב לפי הטופס האחרון של דניאל
            
        </div>
    );
}

export default SpecificEvent;
