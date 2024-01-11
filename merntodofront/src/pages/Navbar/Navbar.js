
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";


import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [showNavbar, setShowNavbar] = useState(false)
  const history = useNavigate();
const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}
const setTime = () => {
     
  if( localStorage.getItem("user_login")) 
      { 
      localStorage.removeItem("user_login");
      localStorage.removeItem("user_name");
      history("/")
}
      else
     
       {history("/login")}}
  


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiRocketThruster className="navbar-icon" />
              Skye
            </Link> */}
            <h1 className="navbar-logo"> Task Manager</h1>
            <div className="menu-icon" onClick={props.handleClick}>
              {props.click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={props.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {/* <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink> */}
                {localStorage.getItem("user_login") ? 
              (<><h6 style= {{display:"inline"}}>Welcome  </h6><h5 style={{display:"inline"}}>{localStorage.getItem("user_name")} </h5></>) : "" }
              </li>
              <li className="nav-item">
                {/* <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>*/}
                {   localStorage.getItem("user_login") ? <button className="bt" onClick={setTime} > logout</button> :   <button     className="buttons"   onClick={setTime}> login </button>}
              </li> 
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
