import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicAssignment from "../../../../../img/BasicAssignment.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const BasicStudentAssignments = () => {
  // useEffect(() => {
  //   document.title = "Your Assignments | EduSys";
  // }, []);
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
      
      // Temporary Fix
      var z = document.getElementById("showassignmentdata");
      if(data.sem <5 || data.sem>6){
        document.getElementById("showpresentheading").innerHTML ="No Assignments As Of Now!";
        z.style.display = "none";
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
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");
    fetchUserName();
  }, [student, loading]);
  if (sem === "5" && dept === "CSE") {
    BasicStudentAssignmentsLink = "1UpTks76n3_A-rQ25R4exFqQSqOgpNuvd";
    BasicStudentSubmitAssignmentsLink = "1tzWyDOk6fifYCkXajWk2Gs1pfwCSkzzf";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentAssignmentsLink = "15pcGqUKKwRTxZbxuXIkbnKwl42onFLjn";
    BasicStudentSubmitAssignmentsLink = "1o6kvPyhGCblX0IjuxhRF_cFUzZmhm6Yj";
  }
  // var z = document.getElementById("showassignmentdata");
  // else {
  //   document.getElementById("showpresentheading").innerHTML ="No Assignments As Of Now!";
  //   z.style.display = "none";
  // }
  return (
    <>
    <Helmet>
        <meta
          name="description"
          content="Welcome To EduSys's Student Assignment's Section!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Student's Assignments Of EduSys,Student's Assignments,Student Assignment Section,Student Assignment Section Of EduSys"
        />
        <title>Your Assignments | EduSys</title>
      </Helmet>
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
            <span id="showpresentheading">Latest Assignments</span>
          </h1>
          <div id="showassignmentdata">
            <iframe
              src={`https://drive.google.com/embeddedfolderview?id=${BasicStudentAssignmentsLink}#grid`}
              id="basiciframe"
              title="viewassignments"
            ></iframe>
            <h1>
              <span>Submit Your Assignment Here</span>
            </h1>
            <h4>Instructions:</h4>
            <p>
              <span>1.</span> Create A Folder With Your{" "}
              <span>Name And Roll Number</span> (<span>Format: </span>
              RollNo_Name)
            </p>
            <p>
              <span>2.</span> Now, Create A Folder Of The Particular Subject
              Inside The Present Folder.
            </p>
            <p>
              <span>3.</span> Now, Upload Your Assignment Inside The Subject
              Folder Of That Respective Subject.
            </p>
            <h6>
              <span>
                Note*: If You Don't Follow The Above Mentioned Instructions Then
                Your Submitted Assignment Will Be Taken As Invalid And Hence,
                Your Assignment Will Not Be Checked!
              </span>
            </h6>
            <form
              action={`https://drive.google.com/drive/folders/${BasicStudentSubmitAssignmentsLink}?usp=sharing`}
              target="_blank"
            >
              <button type="submit" className="btn" id="basicbtn">
                Submit Your Assignment
              </button>
            </form>
            <br/>
          </div>
        </center>
      </section>
    </>
  );
};

export default BasicStudentAssignments;
