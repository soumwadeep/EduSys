import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicClasses from "../../../../../img/BasicClasses.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const BasicStudentClasses = () => {
  // useEffect(() => {
  //   document.title = "Your Live Classes | EduSys";
  // }, []);
  var BasicStudentClassesLink;
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
      if (data.sem < 5 || data.sem > 6) {
        document.getElementById("liveclassheading").innerHTML =
          "No Classes As Of Now!";
        document.getElementById("liveclassdata").style.display = "none";
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

  // If Statements
  if (sem === "5" && dept === "CSE") {
    BasicStudentClassesLink = "uco-aoxx-mxp";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentClassesLink = "pwx-qvqt-vkn";
  }
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome To EduSys's Live Classes's Section!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Live Classes Section Edusys,Live Classes Section Byjus,Live Classes Section Aakash,Live Classes Section Allen,Live Classes Section Smart Class,Live Classes Section Recorder Videos,Live Classes Section Notes,Live Classes Section Books,Live Classes Section Cheap,Live Classes Section Free,Live Classes Section Online,Live Classes Section Offline,Live Classes Section India,Live Classes Section Best education system,Live Classes Section education system,Live Classes Section education,Live Classes Section edusys,Live Classes Section edusys india,Live Classes Section edusys,Best e-Learning Platform,Live Classes Section edusys e-learning,Live Classes Section edusys e-learning system,Live Classes Section edusys e-learning system in,
          Recorded Classes Of Edusys,Recorded Classes Of Byjus,Recorded Classes Of Aakash,Recorded Classes Of Allen,Recorded Classes Of Smart Class,Recorded Classes Of Recorder Videos,Recorded Classes Of Notes,Recorded Classes Of Books,Recorded Classes Of Cheap,Recorded Classes Of Free,Recorded Classes Of Online,Recorded Classes Of Offline,Recorded Classes Of India,Recorded Classes Of Best education system,Recorded Classes Of education system,Recorded Classes Of education,Recorded Classes Of edusys,Recorded Classes Of edusys india,Recorded Classes Of edusys,Best e-Learning Platform,Recorded Classes Of edusys e-learning,Recorded Classes Of edusys e-learning system,Recorded Classes Of edusys e-learning system in,"
        />
        <title>Your Live Classes | EduSys</title>
      </Helmet>
      <section id="basicstudentclasses">
        <BasicStudentSidebar />
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
            <span id="liveclassheading">Live Class</span>
          </h1>
          <div id="liveclassdata">
            <form
              action={`https://meet.google.com/${BasicStudentClassesLink}`}
              target="_blank"
            >
              <button className="btn">Join Your Class</button>
            </form>
          </div>
          <br />
        </center>
      </section>
    </>
  );
};

export default BasicStudentClasses;
