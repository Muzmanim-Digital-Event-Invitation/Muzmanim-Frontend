import { NavLink } from "react-router-dom";
import "./Header.scss";


function Header(): JSX.Element {

    return (
        <header className="Header">
            <div className="container">
                <div className="auth-section">
                    <div className="btn profile-img"></div>
                    <span className="profile-name">דניאל חן</span>
                </div>
                <nav className="nav-section">
                    <NavLink className="btn nav-link" to={"/"}>בית</NavLink>
                    <NavLink className="btn nav-link" to={"/stam"}>בדיקה אחרת</NavLink>
                    <NavLink className="btn nav-link" to={"/stam2"}>סתם מילה</NavLink>
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
