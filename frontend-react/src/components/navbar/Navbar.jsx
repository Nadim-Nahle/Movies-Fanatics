import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Logo
          </NavLink>
          
     
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
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
                to="/messenger"
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
                to="/swipe"
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
                to="/premium"
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
                to="/movies"
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
                to="/register"
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
                to="/login"
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