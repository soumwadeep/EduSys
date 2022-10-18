import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Contact1 from "../../../../../img/contact1.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";

const BasicStudentUpdates = () => {
  useEffect(() => {
    document.title = "Your Updates | EduSys";
  }, []);
  var BasicStudentUpdatesLink;

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
    BasicStudentUpdatesLink =
      "2PACX-1vRr9SWeI9oHMf8amnUWyx8lEvOmUKUaw1GW8ErXrlXsJ4rTSaeedJZaqXBTmLv43XFyCcf-GhTK9cMm";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentUpdatesLink =
      "2PACX-1vT84dusZToUTGAXp2cgsEdRk4wyv_nAf82d2bhO7u6O-lhSLhb7lvMg24VfDnzi5QKKOz_K6wX3Bi_w";
  } else {
    swal(
      "Fetching Your Updates!",
      "We Found No New Updates As Of Now.We Will Soon Update It When We Find Any!",
      "info"
    );
    BasicStudentUpdatesLink ="2PACX-1vRhjG4oLbm0LDvB_nKsoIpaG9D1kSDRhTlk4jrXVk2X5mxypJ1AGIFH6C2-8kkzXbRUDNuhEPyOsGyu";
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
                    <h1>
                      Updates <span>Section</span>
                    </h1>
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
          <h1>
            <span>Latest Updates</span>
          </h1>
          <iframe
            src={`https://docs.google.com/document/d/e/${BasicStudentUpdatesLink}/pub?embedded=true`}
            id="basiciframe" title="Basic Student Updates"
          ></iframe>
        </center>
      </section>
    </>
  );
};

export default BasicStudentUpdates;
