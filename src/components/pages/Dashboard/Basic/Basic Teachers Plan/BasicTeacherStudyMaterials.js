import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicTeacherDashboardStudyMaterials from "../../../../../img/BasicDashboardStudyMaterials1.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";

const BasicTeacherStudyMaterials = () => {
  useEffect(() => {
    document.title = "Study Materials | EduSys";
  }, []);
  //   var BasicTeacherStudyMaterialsLink;
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
      if (data.dept !== "CSE") {
        document.getElementById("showstudymaterialheading").innerHTML =
          "No Study Materials As Of Now!";
        var z = document.getElementById("showstudymaterialdata");
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
  // If Statements
  //   if (sem === "5" && dept === "CSE") {
  //     BasicTeacherStudyMaterialsLink = "1m_GEqdGJqFSE5iR7qsRs8oZ18I_vSE6V";
  //   } else if (sem === "6" && dept === "CSE") {
  //     BasicTeacherStudyMaterialsLink = "1XMFirDa0Z9dQBguI29irzlJ1-n50JKr9";
  //   }
  return (
    <>
      <section id="basicteacherstudymaterials">
        <BasicTeacherSidebar />
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
                      Here You Can Get And Upload Study Materials In The Respective Semester's Folder.
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
                      src={BasicTeacherDashboardStudyMaterials}
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
              src="https://drive.google.com/embeddedfolderview?id=1A47mb_cQZugtnYlls48VtSI5sZXPH-n0#grid"
              id="basiciframe"
              title="studymaterials"
            ></iframe>
          </div>
        </center>
      </section>
    </>
  );
};

export default BasicTeacherStudyMaterials;
