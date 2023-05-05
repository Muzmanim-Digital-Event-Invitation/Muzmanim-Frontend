import { Route, Routes } from "react-router-dom";
import "./Content.scss";
import HomePage from "./HomePage/HomePage";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </div>
    );
}

export default Content;
