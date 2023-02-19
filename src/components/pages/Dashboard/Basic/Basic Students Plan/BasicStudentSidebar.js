import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import swal from "sweetalert";
const BasicStudentSidebar = () => {
  const [student, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      // console.log(data);
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data.Please Login Again!",
        "error"
      );
      return navigate("/StudentLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");

    fetchUserName();
  }, [student, loading]);

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
        &nbsp;Menu
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
            Welcome <span>{name}</span> !
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
            to="/BasicStudent/Updates"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>&nbsp;&nbsp;Updates
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/Classes"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-chalkboard-user"></i>&nbsp;&nbsp;Classes
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/StudyMaterials"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-book-open-reader"></i>&nbsp;&nbsp;Study
            Materials
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/VirtualLabs"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-flask"></i>&nbsp;&nbsp;Virtual Labs
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/Assignments"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-file-contract"></i>&nbsp;&nbsp;Assignments
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/Extras"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-brands fa-gripfire"></i>&nbsp;&nbsp;Extras
          </NavLink>
          <br />
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu_active" : "nav-link"
            }
            to="/BasicStudent/Profile"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <i className="fa-solid fa-user-tie"></i>&nbsp;&nbsp;Profile
          </NavLink>
          <br />
          <NavLink
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              logout();
              toggleNav();
            }}
            className="nav-link"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            &nbsp;&nbsp;Log Out
          </NavLink>
          <br />
        </div>
      </div>
    </>
  );
};

export default BasicStudentSidebar;
