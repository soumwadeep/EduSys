import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Contact1 from "../../../../../img/contact1.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";

const BasicTeacherUpdates = () => {
  useEffect(() => {
    document.title = "Your Updates | EduSys";
  }, []);
  var BasicTeacherUpdatesLink;

  const [teacher, loading, error] = useAuthState(auth);
  const [dept, setDept] = useState("");
  //   const[sem,setSem]=useState("");
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
        document.getElementById("updatesheading").innerHTML ="No Updates Yet!";
        document.getElementById("updatesdata").style.display = "none";}
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

  //If Statement
  if (dept === "CSE") {
    BasicTeacherUpdatesLink =
      "2PACX-1vSxjnSLT7dAddQvVKyppShSk6J35dn8GmoXy5Xz4a8RMT2qmXbDINhLrAWNoazFRmDTXINfpERMdxBK";
  }
  //else if (sem === "6" && dept === "CSE") {
  //     BasicTeacherUpdatesLink =
  //       "2PACX-1vT84dusZToUTGAXp2cgsEdRk4wyv_nAf82d2bhO7u6O-lhSLhb7lvMg24VfDnzi5QKKOz_K6wX3Bi_w";
  //   } else {
  //     BasicTeacherUpdatesLink ="2PACX-1vRhjG4oLbm0LDvB_nKsoIpaG9D1kSDRhTlk4jrXVk2X5mxypJ1AGIFH6C2-8kkzXbRUDNuhEPyOsGyu";
  //   }
  return (
    <>
      <section id="basicTeacherupdates">
        <BasicTeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Updates <span>Section</span>
                    </h1>
                    <p>Here You Will Find All Your Latest Updates.</p>
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
            <span id="updatesheading">Latest Updates</span>
          </h1>
          <div id="updatesdata">
            <iframe
              src={`https://docs.google.com/document/d/e/${BasicTeacherUpdatesLink}/pub?embedded=true`}
              id="basiciframe"
              title="Basic Teacher Updates"
            ></iframe>
          </div>
        </center>
      </section>
    </>
  );
};

export default BasicTeacherUpdates;
