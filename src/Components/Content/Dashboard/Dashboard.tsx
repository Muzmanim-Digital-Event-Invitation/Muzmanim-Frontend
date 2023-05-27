import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import { servicesFunctions } from "../../../Services/ServicesFunctions";
import { EventModel } from "../../../Models/EventModel";
import { config } from "../../../Services/config";



import eventTopImage1 from "../../../assets/eventTopImage1.jpg"
import eventTopImage2 from "../../../assets/eventTopImage2.jpg";
import eventTopImage3 from "../../../assets/eventTopImage3.jpg";



function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventModel[]>();

   
    useEffect(() => {
        servicesFunctions.getEventByUser().then((res) => {
            setEvents(res);
            console.log(res);
            
        } )
    }, [])

    const eventTopImages = [eventTopImage1, eventTopImage2, eventTopImage3]; 

    
    return (
        <div className="Dashboard">
            <h1>איזור אישי</h1>
            <div>
                <button className="btn create_event_btn" onClick={() => navigate('/newEvent')}>ליצירת הזמנה חדשה</button>
            </div>
            <div className="events_container">
                {events?.map((event : EventModel) => (
                <div key={event.id} className="event_card" onClick={() => navigate("/EventManagement/" + event.id)}>
                    <div className="card_details">
                        
                        <img src={eventTopImages[Number(event.imageId) - 1] ?? (event.imageId === "undefined" ? "" : config.IMAGE_URL + event.imageId)} alt="" />

                        <img src="" alt="" />
                        <h3>{servicesFunctions.extractDateFromISOString(event.eventDate.toString())}</h3>
                        <h3>{event.name1}</h3>
                        <h3>{config.eventTypeMapping[event.eventType].label}</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>
                </div>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;
