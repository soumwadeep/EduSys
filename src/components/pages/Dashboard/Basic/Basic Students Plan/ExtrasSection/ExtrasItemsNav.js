import React from "react";
import { NavLink } from "react-router-dom";

const ExtrasItemsNav = () => {
  return (
    <>
      <div className="itemslink">
        <h5 className="text-center">Go To:</h5>&nbsp;&nbsp;
        <NavLink
          className={(navData) =>
            navData.isActive ? "menu_active" : "nav-link"
          }
          to="/BasicStudent/Extras/Calculator"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          id="itemslinkbtn"
        >
          <i className="fa-solid fa-calculator "></i>
          &nbsp;&nbsp;Calculator
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "menu_active" : "nav-link"
          }
          to="/BasicStudent/Extras/Todo"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          id="itemslinkbtn"
        >
          <i className="fa-solid fa-list-check "></i>
          &nbsp;&nbsp;Todo App
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "menu_active" : "nav-link"
          }
          to="/BasicStudent/Extras/TakeNotes"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          id="itemslinkbtn"
        >
          <i className="fa-solid fa-pen-to-square "></i>
          &nbsp;&nbsp;Take Notes
        </NavLink>
      </div>
    </>
  );
};

export default ExtrasItemsNav;
