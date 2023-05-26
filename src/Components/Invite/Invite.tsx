import "./Invite.scss";
import { useEffect, useState } from "react"; 
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import { BsCheck } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { servicesFunctions } from "../../Services/ServicesFunctions";
import { EventModel } from "../../Models/EventModel";

interface ownProps {
    eventData: any;
    background: string;
    font: number;
    icon: string;
    image: any;
}

function Invite(props: ownProps): JSX.Element {
  const [isAccepted, setIsAccepted] = useState(false);
 
  const [guestsCounter, setGuestsCounter] = useState<number>(1);

  const handleAcceptChange = (event : any) => {
    setIsAccepted(event.target.value === 'accept');
  };

    return (
      <div
        className="Invite"
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundColor: props.background,
          fontFamily: `var(--invite-font${props.font})`,
        }}
      >
        {props.image ? (
          <div className="image">
            <img src={props.image} alt="" />
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
          <span className="name">{props.eventData.name2}</span>
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

        <footer>
          <div>
            <h2 className="h2_title">אישור הגעה</h2>
            <p className="p_desc">נשמח לראותכם בין אורחינו</p>
          </div>
          <form>
            <div className="first_last_name_container">
              <input type="text" placeholder="שם פרטי" />
              <input type="text" placeholder="שם משפחה" />
            </div>
            <div className="phone_container">
              <input type="number" placeholder="מספר נייד" />
            </div>
            <div>
              <div className="guests_count_container">
                <p> כמה אתם?</p>
                <div className="counter_btns">
                  <button onClick={(e) => {
                    e.preventDefault(),
                    setGuestsCounter(guestsCounter + 1)}
                  }
                  >+</button>
                  <div>{guestsCounter}</div>
                  <button onClick={(e) => {
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
                    <input type="radio" id="accept" name="guest" value="accept" onChange={handleAcceptChange} />
                    <label className="radio-label" htmlFor="accept"> <BsCheck /> מגיעים </label>
                  </div>
                  <div className="radio-input-wraper-guest unaccept">
                    <input type="radio" id="unaccept" name="guest" value="unaccept" onChange={handleAcceptChange} />
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

          {props.eventData.regular && (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`regular_${index}`} />
              <label className="radio-label" htmlFor={`regular_${index}`}>
                <BsCheck /> מנה רגילה
              </label>
            </div>
          )}

          {props.eventData.vegetarian && (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegetarian_${index}`} />
              <label className="radio-label" htmlFor={`vegetarian_${index}`}>
                <BsCheck /> צמחוני
              </label>
            </div>
          )}

          {props.eventData.vegan && (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`vegan_${index}`} />
              <label className="radio-label" htmlFor={`vegan_${index}`}>
                <BsCheck /> טבעוני
              </label>
            </div>
          )}

          {props.eventData.kids && (
            <div className="radio-input-wraper-guest-food">
              <input type="radio" name={`guest_food_choice_${index}`} id={`kids_${index}`} />
              <label className="radio-label" htmlFor={`kids_${index}`}>
                <BsCheck /> מנת ילדים
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}


{/* {isAccepted && props.eventData.food && (
  <div className="guest_food_choice">
    <div className="form-section">
      {[...Array(guestsCounter)].map((_, index) => (
        <div key={index} className="guests-food-radio">
          <div className="guest_number_title">אורח {index + 1}:</div>

          {props.eventData.regular && (
            <div className="radio-input-wraper-guest-food">
              <input
                type="radio"
                name={`guest_food_choice_${index}`}
                id={`regular_${index}`}
                defaultChecked
              />
              <label className="radio-label" htmlFor={`regular_${index}`}>
                <BsCheck /> מנה רגילה
              </label>
            </div>
          )}

          {props.eventData.vegetarian && (
            <div className="radio-input-wraper-guest-food">
              <input
                type="radio"
                name={`guest_food_choice_${index}`}
                id={`vegetarian_${index}`}
                defaultChecked
              />
              <label className="radio-label" htmlFor={`vegetarian_${index}`}>
                <BsCheck /> צמחוני
              </label>
            </div>
          )}

          {props.eventData.vegan && (
            <div className="radio-input-wraper-guest-food">
              <input
                type="radio"
                name={`guest_food_choice_${index}`}
                id={`vegan_${index}`}
                defaultChecked
              />
              <label className="radio-label" htmlFor={`vegan_${index}`}>
                <BsCheck /> טבעוני
              </label>
            </div>
          )}

          {props.eventData.kids && (
            <div className="radio-input-wraper-guest-food">
              <input
                type="radio"
                name={`guest_food_choice_${index}`}
                id={`kids_${index}`}
                defaultChecked
              />
              <label className="radio-label" htmlFor={`kids_${index}`}>
                <BsCheck /> מנת ילדים
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)} */}


            
            </div>
            <button className="submit_guest_form" type="submit">מאשר
            
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
      </div>
    );
}

export default Invite;
