import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logo-muzmanim.png"

function Footer(): JSX.Element {
    return (
        <div className="Footer">
             <footer className="footer">
        <div className="inner">
            <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src={logo} alt="Muzmanim Logo"/>
                    </div>
                </a>
            </div>
            <div className="column is-nav">
                <div className="column-title">ניווט באתר</div>
                <ul>
                    <li> <Link to="/">דף הבית</Link></li>
                    <li> <Link to="/dashboard">איזור אישי</Link></li>
                    <li> <Link to="/newEvent">יצירת הזמנה חדשה</Link></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">צור קשר</div>
                <ul>
                    <li><a href="#"><i className="fa fa-envelope-open"></i> muzmanim@gmail.com</a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i>@Youtube</a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i>Linkedin</a></li>
                </ul>
            </div>
            {/* <div className="column is-nav last_column">
                <div className="column-title">בלוג</div>
                <ul>
                    <li> <Link to="/blog-post-1">"היתרונות של למידת אנגלית"</Link></li>
                    <li> <Link to="/blog-post-2">"מעבר מעברית לאנגלית טיפים וטכניקות"</Link></li>
                    <li> <Link to="/blog-post-3">"למידת אנגלית באינטרנט"</Link></li>
                </ul>
            </div> */}
        </div>
    </footer>
        </div>
    );
}

export default Footer;
