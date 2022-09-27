import React from "react";
import { NavLink } from "react-router-dom";

const BasicStudentSidebar = () => {
  return (
    <>
      <button
        class="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Edu<span>Sys</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" id="dashboard-sidebar">
          <NavLink to="#" className="nav-link">
            Home
          </NavLink>
          <NavLink to="#" className="nav-link">
            Updates
          </NavLink>
          <NavLink to="#" className="nav-link">
            Class
          </NavLink>
          <NavLink to="#" className="nav-link">
            Books
          </NavLink>
          <NavLink to="#" className="nav-link">
            Assignments
          </NavLink>
          <NavLink to="#" className="nav-link">
            Fees
          </NavLink>
          <NavLink to="#" className="nav-link">
            Exam
          </NavLink>
          <NavLink to="#" className="nav-link">
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BasicStudentSidebar;
