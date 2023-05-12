// import { useParams } from "react-router-dom";
import "./EventManagement.css";
import { useEffect, useState } from "react";
import WhatsappShareButton from "./WhatsappShareButton/WhatsappShareButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MassangerShareButton from "./MassangerShareButton/MassangerShareButton";
import CopyLinkButton from "./CopyLinkButton/CopyLinkButton";
import { servicesFunctions } from "../../../../Services/ServicesFunctions";
import { EventModel } from "../../../../Models/EventModel";


function EventManagement(): JSX.Element {
    // let { id } = useParams();
    const id = "zyp9aclhc3qhr4";
    const [event, setEvent] = useState<EventModel>()

    useEffect(() => {
        console.log(id);
        servicesFunctions.getSpesificEvent(id).then((res) => {
            setEvent(res)
        })
    }, [])


    return (
        <div className="EventManagement">
            {/* <div>
                    <button className="display_event_btn btn">לצפייה בזמנה</button>
            </div> */}
            <div className="edit_event_btn_container">
                    <button className="edit_event_btn btn">עריכת פרטי הזמנה</button>
                    <button className="edit_event_btn btn">עריכת עיצוב הזמנה</button>
            </div>
                <div className="share_buttons_container">
                    <WhatsappShareButton/>
                    <MassangerShareButton/>
                    <CopyLinkButton/>
                </div>

        <div className="food_choices_and_guests_container">

                <div className="food_choices_container">
                        <div className="regular_food box">
                            <p className="p_number">{event?.regular}</p>
                            <span className="span_title">מנה רגילה</span>
                        </div>
                        <div className="vegan_food box">
                            <p className="p_number">{event?.vegan}</p>
                            <span className="span_title">צמחוני</span>
                        </div>
                        <div className="vegetarian_food box">
                            <p className="p_number">{event?.vegetarian}</p>
                            <span className="span_title">טבעוני</span>
                        </div>
                        <div className="kids_food box">
                            <p className="p_number">{event?.kids}</p>
                            <span className="span_title">מנת ילדים</span>
                        </div>
                </div>
                <div className="guests_container">
                        <div className="coming_guests box">
                            <p className="p_number">28</p>
                            <span className="span_title">אישרו</span>
                        </div>
                        <div className="not_coming_guests box">
                            <p className="p_number">8</p>
                            <span className="span_title">לא אישרו</span>
                        </div>
                </div>
        </div>


        <div className="table_guests_container">
            <table>
            <thead>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>כמות מגיעים</th>
                    <th>מספר פלאפון</th>
                    <th>עריכה</th>
                </tr>
            </thead>

                <tr>
                    <td>הראל</td>
                    <td>סראג</td>
                    <td>1</td>
                    <td>054774446</td>
                    <td><MoreVertIcon/></td>
                </tr>

                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
                <tr>
                    <td>שלו</td>
                    <td>אהרון</td>
                    <td>1</td>
                    <td>050454513</td>
                    <td><MoreVertIcon/></td>
                </tr>
            </table>

        </div>
        </div>
    );
}

export default EventManagement;
