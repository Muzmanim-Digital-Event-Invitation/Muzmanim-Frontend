import "./HomePage.scss";
import listImg from "./list.png"
import liveImg from "./live.png"
import whatsappImg from "./whatsapp.png"
import gpsImg from "./gps.png"

function HomePage(): JSX.Element {
    return (
        <div className="HomePage">

            <div className="container welcome_container">
                <div className="deatils_container">
                    <h1>ברוכים הבאים</h1>
                    <p>בורכים הבאים לאתר מוזמנים, כאן תוכלו ליצור בחינם הזמנות דיגטליות ולנהל את רשימת המוזמנים לכל אירוע</p>
                    <button className="btn create_invitation_btn">ליצירת הזמנה בחינם לחצו כאן</button>
                </div>
                <div className="image_container">
                    <img src="https://img.freepik.com/free-vector/colorful-confetti-background-with-text-space_1017-32374.jpg?w=1380&t=st=1683302258~exp=1683302858~hmac=236fd05c22efd75fe4f647dadb361550f49b2b34c2cbdf31e67f8a880e0fd555" alt="" />
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
                    <img src={liveImg} alt="" />
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
            </div>

            <div className="container recommend_container">
                <h1>לקוחות ממליצים</h1>
                <div className="all_reviews">
                <div className="review_box">
                    <img className="review_img" src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?w=1380&t=st=1683301352~exp=1683301952~hmac=7de2ef37301e8b557b543d942d2dd0203fc99aa50bb6afefa929b68a6d2d55a6" alt="" />
                    <h3>אלי מ</h3>
                    <p>בדיקה שדג הרע דגכ ש דיקה שדג הרע דגכ ש</p>
                </div>
                <div className="review_box">
                    <img className="review_img" src="https://img.freepik.com/free-photo/worldface-spanish-man-white-background_53876-139733.jpg?w=1380&t=st=1683301432~exp=1683302032~hmac=6c5e5969652f428b5be597bb22850fd83aacee3335ebd0801fe4a75d170234fa" alt="" />
                    <h3>אלי מ</h3>
                    <p>בדיקה שדג הרע דגכ ש דיקה שדג הרע דגכ ש</p>
                </div>
                <div className="review_box">
                    <img className="review_img" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1683301492~exp=1683302092~hmac=61570ce825076b428cf89ec027621e03db4d68fdc41263b571a1ec55c29f4031" alt="" />
                    <h3>אלי מ</h3>
                    <p>בדיקה שדג הרע דגכ ש דיקה שדג הרע דגכ ש</p>
                </div>
                <div className="review_box">
                    <img className="review_img" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1683301520~exp=1683302120~hmac=44d811de7840582190ba68db24836caca23d5ddbfef84a49a9a88916c3201e3ahttps://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1683301520~exp=1683302120~hmac=44d811de7840582190ba68db24836caca23d5ddbfef84a49a9a88916c3201e3a" alt="" />
                    <h3>אלי מ</h3>
                    <p>"בדיקה שדג הרע דגכ ש דיקה שדג הרע דגכ ש"</p>
                </div>
                <div className="review_box">
                    <img className="review_img" src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?w=826&t=st=1683301544~exp=1683302144~hmac=9f157f4ec6d97e06e824bb6dd43a396f1b743ce3ce93c3a45f463bcc927fd61c" alt="" />
                    <h3>אלי מ</h3>
                    <p>"ממשק נוח וקל לתפעול!!"</p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
