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
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [facultynum, setFacultynum] = useState("");
  const [position, setPosition] = useState("");
  const [teacher, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      swal("Error!", "Please Enter Your Name To Continue.", "error");
    } else if (!facultynum) {
      swal("Error!", "Please Enter Your Faculty Number To Continue.", "error");
    } else if (!position) {
      swal("Error!", "Please Enter Your Position To Continue.", "error");
    } else if (!dept) {
      swal("Error!", "Please Enter Your Department To Continue.", "error");
    } else if (!email) {
      swal("Error!", "Please Enter Your Email To Continue.", "error");
    } else if (!password) {
      swal("Error!", "Please Enter Your Password To Continue.", "error");
    } else {
      registerTeacherWithEmailAndPassword(
        name,
        email,
        password,
        dept,
        facultynum,
        position
      );
    }
  };
  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
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
                  <h5>
                    Register Now To Get Access To Our Free Courses And
                    Resources.
                  </h5>
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
                      <label className="form-label">Your Department</label>
                      <input
                        type="text"
                        style={{ textTransform: "uppercase" }}
                        onInput={toInputUppercase}
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Position</label>
                      <input
                        type="text"
                        value={position}
                        placeholder="Maths Professor, Associate Professor, Assistant Professor, Lecturer, etc."
                        onChange={(e) => setPosition(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Faculty Number</label>
                      <input
                        type="number"
                        className="form-control"
                        value={facultynum}
                        onChange={(e) => setFacultynum(e.target.value)}
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
