import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import teacherloginimg from "../../img/TeacherLogin.svg";
import swal from "sweetalert";

const TeacherLogin = () => {
  useEffect(() => {
    document.title = "Teacher's Login | EduSys";
  }, []);
  const [employeeid, setEmployeeid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (teacher) navigate("/BasicTeacher");
  }, [teacher, loading]);
  return (
    <>
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
                      <label className="form-label">Employee ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={employeeid}
                        onChange={(e) => setEmployeeid(e.target.value)}
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
                      onClick={() => logInWithEmailAndPassword(email, password)}
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
