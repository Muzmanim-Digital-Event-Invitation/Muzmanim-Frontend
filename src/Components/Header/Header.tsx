import { NavLink } from "react-router-dom";
import "./Header.scss";


function Header(): JSX.Element {

    return (
        <header className="Header">
            <div className="container">
                <div className="auth-section">
                    <div className="profile-img"></div>
                    <span className="profile-name">דניאל חן</span>
                </div>
                <nav className="nav-section">
                    <NavLink to={"/"}>בית</NavLink>
                    <NavLink to={"/"}>בדיקה אחרת</NavLink>
                    <NavLink to={"/"}>סתם מילה</NavLink>
                </nav>
                <div className="logo-section">
                    <span className="logo-text">
                        מוזמנים
                    </span>
                    <div className="logo"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
