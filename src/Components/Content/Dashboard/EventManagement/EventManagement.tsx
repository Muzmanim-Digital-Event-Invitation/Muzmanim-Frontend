// import { useParams } from "react-router-dom";
import "./EventManagement.css";
import { useEffect, useState } from "react";
import WhatsappShareButton from "./WhatsappShareButton/WhatsappShareButton";
import MassangerShareButton from "./MassangerShareButton/MassangerShareButton";
import CopyLinkButton from "./CopyLinkButton/CopyLinkButton";
import { servicesFunctions } from "../../../../Services/ServicesFunctions";
import { EventModel } from "../../../../Models/EventModel";
import { GuestModel } from "../../../../Models/GuestModel";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditAndDeleteGuestMenu from "./EditAndDeleteGuestMenu/EditAndDeleteGuestMenu";
import LoaderEnvelope from "../../SpecificEvent/LoaderEnvelope/LoaderEnvelope";


function EventManagement(): JSX.Element {
  let { id } = useParams();
  // const id = "zyp9aclhc3qhr4";
  const [event, setEvent] = useState<EventModel>()
  const [guests, setGuests] = useState<GuestModel[]>()
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    setIsLoading(true)
    console.log(id);
    servicesFunctions.getSpesificEvent(id).then((res) => {
      setEvent(res)
      setIsLoading(false)
    })
    servicesFunctions.guestsByEvent(id).then((res) => {
      console.log(res);

      setGuests(res)
    })
  }, [refresh])


  const [openNote, setOpenNote] = useState(false);

  const handleOpenNote = () => {
    setOpenNote(true);
  };

  const handleCloseNote = () => {
    setOpenNote(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    servicesFunctions.deleteEventById(id).then(() => navigate("/dashboard"))
    setOpen(false);
  };


  function calculateComingGuestsCount(guests: GuestModel[]) {
    if (!guests || !Array.isArray(guests)) {
      return 0;
    }

    return guests.reduce(function (count, guest) {
      if (guest.isComing) {
        return count + guest.guestsAmount;
      }
      return count;
    }, 0);
  }

  function calculateNotComingGuestsCount(guests: GuestModel[]) {
    if (!guests || !Array.isArray(guests)) {
      return 0;
    }
  
    return guests.reduce(function (count, guest) {
      if (Number(guest.isComing) === 0) {
        return count + 1;
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
    <div className="EventManagement_Container">

      {isLoading ?
        <LoaderEnvelope /> :

        <div className="EventManagement">
          {/* <div>
                    <button className="display_event_btn btn">לצפייה בזמנה</button>
            </div> */}


          <div className="edit_event_btn_container">
            <button className="edit_event_btn btn" onClick={() => navigate("/EditEventInfo/" + id)}>עריכת פרטי הזמנה</button>
            {/* <button className="edit_event_btn btn" onClick={() => navigate("/EditEventDesign/" + id)} >עריכת עיצוב הזמנה</button> */}
            <button className="edit_event_btn btn" onClick={() => navigate("/event/" + id)}>צפייה הזמנה</button>
          </div>
          <div className="share_buttons_container">
            <WhatsappShareButton id={id} />
            <MassangerShareButton id={id} />
            <CopyLinkButton id={id} />
          </div>

          <div className="food_choices_and_guests_container">

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
            <div className="food_choices_container">
              {event?.regular ?
                <div className="regular_food box">
                  <p className="p_number">{regularFoodCount}</p>
                  <span className="span_title">מנה רגילה</span>
                </div>
                : <></>}

              {event?.vegetarian ?
                <div className="vegetarian_food box">
                  <p className="p_number">{vegetarianFoodCount}</p>
                  <span className="span_title">צמחוני</span>
                </div>
                : <></>}
              {event?.vegan ?
                <div className="vegan_food box" >
                  <p className="p_number">{veganFoodCount}</p>
                  <span className="span_title">טבעוני</span>
                </div>
                : <></>}

              {event?.kids ?
                <div className="kids_food box">
                  <p className="p_number">{kidsFoodCount}</p>
                  <span className="span_title">מנת ילדים</span>
                </div>
                : <></>}
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
                  <th>הערות</th>
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
                    <td title={guest.notes}>{guest.notes ? <div>
                      <MailOutlineIcon onClick={handleOpenNote} />
                      <Dialog open={openNote} onClose={handleCloseNote} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">הודעה מאת :{guest.firstName}</DialogTitle>
                        <DialogContent>
                          {guest.notes}
                        </DialogContent>
                      </Dialog>
                    </div> : <MailOutlineIcon style={{ opacity: "20%" }} />}</td>
                    <td>
                      {/* <MoreVertIcon /> */}
                      <EditAndDeleteGuestMenu guest={guest} refresh={refresh} setRefresh={setRefresh} id={id} event={event}/>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {guests?.length == 0 ? <div style={{ textAlign: "center", margin: "10px auto" }}>עדיין אין אישורי הגעה</div> : <></>}
          </div>

          <button className="delete_event_btn btn" onClick={handleClickOpen}> <DeleteIcon /> מחיקת הזמנה </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">{"האם את/ה בטוח?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                מחיקת ההזמנה אינה ניתנת לשחזור
              </DialogContentText>
            </DialogContent>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "15px" }}>

              <button className="accept_delete_event delete_event_btn" onClick={handleAccept}>
                מאשר/ת
              </button>
              <button className="cancel_delete_event delete_event_btn" onClick={handleClose}>
                ביטול
              </button>
            </div>

          </Dialog>
        </div>
      }
    </div>

  );
}
export default EventManagement;

