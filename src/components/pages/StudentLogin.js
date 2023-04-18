import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import login1 from "../../img/login1.svg";
import { Helmet } from "react-helmet";

const StudentLogin = () => {
  // useEffect(() => {
  //   document.title = "Student's Login | EduSys";
  // }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      if (data.email === email && data.plan === "Basic Student") {
        return navigate("/BasicStudent");
      } else if (data.email === email && data.plan === "Pro Student") {
        return navigate("/ProStudent");
      } else {
        swal("Error!", "Please Enter Correct Student Email Address!", "error");
        return navigate("/StudentLogin");
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
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome To Student's Login Section Of EduSys!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Student's Login EduSys,Student's Login,Student's Login Section,Student's Login Section Of EduSys,Student Login Section Of EduSys,Student Login Portal Of EduSys,Student's Login Portal"
        />
        <title>Student's Login | EduSys</title>
      </Helmet>
      <section id="login">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    className="imgfix"
                    src={login1}
                    alt="Login"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Sign <span>In</span>
                  </h1>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn"
                      onClick={() =>
                        logInWithEmailAndPassword(email, password) &&
                        fetchUserName()
                      }
                    >
                      Login
                    </button>
                    {/* &nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn"
                      onClick={signInWithGoogle}
                    >
                      Login With Google
                    </button> */}
                  </div>
                  <br />
                  <p>
                    Forgot Password? Reset It
                    <NavLink
                      to="/ResetPassword"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <span> Now.</span>
                    </NavLink>
                  </p>
                  <p>
                    New User? Register
                    <NavLink
                      to="/StudentRegistration"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <span> Now.</span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLogin;
