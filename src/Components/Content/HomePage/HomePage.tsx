import "./HomePage.scss";
import listImg from "./list.png"
import liveImg from "./live.png"
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import a from "./a.png"
import b from "./b.png"
import c from "./c.png"
import d from "./d.png"
import e from "./e.png"

import whatsappImg from "./whatsapp.png"
import gpsImg from "./gps.png"
import { useNavigate } from "react-router-dom";

function HomePage(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="HomePage">

            <div className="container welcome_container">
                <div className="deatils_container">
                    <h1>ברוכים הבאים</h1>
                    <p>ברוכים הבאים לאתר מוזמנים, כאן תוכלו ליצור בחינם הזמנות דיגטליות ולנהל את רשימת המוזמנים לכל אירוע</p>
                    <button className="btn create_invitation_btn" onClick={() => navigate('/newEvent')}>ליצירת הזמנה בחינם  </button>
                </div>

                <div className="image_container">
                    <img src="https://img.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg?w=826&t=st=1683308783~exp=1683309383~hmac=322526bca6bedfc5e41c35c1df190af8e16e66de3348a415040ffcf5cd4a3276" alt="" />
                </div>
            </div>

            <div className="container features_container ">
                <h1>פיצ'רים</h1>
                <div className="all_features">
                    <div className="feature_box">
                        <img src={listImg} alt="" />
                        <h3>הזמנה דיגיטלית</h3>
                    </div>
                    <div className="feature_box">
                        <img src={gpsImg} alt="" />
                        <h3>ניווט לאירוע</h3>
                    </div>
                    <div className="feature_box">
                        <img src={whatsappImg} alt="" />
                        <h3>שליחה בווצאפ</h3>
                    </div>
                    <div className="feature_box">
                        <img src={listImg} alt="" />
                        <h3>אישורי הגעה</h3>
                    </div>
                    <div className="feature_box">
                        <img src={liveImg} alt="" />
                        <h3>התראות בזמן אמת</h3>
                    </div>
                </div>
            </div>

            <div className="container examples_container">
                <h1>עיצובים לדוגמה</h1>
                <div className="imgs_container">
                    <img src={one} />
                    <img src={two} />
                    <img src={three} />
                    {/* <img src="https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=1380&t=st=1683308910~exp=1683309510~hmac=cb0cdbd7a66730151888fa78f5fd03b2a7fca38c0bf56eb6cd5b0217f6bf2c1f" alt="" /> */}
                    {/* <img src="https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=1380&t=st=1683308910~exp=1683309510~hmac=cb0cdbd7a66730151888fa78f5fd03b2a7fca38c0bf56eb6cd5b0217f6bf2c1f" alt="" /> */}
                    {/* <img src="https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=1380&t=st=1683308910~exp=1683309510~hmac=cb0cdbd7a66730151888fa78f5fd03b2a7fca38c0bf56eb6cd5b0217f6bf2c1f" alt="" /> */}
                </div>
            </div>

            <div className="container recommend_container">
                <h1 className="customers_recommend">לקוחות ממליצים</h1>
                <div className="all_reviews">
                    <div className="review_box">
                        <img className="review_img" src={a} alt="" />
                        <h3>אלי</h3>
                        <p>"כלי מצויין, לא יודע איך הייתי מסתדר בלי! . ועוד בחינם!"</p>
                    </div>
                    <div className="review_box">
                        <img className="review_img" src={b} alt="" />
                        <h3>נעה</h3>
                        <p>“פלטפורמה יוצאת דופן!. הופך את ארגון המסיבה לנוח”</p>
                    </div>
                    <div className="review_box">
                        <img className="review_img" src={c} alt="" />
                        <h3>שרית</h3>
                        <p>“מושלם למסיבות!, מעקב וניהול  אירוע. לא יכול להיות פשוט יותר!”</p>
                    </div>
                    <div className="review_box">
                        <img className="review_img" src={d} alt="" />
                        <h3>חן</h3>
                        <p>"עיצובים מסוגננים וכלי ניהול רב עוצמה. ממליצה בחום!"</p>
                    </div>
                    <div className="review_box">
                        <img className="review_img" src={e} alt="" />
                        <h3>רמי</h3>
                        <p>"ללא התעסקות מיותרת קל ופשוט, ממליץ!"</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
