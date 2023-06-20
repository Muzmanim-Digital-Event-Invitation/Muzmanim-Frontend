import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { GuestModel } from "../../../../../../Models/GuestModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import "./EditGuestModal.scss";
import { EventModel } from "../../../../../../Models/EventModel";





function EditGuestModal({guest, event, handleAcceptEdit, handleCloseGuestEdit}: { guest: GuestModel, event: EventModel, handleAcceptEdit : () => void, handleCloseGuestEdit: () => void}): JSX.Element {
    
    const [isAccepted, setIsAccepted] = useState(false);
    const { register, handleSubmit , formState: { errors }} = useForm();
    const { id } = useParams();
    
    const [userEventFilledDetails, setUserEventFilledDetails] = useState<GuestModel>(guest);
    const [guestsCounter, setGuestsCounter] = useState<number>( guest.guestsAmount ?? 1);
  
  
    const handleAcceptChange = (event : any) => {
      setIsAccepted(event.target.value === 'accept');
    };
  
    useEffect(() => {
      if(!event.regular) {
        event.regular = false
      }
      if(!event.vegan) {
        event.vegan = false
      }
  
    },[guestsCounter])
  
  
    useEffect(() => {
      if(userEventFilledDetails){
        setIsAccepted(userEventFilledDetails.isComing)
      }
    }, [])

    useEffect(() => {
      console.log(id)

    })

    function onSubmit(data: any, event: any) {
      event.preventDefault();

      
  
      const foodChoices: any = {
        regular: 0,
        vegetarian: 0,
        vegan: 0,
        kids: 0,
      };
    
      if(isAccepted){
  
        for (const key in data) {
          if (key.startsWith('guest_food_choice_')) {
            foodChoices[data[key]]++;
          }
        }
        
      }
  
  
    
    const formData : GuestModel = {
      id: guest.id,
      eventId: id, 
      firstName: data.firstName,
      lastName: data.lastName,
      guestsAmount: guestsCounter, 
      phone: data.phone,
      isComing: isAccepted,
      vegetarian: foodChoices.vegetarian,
      vegan: foodChoices.vegan,
      kids: foodChoices.kids,
      regular: foodChoices.regular,
      notes: data.notes || "", 
    };
  
    console.log(formData);
  
    servicesFunctions.editGuestInfo(formData, id).then(() => {
  
      setUserEventFilledDetails(formData)
  
      handleAcceptEdit();
    });
    }

    
  


    let foodPreferences = new Array(guestsCounter).fill("");

let regularCount = guest.regular;
let vegetarianCount = guest.vegetarian;
let veganCount = guest.vegan;
let kidsCount = guest.kids;

foodPreferences = foodPreferences.map((item) => {
  if (regularCount > 0) {
    regularCount--;
    return "regular";
  }
  if (vegetarianCount > 0) {
    vegetarianCount--;
    return "vegetarian";
  }
  if (veganCount > 0) {
    veganCount--;
    return "vegan";
  }
  if (kidsCount > 0) {
    kidsCount--;
    return "kids";
  }
  return item;
});


    return (
        <div className="EditGuestModal">
			 <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first_last_name_container">
              <input type="text" placeholder="שם פרטי" {...register("firstName",  { required: true })} defaultValue={guest.firstName} className={errors.firstName ? 'error_input_guest_form' : ''} />
              
              <input type="text" placeholder="שם משפחה"  {...register("lastName",  { required: true })} defaultValue={guest.lastName} className={errors.lastName ? 'error_input_guest_form' : ''} />
            </div>
            <div className="phone_container">
              <input type="number" placeholder="מספר נייד"  {...register("phone",  { required: true })}  defaultValue={guest.phone} className={errors.phone ? 'error_input_guest_form' : ''} />
            </div>
            <div className="counter_accept_notes_container">
              <div className="guests_count_container">
                <p> כמה אתם?</p>
                <div className="counter_btns">
                  <button onClick={(e) => {
                    e.preventDefault(),
                    setGuestsCounter(guestsCounter + 1)}
                  }
                  >+</button>
                  <div>{guestsCounter}</div>

                  <button disabled={guestsCounter === 1} onClick={(e) => {

                    e.preventDefault(),
                    setGuestsCounter(guestsCounter - 1)}
                  }>-</button>
                </div>
              </div>
              <div className="guests_edit_container">
                <p  className="guests_edit_container_p">לעדכון מצב הגעה יש להזין את מספר הנייד שלכם</p>
              </div>



              <div className="form-section">
                <div className="guests-accept-radio">
                  <div className="radio-input-wraper-guest accept">
                    <input type="radio" id="accept" name="guest" value="accept" onChange={handleAcceptChange} defaultChecked={guest.isComing } />
                    <label className="radio-label" htmlFor="accept"> <BsCheck /> מגיעים </label>
                  </div>
                  <div className="radio-input-wraper-guest unaccept">
                    <input type="radio" id="unaccept" name="guest" value="unaccept" onChange={handleAcceptChange} defaultChecked={guest.isComing == false } />
                    <label className="radio-label" htmlFor="unaccept"> <HiXMark /> לא מגיעים </label>
                  </div>
                </div>
              </div>


              {isAccepted && event.food && (
                
  <div className="guest_food_choice">
    <div className="form-section">
      {[...Array(guestsCounter)].map((_, index) => (
        
        <div key={index} className="guests-food-radio">
          <div className="guest_number_title">אורח {index + 1}:</div>

          { event.regular  ? (
            <div className="radio-input-wraper-guest-food">
            <input type="radio" name={`guest_food_choice_${index}`} id={`regular_${index}`} value="regular" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'regular'} />
              <label className="radio-label" htmlFor={`regular_${index}`}>
                <BsCheck />  מנה רגילה
              </label>
            </div>
          ) : null}
        
          { event.vegetarian ? (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegetarian_${index}`} value="vegetarian" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'vegetarian'} />
              <label className="radio-label" htmlFor={`vegetarian_${index}`}>
                <BsCheck /> צמחוני
              </label>
            </div>
          ) : null}

          { event.vegan  ? (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegan_${index}`} value="vegan" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'vegan'}/>
              <label className="radio-label" htmlFor={`vegan_${index}`}>
                <BsCheck /> טבעוני
              </label>
            </div>
          ) : null}

          { event.kids ? (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`kids_${index}`} value="kids" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'kids'}/>
              <label className="radio-label" htmlFor={`kids_${index}`}>
                <BsCheck /> מנת ילדים
              </label>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  </div>
)}


            <div className="guests_notes_container">
              <label htmlFor="notes">הערות / ברכה :</label>
              <textarea name="notes" id="notes" cols={20} rows={3}  {...register(`notes`)} defaultValue={userEventFilledDetails.notes}></textarea>
            </div>


            </div>

            

            <div style={{display: "flex", justifyContent: "center", gap: "15px", marginBottom: "15px"}}>

              <button className="accept_delete_event delete_event_btn" type="submit" >
              מאשר/ת
              </button>
              <button className="cancel_delete_event delete_event_btn" onClick={handleCloseGuestEdit}>
              ביטול
              </button>
              </div>

          </form>
        </div>
    );
}

export default EditGuestModal;
