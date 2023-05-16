import "./Invite.scss";
import { GiDiamondRing, GiBabyBottle } from 'react-icons/gi';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { MdOutlineOutdoorGrill, MdEventAvailable, MdOutlineMilitaryTech } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale, BsTrophy } from 'react-icons/bs';

interface ownProps {
    eventData: any;
    background: string;
    font: number;
    icon: string
}

function Invite(props: ownProps): JSX.Element {
    return (
        <div className="Invite" style={{
            backgroundImage: `url(${props.background})`,
            backgroundColor: props.background,
            fontFamily: `var(--invite-font${props.font})`
        }}>
            <header>
                <h1>הזמנה לחתונה!</h1>
            </header>
            <div className="free-text-section">
                <p>אנחנו מתרגשים להזמינכם לחתונתנו נשמח לראותכם בין אורחנו</p>
            </div>
            <div className="names-section">
                <span className="name">{props.eventData.name1}</span>
                <span className="icon">
                    {props.icon === "" && ""}
                    {props.icon === "<GiDiamondRing/>" && <GiDiamondRing />}
                    {props.icon === "<GiBabyBottle/>" && <GiBabyBottle />}
                    {props.icon === "<TbWashDrycleanOff/>" && <TbWashDrycleanOff />}
                    {props.icon === "<MdOutlineOutdoorGrill/>" && <MdOutlineOutdoorGrill />}
                    {props.icon === "<MdEventAvailable/>" && <MdEventAvailable />}
                    {props.icon === "<MdOutlineMilitaryTech/>" && <MdOutlineMilitaryTech />}
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

            </footer>
        </div>
    );
}

export default Invite;
