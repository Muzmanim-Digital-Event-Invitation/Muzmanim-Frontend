import { NavLink } from "react-router-dom";
import "./Header.scss";

import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from "../../assets/logo-muzmanim.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux, logoutRedux } from "../../App/authSlice";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { BsSun } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
// import { MdDarkMode } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from "react-router-dom";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";


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
            // window.location.reload();


        } catch (e: any) {
            console.log(e);
        }
    }

    function logoutGoogle() {
        dispatch(logoutRedux())

    };

    useEffect(() => {
        console.log(isLogin);
        
    })

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <header className="Header">


            <AppBar position="static">

                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#000000',
                                textDecoration: 'none',
                            }}
                        >

                            <img className="header_logo" style={{ cursor: 'pointer' }} src={logo} alt="" onClick={() => navigate("/")} />

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <AiOutlineMenu />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}

                            >

                                <MenuItem sx={{WebkitJustifyContent: 'right' }} onClick={handleCloseNavMenu} component={RouterLink} to="/">
                                    בית
                                </MenuItem>

                                <MenuItem sx={{WebkitJustifyContent: 'right' }} onClick={handleCloseNavMenu} component={RouterLink} to="/dashboard">
                                    אזור אישי
                                </MenuItem>



                                <MenuItem sx={{WebkitJustifyContent: 'right' }} onClick={handleCloseNavMenu} component={RouterLink} to="/games">
                                    סתם מילה
                                </MenuItem>


                            </Menu>

                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={logo} style={{ cursor: 'pointer' }} width={150} alt="" onClick={() => navigate("/")} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '15px' }}>


                            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/games">
                                סתם מילה
                            </MenuItem>



                            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/dashboard">
                                אזור אישי
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/">
                                בית
                            </MenuItem>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontSize: '35px !important' }} >
                                    {isLogin ?
                                        <Avatar alt={isLogin.name} src={isLogin.picture} />
                                        :
                                        <CiSettings />
                                    }
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                {/* {settings.map((setting) => ( */}
                                {/* <MenuItem key={"2"} onClick={() => {
                                    handleCloseUserMenu()
                                    clickedWebMode()
                                }} sx={{ justifyContent: 'end' }}>
                                    {webMode ?
                                        <Typography sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} textAlign="center"> <span>הפוך למצב כהה </span> <MdDarkMode /></Typography>
                                        :
                                        <Typography sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} textAlign="center"> <span>הפוך למצב בהיר </span> <BsSun /></Typography>
                                    }
                                </MenuItem> */}
                                {/* {isLogin ?
                                    <MenuItem key={"logout"} sx={{ justifyContent: 'end' }} onClick={() => {
                                        handleCloseUserMenu()
                                        dispatch(logoutRedux())
                                    }}>
                                        <Typography textAlign="center">התנתק</Typography>
                                    </MenuItem>
                                    :
                                    <MenuItem key={"login"}  >
                                        <Typography textAlign="center" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}><span >התחבר</span> <LoginButton /></Typography>
                                    </MenuItem>
                                } */}
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
                        <Typography onClick={logoutGoogle} textAlign="center">התנתק</Typography>
                        // <button className="btn" onClick={logoutGoogle}> התנתק</button>
                    )}


                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Header;
