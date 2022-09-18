import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../img/icon.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img
              src={icon}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />{" "}
            EduSys
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Features"
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
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link"
                  }
                  to="/Contact"
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
