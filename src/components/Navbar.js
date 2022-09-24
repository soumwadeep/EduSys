import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../img/icon.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg text-center">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">
            <img src={icon} alt="Logo" width="30" height="24" /> <b>Edu</b>
            <span>Sys</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Home"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/About"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Features"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Pricing"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Login"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
