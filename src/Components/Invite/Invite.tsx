import "./Invite.scss";
import { useEffect, useState } from "react"; 
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';
import { BsCheck } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { servicesFunctions } from "../../Services/ServicesFunctions";
import { useParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { GuestModel } from "../../Models/GuestModel";

import eventTopImage1 from "../../assets/eventTopImage1.jpg";
import eventTopImage2 from "../../assets/eventTopImage2.jpg";
import eventTopImage3 from "../../assets/eventTopImage3.jpg";


import bgImage1 from "../../assets/invitation-bg-1.jpg"
import bgImage2 from "../../assets/invitation-bg-2.jpg"
import bgImage3 from "../../assets/invitation-bg-3.jpg"
import bgImage4 from "../../assets/invitation-bg-4.jpg"
import bgImage5 from "../../assets/invitation-bg-5.png"
import bgImage6 from "../../assets/invitation-bg-6.png"
import bgImage7 from "../../assets/invitation-bg-7.png"
import bgImage8 from "../../assets/invitation-bg-8.png"
import bgImage9 from "../../assets/invitation-bg-9.png"
import bgImage10 from "../../assets/invitation-bg-10.png"
import bgImage11 from "../../assets/invitation-bg-11.png"
import bgImage12 from "../../assets/invitation-bg-12.png"
import bgImage13 from "../../assets/invitation-bg-13.png"
import bgImage14 from "../../assets/invitation-bg-14.png"
import bgImage15 from "../../assets/invitation-bg-15.png"
import bgImage16 from "../../assets/invitation-bg-16.png"
import { config } from "../../Services/config";

interface ownProps {
    eventData: any;
    background: string ;
    font: number;
    icon: string;
    image: any;
}

const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4,bgImage5, bgImage6, bgImage7, bgImage8,bgImage9, bgImage10, bgImage11, bgImage12,bgImage13, bgImage14, bgImage15, bgImage16]; 


const eventTopImages = [eventTopImage1, eventTopImage2, eventTopImage3]; 



function Invite(props: ownProps): JSX.Element {
  const [isAccepted, setIsAccepted] = useState(false);
  const { register, handleSubmit , formState: { errors }} = useForm();
  const { eventId } = useParams();
  const [isFilledForm, setIsFilledForm] = useState<boolean>(!!window.localStorage.getItem(eventId))
  
  const [userEventFilledDetails, setUserEventFilledDetails] = useState<GuestModel>(JSON.parse(window.localStorage.getItem(eventId)) ?? {});
  const [guestsCounter, setGuestsCounter] = useState<number>( userEventFilledDetails.guestsAmount ?? 1);


  const handleAcceptChange = (event : any) => {
    setIsAccepted(event.target.value === 'accept');
  };

  useEffect(() => {
    if(props.eventData.regular === 0) {
      props.eventData.regular = false
    }
    if(props.eventData.vegan === 0) {
      props.eventData.vegan = false
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
    eventId: props.eventData.id, 
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
  // window.location.reload();
  }

  const userSelectedBgImage = bgImages[Number(props.background) - 1]; 
  console.log(userSelectedBgImage);
  

  const userSelectedTopImage = eventTopImages[Number(props.image) - 1]; 
  console.log(userSelectedTopImage);
  


// test to guests good 
let foodPreferences = new Array(guestsCounter).fill("");

let regularCount = userEventFilledDetails.regular;
let vegetarianCount = userEventFilledDetails.vegetarian;
let veganCount = userEventFilledDetails.vegan;
let kidsCount = userEventFilledDetails.kids;

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
      <div
        className="Invite"
        style={{
          backgroundImage: `url(${userSelectedBgImage})`,
          backgroundColor: props.background,
          fontFamily: `var(--invite-font${props.font})`,
        }}
      >
        {props.image ? (
          <div className="image">
            {props.image == "undefined" ? 
            <></> :
            <img src={userSelectedTopImage ?? (props.image?.startsWith('data:image') ? props.image : config.IMAGE_URL + props.image)} alt="" />
             }
          {/* <img src={userSelectedTopImage ?? config.IMAGE_URL + props.image } alt="" /> */}
            {/* <img src={userSelectedTopImage ?? config.IMAGE_URL + props.image ?? props.image} alt="" /> */}

          </div>
        ) : (
          <div style={{ paddingTop: "20px" }}> </div>
        )}
        <header>
          {props.eventData.eventType == 1 ? (
            <h1>הזמנה ליום הולדתי!</h1>
          ) : props.eventData.eventType == 2 ? (
            <h1>הזמנה לחתונה!</h1>
          ) : props.eventData.eventType == 3 ? (
            <h1>הזמנה לברית!</h1>
          ) : props.eventData.eventType == 4 ? (
            <h1>הזמנה לעל האש!</h1>
          ) : (
            <h1>הזמנה!</h1>
          )}
        </header>
        <body>

        <div className="free-text-section">
          {props.eventData.eventType == 1 ? (
            <p>אנחנו מתרגשים להזמינכם ליום הולדתי אשמח לראותכם</p>
          ) : props.eventData.eventType == 2 ? (
            <p>אנחנו מתרגשים להזמינכם לחתונתנו נשמח לראותכם בין אורחנו</p>
          ) : (
            <p>נשמח לראותכם בין אורחנו</p>
          )}
        </div>
        <div className="names-section">
          <span className="name">{props.eventData.name1}</span>
          <span className="icon">
            {props.icon === "" && ""}
            {props.icon === "<GiDiamondRing/>" && <GiDiamondRing />}
            {props.icon === "<GiBabyBottle/>" && <GiBabyBottle />}
            {props.icon === "<TbWashDrycleanOff/>" && <TbWashDrycleanOff />}
            {props.icon === "<MdOutlineOutdoorGrill/>" && (
              <MdOutlineOutdoorGrill />
            )}
            {props.icon === "<MdEventAvailable/>" && <MdEventAvailable />}
            {props.icon === "<MdOutlineMilitaryTech/>" && (
              <MdOutlineMilitaryTech />
            )}
            {props.icon === "<FaBirthdayCake/>" && <FaBirthdayCake />}
            {props.icon === "<BsGenderFemale/>" && <BsGenderFemale />}
            {props.icon === "<BsGenderMale/>" && <BsGenderMale />}
            {props.icon === "<BsTrophy/>" && <BsTrophy />}
          </span>
          <span className="name">{props.eventData.name2 === "undefined" ? ""  : props.eventData.name2 }</span>
        </div>
        <div className="details-section">
          <div className="time">
          <span>{props.eventData.eventDate && servicesFunctions.extractDateFromISOString(props.eventData.eventDate)}</span>
            <span>{props.eventData.eventStartHour}</span>
          </div>
          <div className="location">
            <span>{props.eventData.hallName}</span>
            <div className="address">
              <span>{`${props.eventData.street} ${props.eventData.city}`}</span>
            </div>
          </div>
        </div>
        </body>

{isFilledForm ? 

<footer>
  <div className="filled_form_container">
    <p> הטופס נשלח </p>
      <button onClick={() => {
        setIsFilledForm(false)
        setUserEventFilledDetails(JSON.parse(window.localStorage.getItem(eventId)))
        }}>לעדכון מצב הגעה </button>
  </div>  
</footer>
:
        <footer>
          <div>
            <h2 className="h2_title">אישור הגעה</h2>
            <p className="p_desc">נשמח לראותכם בין אורחינו</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first_last_name_container">
              <input type="text" placeholder="שם פרטי" {...register("firstName",  { required: true })} defaultValue={userEventFilledDetails.firstName} className={errors.firstName ? 'error_input_guest_form' : ''} />
              {/* {errors.firstName && <span className="error_message_guest_form">שדה חובה</span>} */}
              
              <input type="text" placeholder="שם משפחה"  {...register("lastName",  { required: true })} defaultValue={userEventFilledDetails.lastName} className={errors.lastName ? 'error_input_guest_form' : ''} />
              {/* {errors.lastName && <span className="error_message_guest_form">שדה חובה</span>} */}
            </div>
            <div className="phone_container">
              <input type="number" placeholder="מספר נייד"  {...register("phone",  { required: true })}  defaultValue={userEventFilledDetails.phone} className={errors.phone ? 'error_input_guest_form' : ''} />
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
                    <input type="radio" id="accept" name="guest" value="accept" onChange={handleAcceptChange} defaultChecked={userEventFilledDetails.isComing } />
                    <label className="radio-label" htmlFor="accept"> <BsCheck /> מגיעים </label>
                  </div>
                  <div className="radio-input-wraper-guest unaccept">
                    <input type="radio" id="unaccept" name="guest" value="unaccept" onChange={handleAcceptChange} defaultChecked={userEventFilledDetails.isComing == false } />
                    <label className="radio-label" htmlFor="unaccept"> <HiXMark /> לא מגיעים </label>
                  </div>
                </div>
              </div>


              {isAccepted && props.eventData.food && (
                
  <div className="guest_food_choice">
    <div className="form-section">
      {[...Array(guestsCounter)].map((_, index) => (
        
        <div key={index} className="guests-food-radio">
          <div className="guest_number_title">אורח {index + 1}:</div>

          { props.eventData.regular  ? (
            <div className="radio-input-wraper-guest-food">
            <input type="radio" name={`guest_food_choice_${index}`} id={`regular_${index}`} value="regular" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'regular'} />
              <label className="radio-label" htmlFor={`regular_${index}`}>
                <BsCheck />  מנה רגילה
              </label>
            </div>
          ) : null}
        
          { props.eventData.vegetarian ? (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegetarian_${index}`} value="vegetarian" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'vegetarian'} />
              <label className="radio-label" htmlFor={`vegetarian_${index}`}>
                <BsCheck /> צמחוני
              </label>
            </div>
          ) : null}

          { props.eventData.vegan  ? (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegan_${index}`} value="vegan" {...register(`guest_food_choice_${index}`)} defaultChecked={foodPreferences[index] === 'vegan'}/>
              <label className="radio-label" htmlFor={`vegan_${index}`}>
                <BsCheck /> טבעוני
              </label>
            </div>
          ) : null}

          { props.eventData.kids ? (
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
        </footer>
}

      </div>
    );
}

export default Invite;



           {/* <>
      {isAccepted && props.eventData.food && (
        <div className="guest_food_choice">
          <div className="form-section">
            {[...Array(guestsCounter)].map((_, index) => (
              <div key={index} className="guests-food-radio">
                <div className="guest_number_title">אורח {index + 1}:</div>

                <div className="radio-input-wraper-guest-food">
                  <input
                    type="radio"
                    name={`guest_food_choice_${index}`}
                    id={`regular_${index}`}
                    value="regular"
                    {...register(`guest_food_choice_${index}`)}
                  />
                  <label className="radio-label" htmlFor={`regular_${index}`}>
                    <BsCheck /> מנה רגילה
                  </label>
                </div>


                <div className="radio-input-wraper-guest-food">
                  <input
                    type="radio"
                    name={`guest_food_choice_${index}`}
                    id={`vegetarian_${index}`}
                    value="vegetarian"
                    {...register(`guest_food_choice_${index}`)}
                  />
                  <label className="radio-label" htmlFor={`vegetarian_${index}`}>
                    <BsCheck /> צמחוני
                  </label>
                </div>

                <div className="radio-input-wraper-guest-food">
                  <input
                    type="radio"
                    name={`guest_food_choice_${index}`}
                    id={`vegan_${index}`}
                    value="vegan"
                    {...register(`guest_food_choice_${index}`)}
                  />
                  <label className="radio-label" htmlFor={`vegan_${index}`}>
                    <BsCheck /> טבעוני
                  </label>
                </div>

                <div className="radio-input-wraper-guest-food">
                  <input
                    type="radio"
                    name={`guest_food_choice_${index}`}
                    id={`kids_${index}`}
                    value="kids"
                    {...register(`guest_food_choice_${index}`)}
                  />
                  <label className="radio-label" htmlFor={`kids_${index}`}>
                    <BsCheck /> מנת ילדים
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </> */}
