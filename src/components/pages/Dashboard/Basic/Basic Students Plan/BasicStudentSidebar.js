import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";

const BasicStudentSidebar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/Login");
  }, [user, loading]);
  
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen((state) => !state);
  }
  return (
    <>
      <button
        onClick={toggleNav}
        className="sidebarbtn sticky-top"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        data-bs-dismiss={navOpen ? "offcanvas" : "none"}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Edu<span>Sys</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" id="dashboard-sidebar">
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudents/Home"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudents/Updates"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            Updates
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudents/Classes"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            Classes
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudents/StudyMaterials"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            Study Materials
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudents/Assignments"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            Assignments
          </NavLink>
          <NavLink  onClick={() => logout()} className="nav-link">
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BasicStudentSidebar;
