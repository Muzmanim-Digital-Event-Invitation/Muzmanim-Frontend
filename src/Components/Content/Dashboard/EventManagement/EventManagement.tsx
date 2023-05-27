// import { useParams } from "react-router-dom";
import "./EventManagement.css";
import { useEffect, useState } from "react";
import WhatsappShareButton from "./WhatsappShareButton/WhatsappShareButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MassangerShareButton from "./MassangerShareButton/MassangerShareButton";
import CopyLinkButton from "./CopyLinkButton/CopyLinkButton";
import { servicesFunctions } from "../../../../Services/ServicesFunctions";
import { EventModel } from "../../../../Models/EventModel";
import { GuestModel } from "../../../../Models/GuestModel";
import { useNavigate, useParams } from "react-router-dom";

function EventManagement(): JSX.Element {
    let { id } = useParams();
    // const id = "zyp9aclhc3qhr4";
    const [event, setEvent] = useState<EventModel>()
    const [guests, setGuests] = useState<GuestModel[]>()
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        servicesFunctions.getSpesificEvent(id).then((res) => {
            setEvent(res)
        })
        servicesFunctions.guestsByEvent(id).then((res) => {
            console.log(res);
            
            setGuests(res)
        })
    }, [])


    function calculateComingGuestsCount(guests : GuestModel[]) {
        if (!guests || !Array.isArray(guests)) {
          return 0;
        }
      
        return guests.reduce(function(count, guest) {
          if (guest.isComing) {
            return count + guest.guestsAmount;
          }
          return count;
        }, 0);
      }

    function calculateNotComingGuestsCount(guests : GuestModel[]) {
        if (!guests || !Array.isArray(guests)) {
          return 0;
        }
      
        return guests.reduce(function(count, guest) {
          if (!guest.isComing) {
            return count ++;
          }
          return count;
        }, 0);
      }

      const regularFoodCount = guests?.reduce((count, guest) => {
        return count + guest.regular;
      }, 0) ?? 0;
      
      const veganFoodCount = guests?.reduce((count, guest) => {
        return count + guest.vegan;
      }, 0) ?? 0;

      const vegetarianFoodCount = guests?.reduce((count, guest) => {
        return count + guest.vegetarian;
      }, 0) ?? 0;

      const kidsFoodCount = guests?.reduce((count, guest) => {
        return count + guest.kids;
      }, 0) ?? 0;

    return (

      <div className="EventManagement">
        {/* <div>
                    <button className="display_event_btn btn">לצפייה בזמנה</button>
            </div> */}
        <div className="edit_event_btn_container">
          <button className="edit_event_btn btn"  onClick={() => navigate("/EditEventInfo/" + id)}>עריכת פרטי הזמנה</button>
          <button className="edit_event_btn btn"  onClick={() => navigate("/EditEventDesign/" + id)} >עריכת עיצוב הזמנה</button>
          <button className="edit_event_btn btn"  onClick={() => navigate("/event/" + id)}>צפייה הזמנה</button>
        </div>
        <div className="share_buttons_container">
          <WhatsappShareButton id={id}/>
          <MassangerShareButton id={id} />
          <CopyLinkButton id={id}/>
        </div>

        <div className="food_choices_and_guests_container">
          <div className="food_choices_container">
            {event?.regular ? 
              <div className="regular_food box">
                <p className="p_number">{regularFoodCount}</p>
                <span className="span_title">מנה רגילה</span>
              </div>
            : <></> }

            {event?.vegan ? 
              <div className="vegan_food box">
                <p className="p_number">{veganFoodCount}</p>
                <span className="span_title">צמחוני</span>
              </div>
            : <></> }
            {event?.vegetarian ? 
              <div className="vegetarian_food box" >
                <p className="p_number">{vegetarianFoodCount}</p>
                <span className="span_title">טבעוני</span>
              </div>
            : <></> }

            {event?.kids ? 
              <div className="kids_food box">
                <p className="p_number">{kidsFoodCount}</p>
                <span className="span_title">מנת ילדים</span>
              </div>
            : <></> }
          </div>
          <div className="guests_container">
            <div className="coming_guests box">
              <p className="p_number">{calculateComingGuestsCount(guests)}</p>
              <span className="span_title">אישרו</span>
            </div>
            <div className="not_coming_guests box">
              <p className="p_number">
                {calculateNotComingGuestsCount(guests)}
              </p>
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
            <tbody>
              {guests?.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.guestsAmount}</td>
                  <td>{guest.phone}</td>
                  <td>
                    <MoreVertIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default EventManagement;
