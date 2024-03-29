import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicDashboard1 from "../../../../../img/BasicDashboard1.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
const BasicStudent = () => {
  useEffect(() => {
    document.title = `Welcome ${name} | EduSys`;
  }, []);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  var today = new Date();
  var curHr = today.getHours();
  var greet;
  if (curHr < 12) {
    greet = "Good Morning";
  } else if (curHr < 16) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", user?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      swal(`${greet} ${data.name}`, "Welcome To Our Dashboard!", "success");
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
    if (!user) return navigate("/StudentLogin");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome To EduSys's Student Dashboard!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Student's Dashboard,Basic Plan,Student's Dashboard Of Basic Plan,Student's Dashboard Of Basic Plan Of EduSys,Student's Dashboard Of Basic Plan Of EduSys India,Student's Dashboard Of Basic Plan Of EduSys India"
        />
      </Helmet>
      <section id="basicstudent">
        <BasicStudentSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Welcome To Our DashBoard
                      <span> {name}</span>
                    </h1>
                    <p>
                      Follow This <span>Instructions</span> To Access Your
                      Dashboard:
                    </p>
                    <p>
                      <span>1.</span> Click On The <span>Menu Button</span>{" "}
                      Which Is Present In Top Left Side Of Your Screen To Access
                      The Menu Of All The Features.
                    </p>
                    <p>
                      <span>2.</span> To Know The <span>Updates</span> Click On
                      Updates Button.
                    </p>
                    <p>
                      <span>3.</span> To Know About Your <span>Classes</span>{" "}
                      Click On The Classes Button.
                    </p>
                    <p>
                      <span>4.</span> To Get Your <span>Study Materials</span>{" "}
                      Click On The Study Materials Button.
                    </p>
                    <p>
                      <span>5.</span> To Get Your <span>Assignments</span> Click
                      On The Assignments Button.
                    </p>
                    <p>
                      <span>6.</span> To Practice Lab Practicals On{" "}
                      <span>Virtual Labs</span> Click On The Virtual Labs
                      Button.
                    </p>
                    <p>
                      <span>7.</span> To Get Some Required Tools Like{" "}
                      <span>Calculator,Todos & Take Notes</span> Click On The
                      Extras Button.
                    </p>
                    <p>
                      <span>8.</span> To Play <span>Quiz</span> Click On The
                      Play Quiz Button.
                    </p>
                    <p>
                      <span>9.</span> To Clear Your <span>Doubts</span> Click On
                      The 24x7 Doubt Clearing Button.
                    </p>
                    <p>
                      <span>10.</span> To Know The Details Of Your{" "}
                      <span>Profile</span> Click On The Profile Button.
                    </p>
                    <p>
                      <span>11.</span> To <span>Log Out</span> Just Click On The
                      Log Out Button.
                    </p>
                    <p>
                      <span>12.</span> To{" "}
                      <span>Translate Any Page To Your Favourite Language</span>{" "}
                      Just Select Your Language From The Dropdown Provided In
                      The Footer.
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
                      src={BasicDashboard1}
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
      </section>
    </>
  );
};

export default BasicStudent;
