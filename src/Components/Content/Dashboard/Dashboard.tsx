import "./Dashboard.css";

function Dashboard(): JSX.Element {
    return (
        <div className="Dashboard">
			<h1>איזור אישי</h1>
            <div>
                <button className="btn ">ליצירת הזמנה חדשה</button>
            </div>
            <div className="events_container">
                <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
                <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
                <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
                <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
                <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
                   <div className="event_card">
                    <h3>07/05/2023</h3>
                    <h3>אלי & מור</h3>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
