import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Contact1 from "../../../../../img/contact1.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";

const BasicStudentUpdates = () => {
  useEffect(() => {
    document.title = "Your Updates | EduSys";
  }, []);
  var BasicStudentUpdatesLink;

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
  if (sem === "1"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else if (sem === "2"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else if (sem === "3"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else if (sem === "4"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else if (sem === "5"  && dept==="CSE") {
    BasicStudentUpdatesLink =
      "2PACX-1vRr9SWeI9oHMf8amnUWyx8lEvOmUKUaw1GW8ErXrlXsJ4rTSaeedJZaqXBTmLv43XFyCcf-GhTK9cMm";
  } else if (sem === "6"  && dept==="CSE") {
    BasicStudentUpdatesLink =
      "2PACX-1vT84dusZToUTGAXp2cgsEdRk4wyv_nAf82d2bhO7u6O-lhSLhb7lvMg24VfDnzi5QKKOz_K6wX3Bi_w";
  } else if (sem === "7"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else if (sem === "8"  && dept==="CSE") {
    swal("No Updates For Now", "Enjoy!", "info");
  } else {
    swal("No Updates For Now", "Enjoy!", "info");
  }
  return (
    <>
      <section id="basicstudentupdates">
        <BasicStudentSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>Updates <span>Section</span></h1>
                    <p>
                      Here You Will Find All The Latest Notices Of Your College
                      Which Is Published For Your Semester.
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
                      src={Contact1}
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
          <h1><span>Latest Updates</span></h1>
          <iframe
            src={`https://docs.google.com/document/d/e/${BasicStudentUpdatesLink}/pub?embedded=true`}
            id="basiciframe"
          ></iframe>
        </center>
      </section>
    </>
  );
};

export default BasicStudentUpdates;
