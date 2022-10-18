import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicStudentDashboardStudyMaterials from "../../../../../img/BasicDashboardStudyMaterials1.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
import swal from "sweetalert";

const BasicStudentStudyMaterials = () => {
  useEffect(() => {
    document.title = "Your Study Materials | EduSys";
  }, []);
  var BasicStudentStudyMaterialsLink;
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
      if(data.sem <5 || data.sem>6){
        document.getElementById("showstudymaterialheading").innerHTML ="No Study Materials As Of Now!";
        var z = document.getElementById("showstudymaterialdata");
        z.style.display = "none";
      }
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
    BasicStudentStudyMaterialsLink = "1m_GEqdGJqFSE5iR7qsRs8oZ18I_vSE6V";
  } else if (sem === "6" && dept === "CSE") {
    BasicStudentStudyMaterialsLink = "1XMFirDa0Z9dQBguI29irzlJ1-n50JKr9";
  }
  return (
    <>
      <section id="basicstudentstudymaterials">
        <BasicStudentSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Study Materials <span>Section</span>
                    </h1>
                    <p>
                      Here You Will Get All Your Study Materials Of Your College
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
                      src={BasicStudentDashboardStudyMaterials}
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
            <span id="showstudymaterialheading">Latest Study Materials</span>
          </h1>
          <div id="showstudymaterialdata">
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${BasicStudentStudyMaterialsLink}#grid`}
            id="basiciframe"
            title="studymaterials"
          ></iframe></div>
        </center>
      </section>
    </>
  );
};

export default BasicStudentStudyMaterials;
