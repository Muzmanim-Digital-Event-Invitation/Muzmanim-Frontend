import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import { servicesFunctions } from "../../../Services/ServicesFunctions";
import { EventModel } from "../../../Models/EventModel";
import { config } from "../../../Services/config";



import eventTopImage1 from "../../../assets/eventTopImage1.jpg"
import eventTopImage2 from "../../../assets/eventTopImage2.jpg";
import eventTopImage3 from "../../../assets/eventTopImage3.jpg";
import LoaderEnvelope from "../SpecificEvent/LoaderEnvelope/LoaderEnvelope";



function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventModel[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true)

   
    useEffect(() => {
        setIsLoading(true)
        servicesFunctions.getEventByUser().then((res) => {
            setEvents(res);
            console.log(res);
            setIsLoading(false)
            
        } )
    }, [])

    const eventTopImages = [eventTopImage1, eventTopImage2, eventTopImage3]; 

    
    return (
        <div className="Dashboard">
            <h1>איזור אישי</h1>
            <div>
                <button className="btn create_event_btn" onClick={() => navigate('/newEvent')}>ליצירת הזמנה חדשה</button>
            </div>

            {/* {events.length === 0 ?? <div>אין עדיין הזמנות</div>} */}

            {isLoading ? 
            <LoaderEnvelope/> :
            <div className="events_container">
                {events.length > 0 ? 
                events.map((event: EventModel) => (
                    <div key={event.id} className="event_card" onClick={() => navigate("/EventManagement/" + event.id)}>
                    <div className="card_details">
                        {event.imageId === "undefined" ? 
                        <></>
                        :
                        <img src={eventTopImages[Number(event.imageId) - 1] ?? (event.imageId === "undefined" ? "" : config.IMAGE_URL + event.imageId)} alt="" />
                        }
                        <h3 className={event.imageId === "undefined" ? "no_image_first_h3_child"  : ""}>{servicesFunctions.extractDateFromISOString(event.eventDate.toString())}</h3>
                        <h3>{event.name1}</h3>
                        <h3>{config.eventTypeMapping[event.eventType]?.label}</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>
                    </div>
                ))
                : <div>אין עדיין הזמנות</div>}



            </div>
            }
        </div>
    );
}

export default Dashboard;
