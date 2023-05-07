import { Route, Routes } from "react-router-dom";
import "./Content.scss";
import HomePage from "./HomePage/HomePage";
import PageNotFound from "./PageNotFound/PageNotFound";
import Dashboard from "./Dashboard/Dashboard";
import NewEvent from "./NewEvent/NewEvent";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/newEvent" element={<NewEvent />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Content;
