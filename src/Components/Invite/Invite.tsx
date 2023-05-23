import "./Invite.scss";
import { useEffect } from "react"; 
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';
import TextField from '@mui/material/TextField';

interface ownProps {
    eventData: any;
    background: string;
    font: number;
    icon: string;
    image: any;
}

function Invite(props: ownProps): JSX.Element {

    useEffect(() => {
        console.log(props.eventData);
        
    })
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
            <span>{props.eventData.eventDate}</span>
            <span>{props.eventData.eventStartHour}</span>
          </div>
          <div className="location">
            <span>{props.eventData.hallName}</span>
            <div className="address">
              <span>{`${props.eventData.street} ${props.eventData.city}`}</span>
            </div>
          </div>
        </div>
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
                {/* <div> */}
                  <div>+</div>
                  <div>1</div>
                  <div>-</div>
                {/* </div> */}
              </div>
              <div>
                <p>לעדכון מצב הגעה יש להזין את מספר הנייד שלכם</p>
              </div>
              <div>
                <label>
                  <input type="radio" name="arrival" value="yes" />
                  <span>V מגיעים</span>
                </label>
                <label>
                  <input type="radio" name="arrival" value="no" />
                  <span>X לא מגיעים</span>
                </label>
              </div>
            </div>
          </form>
        </footer>
      </div>
    );
}

export default Invite;
