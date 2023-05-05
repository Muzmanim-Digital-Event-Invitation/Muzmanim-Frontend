import "./HomePage.scss";

function HomePage(): JSX.Element {
    return (
        <div className="HomePage">

            <div className="container welcome_container">
                <div className="deatils_container">
                    <h1>ברוכים הבאים</h1>
                    <button>ליצירת הזמנה בחינם </button>
                </div>
                <div className="image_container">
                    <div>תמונה</div>
                </div>
            </div>

            <div className="container features_container ">
                <h1>פיצ'רים</h1>
                <div className="all_features">
                <div className="feature_box"></div>
                <div className="feature_box"></div>
                <div className="feature_box"></div>
                <div className="feature_box"></div>
                <div className="feature_box"></div>
                </div>
            </div>

            <div className="container examples_container">
                <h1>דוגמאות לעיצובים</h1>
            </div>

            <div className="container recommend_container">
                <h1>לקוחות ממליצים</h1>
                <div className="all_reviews">
                <div className="review_box"></div>
                <div className="review_box"></div>
                <div className="review_box"></div>
                <div className="review_box"></div>
                <div className="review_box"></div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
