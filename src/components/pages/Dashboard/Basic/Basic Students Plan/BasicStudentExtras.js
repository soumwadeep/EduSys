import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, where } from "firebase/firestore";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import Extras from "../../../../../img/Designer.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import { Helmet } from "react-helmet";

const BasicStudentExtras = () => {
  // useEffect(() => {
  //   document.title = "Your Extras Section | EduSys";
  // }, []);
  const [student, loading, err] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      // const doc = await getDocs(q);
      // const data = doc.docs[0].data();
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
  return (
    <section id="basicstudentextras">
      <Helmet>
        <meta
          name="description"
          content="Welcome To EduSys's Extras's Section!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Extras Section Edusys,Extras Section,Extras Section Of EduSys,Extras Section Of EduSys,Extras Portal Of EduSys,Extras Portal,Scientific Calculator Of Edusys,Todo App Edusys,Take Notes App Edusys"
        />
        <title>Your Extras Section | EduSys</title>
      </Helmet>
      <BasicStudentSidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Extras <span>Section</span>
                  </h1>
                  <p>
                    Here You Will Get Some More Extra Stuff Which Will Help You
                    A Lot In Your Studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={Extras}
                    alt="Extras"
                    className="imgfix"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-center mt-5">
            Tool<span>Kit</span>
          </h1>
          <div className="col-sm">
            <div className="featureTable">
              <div className="featureTable-header">
                <h3 className="title" id="extras-headings">
                  <i className="fa-regular fa-screen-users"></i>Calculator
                </h3>
              </div>
              <div className="feature-content" id="extras-text">
                <center>
                  <i className="fa-solid fa-calculator" id="LargeIcon"></i>
                </center>
                <br />
                <h4>Need a Scientific Calculator? Go Here To Use It.</h4>
                <NavLink
                  to="/BasicStudent/Extras/Calculator"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  id="extras-btn"
                >
                  Use Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="featureTable blue">
              <div className="featureTable-header">
                <h3 className="title" id="extras-headings">
                  Todo App
                </h3>
              </div>
              <div className="feature-content" id="extras-text">
                <center>
                  <i className="fa-solid fa-clipboard-list" id="LargeIcon"></i>
                </center>
                <br />
                <h4>Want To Make A Todo List? Go Here To Use It.</h4>
                <NavLink
                  to="/BasicStudent/Extras/Todo"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  id="extras-btn"
                >
                  Use Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="featureTable">
              <div className="featureTable-header">
                <h3 className="title" id="extras-headings">
                  Take Notes
                </h3>
              </div>
              <div className="feature-content" id="extras-text">
                <center>
                  <i className="fa-solid fa-file-pen" id="LargeIcon"></i>
                </center>
                <br />
                <h4>Want To Take Notes? Go Here To Use It.</h4>
                <NavLink
                  to="/BasicStudent/Extras/TakeNotes"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  id="extras-btn"
                >
                  Use Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicStudentExtras;
