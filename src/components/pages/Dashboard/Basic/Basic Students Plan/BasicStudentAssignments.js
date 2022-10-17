import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicAssignment from "../../../../../img/BasicAssignment.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";

const BasicStudentAssignments = () => {
  useEffect(() => {
    document.title = "Your Assignments | EduSys";
  }, []);
  var BasicStudentAssignmentsLink, BasicStudentSubmitAssignmentsLink;
  const [student, loading, error] = useAuthState(auth);
  const [sem, setSem] = useState("");
  const [dept, setDept] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setSem(data.sem);
      setDept(data.dept);
    } catch (err) {
      logout();
      swal("Error!", "We Got An Error Fetching Your Data.Please Login Again!", "error");
      return navigate("/StudentLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");

    fetchUserName();
  }, [student, loading]);

  // If Statements
  if (sem === "5" && dept === "CSE") {
    BasicStudentAssignmentsLink = "1UpTks76n3_A-rQ25R4exFqQSqOgpNuvd";
    BasicStudentSubmitAssignmentsLink = "1DUDJLOxHr0-DUd736oQWdm_ODyxHBMYT";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentAssignmentsLink = "15pcGqUKKwRTxZbxuXIkbnKwl42onFLjn";
    BasicStudentSubmitAssignmentsLink = "1IsWMQ1q36xi2OPvjLUSZIvyWU0CsaSoG";
  } else {
    swal(
      "Fetching Your Assignments!",
      "We Found No Assignments As Of Now.We Will Soon Update It When We Find Any!",
      "info"
    );
  }
  return (
    <>
      <section id="basicstudentAssignments">
        <BasicStudentSidebar />
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
                      Here You Will Get All Your Assignments Of Your College
                      Which Is Published For Your Department.
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
            <span>Latest Assignments</span>
          </h1>
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${BasicStudentAssignmentsLink}#grid`}
            id="basiciframe"
            title="viewassignments"
          ></iframe>
          <h1>
            <span>Submit Your Assignment Here</span>
          </h1>
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${BasicStudentSubmitAssignmentsLink}#grid`}
            id="basiciframe"
            title="submitassignments"
          ></iframe>
        </center>
      </section>
    </>
  );
};

export default BasicStudentAssignments;
