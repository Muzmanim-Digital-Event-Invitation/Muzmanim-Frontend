import { Route, Routes } from "react-router-dom";
import "./Content.scss";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<div>Home</div>} />
            </Routes>
        </div>
    );
}

export default Content;
