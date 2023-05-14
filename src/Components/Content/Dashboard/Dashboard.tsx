import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import { servicesFunctions } from "../../../Services/ServicesFunctions";
import { EventModel } from "../../../Models/EventModel";

function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventModel[]>();

    const eventTypeMapping : any = {
        1: "יום הולדת",
        2: "חתונה",
        3: "ברית",
        4: "על האש",
        5: "אחר...",
        // Add more mappings as needed
      };

    useEffect(() => {
        servicesFunctions.getEventByUser().then((res) => {
            setEvents(res);
            console.log(res);
            
        } )
    }, [])

    return (
        <div className="Dashboard">
            <h1>איזור אישי</h1>
            <div>
                <button className="btn create_event_btn" onClick={() => navigate('/newEvent')}>ליצירת הזמנה חדשה</button>
            </div>
            <div className="events_container">
                {events?.map((event : EventModel) => (
                <div className="event_card" onClick={() => navigate("/EventManagement/" + event.id)}>
                    <div className="card_details">
                        <h3>{servicesFunctions.extractDateFromISOString(event.eventDate.toString())}</h3>
                        <h3>{event.name1}</h3>
                        <h3>{eventTypeMapping[event.eventType]}</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>
                </div>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;
