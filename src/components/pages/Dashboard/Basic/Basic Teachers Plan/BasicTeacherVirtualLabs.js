import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import VLabImg from "../../../../../img/VirtualLab.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";

const BasicTeacherVirtualLabs = () => {
  useEffect(() => {
    document.title = "Virtual Lab | EduSys";
  }, []);
  var BasicTeacherVirtualLabLink;
  const [teacher, loading, error] = useAuthState(auth);
  // const [sem, setSem] = useState("");
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
      // setSem(data.sem);
      setDept(data.dept);
      if (data.dept !== "CSE") {
        document.getElementById("showvlabheading").innerHTML =
          "No Virtual Lab Available!";
        var z = document.getElementById("showvlabdata");
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
  if (dept === "CSE") {
    BasicTeacherVirtualLabLink = "computer-science-and-engineering";
  }
  //   else if (sem === "6" && dept === "CSE")
  //   {
  //     BasicTeacherVirtualLabLink = "1XMFirDa0Z9dQBguI29irzlJ1-n50JKr9";
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
                      Virtual Labs <span>Section</span>
                    </h1>
                    <p>
                      Here You Can Perform Various Experiments In Our Exclusive Virtual Lab. Our Virtual Labs Are Powered By IIT.
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
                      src={VLabImg}
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
            <span id="showvlabheading">Virtual Lab Experiments</span>
          </h1>
          <br/>
          <div id="showvlabdata">
            <iframe
              src={`https://www.vlab.co.in/broad-area-${BasicTeacherVirtualLabLink}`}
              id="basiciframe"
              title="vlabs"
            ></iframe>
          </div>
          <br />
        </center>
      </section>
    </>
  );
};

export default BasicTeacherVirtualLabs;
