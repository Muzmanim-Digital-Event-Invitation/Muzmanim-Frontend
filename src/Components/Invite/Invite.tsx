import "./Invite.scss";

interface ownProps {
    eventData: any;
    background: string;
    font: number;
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
                <span>icon</span>
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
