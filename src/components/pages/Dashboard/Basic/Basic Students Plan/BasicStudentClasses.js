import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicClasses from "../../../../../img/BasicClasses.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";

const BasicStudentClasses = () => {
  useEffect(() => {
    document.title = "Your Live Classes | EduSys";
  }, []);
  var BasicStudentClassesLink;
  const [user, loading, error] = useAuthState(auth);
  const [sem, setSem] = useState("");
  const [dept, setDept] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "basicusers"),
        where("uid", "==", user?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setSem(data.sem);
      setDept(data.dept);
    } catch (err) {
      console.error(err);
      swal("Error!", "We Got An Error Fetching Your Data.", "error");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/Login");

    fetchUserName();
  }, [user, loading]);

  // If Statements
  if (sem === "5" && dept === "CSE") {
    BasicStudentClassesLink = "uco-aoxx-mxp";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentClassesLink = "pwx-qvqt-vkn";
  } else {
    swal(
      "Fetching Your Live Classes Right Now!Check The Join Your Class Button.",
      "We Found No Live Classes As Of Now.We Will Soon Update It When We Find Any!",
      "info"
    );
  }
  return (
    <>
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
            <span>Live Class</span>
          </h1>
          <form
            action={`https://meet.google.com/${BasicStudentClassesLink}`}
            target="_blank"
          >
            <button className="btn">Join Your Class</button>
          </form>
        </center>
      </section>
    </>
  );
};

export default BasicStudentClasses;
