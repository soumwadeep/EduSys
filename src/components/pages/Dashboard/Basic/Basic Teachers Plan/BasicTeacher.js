import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicDashboard1 from "../../../../../img/BasicDashboard1.svg";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import swal from "sweetalert";
const BasicTeacher = () => {
  useEffect(() => {
    document.title = `Welcome ${name} | EduSys`;
  }, []);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  var today = new Date();
  var curHr = today.getHours();
  if (curHr < 12) {
    var greet = "Good Morning";
  } else if (curHr < 16) {
    var greet = "Good Afternoon";
  } else {
    var greet = "Good Evening";
  }

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Teachers"),
        where("uid", "==", user?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      swal(`${greet} ${data.name}`, "Welcome To Our Dashboard!", "success");
    } catch (err) {
      logout();
      swal("Error!", "We Got An Error Fetching Your Data.Please Login Again!", "error");
      return navigate("/TeacherLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/TeacherLogin");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <section id="basicteacher">
        <BasicTeacherSidebar />
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
                      <span>6.</span> To Know The Details Of Your{" "}
                      <span>Profile</span> Click On The Profile Button.
                    </p>
                    <p>
                      <span>7.</span> To <span>Log Out</span> Just Click On The
                      Log Out Button.
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

export default BasicTeacher;
