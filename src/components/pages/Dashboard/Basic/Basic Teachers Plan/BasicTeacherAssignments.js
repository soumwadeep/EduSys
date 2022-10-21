import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicAssignment from "../../../../../img/BasicAssignment.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";

const BasicTeacherAssignments = () => {
  useEffect(() => {
    document.title = "Your Assignments | EduSys";
  }, []);
  var BasicTeacherAssignmentsLink, BasicTeacherSubmitAssignmentsLink;
  const [teacher, loading, error] = useAuthState(auth);
  //   const [sem, setSem] = useState("");
  const [dept, setDept] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Teachers"),
        where("uid", "==", teacher?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      //   setSem(data.sem);
      setDept(data.dept);

      // Temporary Fix
      var z = document.getElementById("showassignmentdata");
      if (data.dept !== "CSE") {
        document.getElementById("showpresentheading").innerHTML =
          "No Assignments As Of Now!";
        z.style.display = "none";
      }
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data.Please Login Again!",
        "error"
      );
      return navigate("/TeacherLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!teacher) return navigate("/TeacherLogin");
    fetchUserName();
  }, [teacher, loading]);
  // var z = document.getElementById("showassignmentdata");
  // else {
  //   document.getElementById("showpresentheading").innerHTML ="No Assignments As Of Now!";
  //   z.style.display = "none";
  // }
  return (
    <>
      <section id="basicteacherAssignments">
        <BasicTeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Assignments <span>Section</span>
                    </h1>
                    <p>
                      Here You Will Get All The Assignments Submitted By The
                      Students.
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
                      src={BasicAssignment}
                      alt="BasicDashboard1"
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
            <span id="showpresentheading">Assignments</span>
          </h1>
          <div id="showassignmentdata">
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1kr4m1wDFZT13vb8xvkhyLfzDicbrFyZy#grid"
              id="basiciframe"
              title="viewassignments"
            ></iframe>
          </div>
        </center>
      </section>
    </>
  );
};

export default BasicTeacherAssignments;
