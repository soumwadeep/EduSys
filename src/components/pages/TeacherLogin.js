import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import teacherloginimg from "../../img/TeacherLogin.svg";
import { Helmet } from "react-helmet";

const TeacherLogin = () => {
  // useEffect(() => {
  //   document.title = "Teacher's Login | EduSys";
  // }, []);
  const [facultynum, setFacultynum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Teachers"),
        where("uid", "==", teacher?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      if (
        data.facultynum === facultynum &&
        data.email === email &&
        data.plan === "Basic Teacher"
      ) {
        return navigate("/BasicTeacher");
      } else if (
        data.facultynum === facultynum &&
        data.email === email &&
        data.plan === "Pro Teacher"
      ) {
        return navigate("/ProTeacher");
      } else {
        swal(
          "Error!",
          "Please Enter Correct Faculty Number And Email Address!",
          "error"
        );
        return navigate("/TeacherLogin");
      }
    } catch (err) {
      logout();
      swal(
        "Login Failed!",
        "We Got An Error Fetching Your Data.Please Wait While We Retry Your Login!",
        "warning"
      );
      return navigate("/TeacherLogin");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!teacher) return navigate("/TeacherLogin");
    fetchUserName();
  }, [teacher, loading]);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome To Teacher's Login Section Of EduSys!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Teacher's Login EduSys,Teacher's Login,Teacher's Login Section,Teacher's Login Section Of EduSys,Teacher Login Portal Of EduSys,Teacher's Login Portal"
        />
        <title>Teacher's Login | EduSys</title>
      </Helmet>
      <section id="login">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    className="imgfix"
                    src={teacherloginimg}
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
                      <label className="form-label">Faculty Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="facultyno"
                        value={facultynum}
                        onChange={(e) => setFacultynum(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
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
                      to="/TeacherRegistration"
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

export default TeacherLogin;
