import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { setAuth } = useAuth();
  const location = useLocation();
  

  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    removeCookie('user');
    setAuth('');
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="logo" src={require("../../img/logo.png")} alt='logo' />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {location.pathname.includes("auth") && (
            <li className="nav-item">
              <NavLink
                exact
                to=''
                activeclassname="active"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
          )}
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/profile"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/messenger"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Messenger
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/swipe"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Connect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/premium"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Premuim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/movies"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth/register"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/auth/login"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign in
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
