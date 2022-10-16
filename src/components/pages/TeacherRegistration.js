import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {
  auth,
  registerTeacherWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import register1 from "../../img/register1.svg";
import swal from "sweetalert";
const TeacherRegistration = () => {
  useEffect(() => {
    document.title = "Teacher's Registration | EduSys";
  }, []);

  const [name, setName] = useState("");
  const [employeeid, setEmployeeid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!employeeid) {
      swal("Error!", "Please Enter Your Employee ID To Continue.", "error");
    } else if (!name) {
      swal("Error!", "Please Enter Your Name To Continue.", "error");
    } else if (!email) {
      swal("Error!", "Please Enter Your Email To Continue.", "error");
    } else if (!password) {
      swal("Error!", "Please Enter Your Password To Continue.", "error");
    } else {
      registerTeacherWithEmailAndPassword(employeeid, name, email, password);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (teacher) navigate("/BasicTeacher");
  }, [teacher, loading]);
  return (
    <>
      <section id="register">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Sign <span>Up</span>
                  </h1>
                  <h5>Register Now To Get Your Teacher Account's Benefit.</h5>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Employee ID</label>
                      <input
                        type="number"
                        value={employeeid}
                        onChange={(e) => setEmployeeid(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your Teacher's Email ID
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                      <div id="userHelp" className="form-text">
                        This Will Be Your Login Email For Our Login Portal.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                      />
                      <div id="userHelp" className="form-text">
                        This Will Be Your Login Password For Our Login Portal.
                      </div>
                    </div>
                    <button className="btn" onClick={register}>
                      Register
                    </button>
                    {/* &nbsp;&nbsp;
                    <button className="btn" onClick={signInWithGoogle}>
                      Register With Google
                    </button> */}
                  </div>
                  <br />
                  <p>
                    Already Our Member? Login
                    <NavLink
                      to="/TeacherLogin"
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
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={register1}
                    alt="Contact"
                    className="imgfix"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherRegistration;
