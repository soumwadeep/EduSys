import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicClasses from "../../../../../img/BasicClasses.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";

const BasicTeacherClasses = () => {
  useEffect(() => {
    document.title = "Your Live Classes | EduSys";
  }, []);
  const [teacher, loading, error] = useAuthState(auth);
  // const [dept, setDept] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Teachers"),
        where("uid", "==", teacher?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      // setDept(data.dept);
      var y = document.getElementById("showLinks");
      if (data.dept === "CSE") {
        document.getElementById("showclasses").innerHTML = "All Classes";
        y.style.display = "block";
      } else {
        document.getElementById("showclasses").innerHTML =
          "No Classes Scheduled As Of Now!";
        y.style.display = "none";
      }
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data.Please Login Again!",
        "error"
      );
      return navigate("/StudentLogin");
    }
    // If Conditions
  };

  useEffect(() => {
    if (loading) return;
    if (!teacher) return navigate("/TeacherLogin");

    fetchUserName();
  }, [teacher, loading]);

  // If Statements
  return (
    <>
      <section id="basicteacherclasses">
        <BasicTeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Classes <span>Section</span>
                    </h1>
                    <p>
                      Here You Will Get Your Class's Live Link,Which You Can
                      Join For Attending Your Classes.
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
                      src={BasicClasses}
                      alt="BasicClasses"
                      className="imgfix"
                      id="animateimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <h1>
            <span id="showclasses"></span>
          </h1>
          {/* <form
            action={`https://meet.google.com/${BasicStudentClassesLink}`}
            target="_blank"
          >
            <button className="btn">Join Your Class</button>
          </form> */}
        </center>
        <div className="presentclasses" id="showLinks">
          <h4>Semester-5:</h4>
          <form action="https://meet.google.com/uco-aoxx-mxp" target="_blank">
            <button className="btn">Join Your Class</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BasicTeacherClasses;
