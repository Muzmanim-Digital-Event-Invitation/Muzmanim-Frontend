import { NavLink } from "react-router-dom";
import "./Header.scss";

import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from "../../assets/logo-muzmanim.png";
import { useNavigate } from "react-router-dom";




function Header(): JSX.Element {
    const navigate = useNavigate();

    return (
        <header className="Header">
            <div className="container">
                <div className="auth-section">
                    <div className="btn profile-img"></div>
                    <span className="profile-name">דניאל חן</span>
                </div>
                <nav className="nav-section">
                <GoogleOAuthProvider clientId="615150774728-8oo11iin9i3pfhoej96k8e4ikg0kk1o2.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                    </GoogleOAuthProvider>
                    <NavLink className="btn nav-link" to={"/"}>בית</NavLink>
                    <NavLink className="btn nav-link" to={"/dashboard"}> איזור אישי</NavLink>
                    <NavLink className="btn nav-link" to={"/stam2"}>סתם מילה</NavLink>
                </nav>
                <div className="logo-section">
                    {/* <span className="logo-text">
                        מוזמנים
                    </span> */}
                    {/* <a href="/"> */}
                        <img onClick={() => navigate("/")} src={logo} className="logo" alt="" />
                    {/* </a> */}
                    {/* <div className="logo">
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
