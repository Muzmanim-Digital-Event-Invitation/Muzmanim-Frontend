import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { useLocation, useParams } from "react-router-dom";
import { GuestModel } from "../../../../../../Models/GuestModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import "./EditGuestModal.scss";
import { EventModel } from "../../../../../../Models/EventModel";





function EditGuestModal({guest, event }: { guest: GuestModel, event: EventModel}): JSX.Element {
    
    const [isAccepted, setIsAccepted] = useState(false);
    const { register, handleSubmit, watch , formState: { errors }} = useForm();
    const location = useLocation();
    const { eventId } = useParams();
    const [isFilledForm, setIsFilledForm] = useState<boolean>(!!window.localStorage.getItem(eventId))
    
    const [userEventFilledDetails, setUserEventFilledDetails] = useState<GuestModel>(JSON.parse(window.localStorage.getItem(eventId)) ?? {});
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
    function onSubmit(data: any) {
      if (!eventId) {
        console.log("disabled");
        
        return; 
      }
      
  
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
      eventId: event.id, 
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
  
    servicesFunctions.submitEventForm(formData, eventId).then(() => {
  
      window.localStorage.setItem(eventId, JSON.stringify(formData))
      setUserEventFilledDetails(formData)
  
      setIsFilledForm(true)
    });
    window.location.reload();
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
              {/* {errors.firstName && <span className="error_message_guest_form">שדה חובה</span>} */}
              
              <input type="text" placeholder="שם משפחה"  {...register("lastName",  { required: true })} defaultValue={guest.lastName} className={errors.lastName ? 'error_input_guest_form' : ''} />
              {/* {errors.lastName && <span className="error_message_guest_form">שדה חובה</span>} */}
            </div>
            <div className="phone_container">
              <input type="number" placeholder="מספר נייד"  {...register("phone",  { required: true })}  defaultValue={guest.phone} className={errors.phone ? 'error_input_guest_form' : ''} />
              {/* {errors.phone && <span className="error_message_guest_form">שדה חובה</span>} */}
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
            <button className={`submit_guest_form `} type="submit">מאשר/ת  

            <div className="star-1">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-2">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-3">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-4">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-5">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-6">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                    </div>
            </button>

          </form>
        </div>
    );
}

export default EditGuestModal;
