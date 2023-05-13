import { Route, Routes } from "react-router-dom";
import "./Content.scss";
import HomePage from "./HomePage/HomePage";
import PageNotFound from "./PageNotFound/PageNotFound";
import Dashboard from "./Dashboard/Dashboard";
import NewEvent from "./NewEvent/NewEvent";
import EventManagement from "./Dashboard/EventManagement/EventManagement";
import SpecificEvent from "./SpecificEvent/SpecificEvent";
import EditEventInfo from "./Dashboard/EventManagement/EditEvent/EditEventInfo/EditEventInfo";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/newEvent" element={<NewEvent />} />
                <Route path="/event/:id" element={<SpecificEvent />} />
                <Route path="/EditEventInfo/:id" element={<EditEventInfo />} />
                <Route path="/EventManagement/:id" element={<EventManagement />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Content;
