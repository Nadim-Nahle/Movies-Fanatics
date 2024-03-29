import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./navbar.css";
import missing from "../../img/noAvatar.png";

const url = localStorage.getItem("url");

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [click, setClick] = useState(false);
  const { auth } = useAuth();

  const name = auth?.user?.name;

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img
              className="logo"
              src={require("../../img/logo.png")}
              alt="logo"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {auth.user ? (
              <li className="nav-item">
                <NavLink
                  to="/auth/messenger"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Messenger
                </NavLink>
              </li>
            ) : null}
            {auth.user ? (
              <li className="nav-item">
                <NavLink
                  to="/auth/swipe"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Connect
                </NavLink>
              </li>
            ) : null}
            {auth.user ? (
              <li className="nav-item">
                <NavLink
                  to="/auth/premium"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Premium
                </NavLink>
              </li>
            ) : null}

            <li className="nav-item">
              <NavLink
                to="/movies"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Movies
              </NavLink>
            </li>

            {auth.user ? null : (
              <li className="nav-item">
                <NavLink
                  to="/register"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Sign up
                </NavLink>
              </li>
            )}
            {auth.user ? null : (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Sign in
                </NavLink>
              </li>
            )}
            {auth.user ? (
              <li className="nav-items nav-pic">
                <NavLink
                  to="/auth/profile"
                  activeclassname="active"
                  className="nav-links "
                  onClick={handleClick}
                >
                  {name}
                </NavLink>
                <div className="nav-url">
                  <img
                    src={url ? url : missing}
                    alt=""
                    className="navbar-url"
                  />
                </div>
              </li>
            ) : null}
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
