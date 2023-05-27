import { NavLink } from "react-router-dom";
import "./Header.scss";

import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from "../../assets/logo-muzmanim.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux, logoutRedux } from "../../App/authSlice";




function Header(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state: any) => state.authSlice)

    function loginGoogle(credentialResponse: any) {
        // const details: any = jwtDecode(credentialResponse.credential)
        try {

            dispatch(loginRedux(credentialResponse.credential))
            if (window.location.pathname === "/" || window.location.pathname === "/home") {
                navigate("/dashboard");
            }
            window.location.reload();


        } catch (e: any) {
            console.log(e);
        }
    }

    function logoutGoogle(){
        dispatch(logoutRedux())

    };

    

    return (
        <header className="Header">
            <div className="container">
                <div className="auth-section">
                    <div className="btn profile-img"></div>
                    <span className="profile-name">דניאל חן</span>
                </div>
                <nav className="nav-section">
                    {!isLogin ? (
                        <GoogleOAuthProvider clientId="615150774728-8oo11iin9i3pfhoej96k8e4ikg0kk1o2.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    loginGoogle(credentialResponse);
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    ) : (
                        <button className="btn" onClick={logoutGoogle}> התנתק</button>
                    )}

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
