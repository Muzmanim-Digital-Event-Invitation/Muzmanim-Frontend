import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";

function Dashboard(): JSX.Element {
    const navigate = useNavigate()
    return (
        <div className="Dashboard">
            <h1>איזור אישי</h1>
            <div>
                <button className="btn create_event_btn">ליצירת הזמנה חדשה</button>
            </div>
            <div className="events_container">

                <div className="event_card" onClick={() => navigate("/EventManagement/1")}>
                    <div className="card_details">
                        <h3>07/05/2023</h3>
                        <h3>אלי & מור</h3>
                        <h3>חתונה</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>
                </div>

                <div className="event_card">
                    <div className="card_details">
                        <h3>07/05/2023</h3>
                        <h3>כנס</h3>
                        <h3>AI משתלט על העולם</h3>

                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>
                </div>

                <div className="event_card">
                    <div className="card_details">
                        <h3>18/05/2023</h3>
                        <h3>על האש</h3>
                        <h3>הראל</h3>

                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>

                </div>

                <div className="event_card">
                    <div className="card_details">
                        <h3>02/06/2023</h3>
                        <h3>בר מיצווה</h3>
                        <h3>אלון</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>

                </div>

                <div className="event_card">
                    <div className="card_details">
                        <h3>12/05/2023</h3>
                        <h3>יום הולדת</h3>
                        <h3>רן</h3>
                    </div>
                    <button className="card_button">לחץ לעוד מידע</button>

                </div>

            </div>
        </div>
    );
}

export default Dashboard;
