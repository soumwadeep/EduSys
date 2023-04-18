import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, registerStudentWithEmailAndPassword } from "../firebase";
import register1 from "../../img/register1.svg";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const StudentRegistration = () => {
  // useEffect(() => {
  //   document.title = "Student's Registration | EduSys";
  // }, []);

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [sec, setSec] = useState("");
  const [rollno, setRollno] = useState("");
  const [sem, setSem] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("Basic Student");
  const [student, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      swal("Error!", "Please Enter Your Name To Continue.", "error");
    } else if (!dept) {
      swal("Error!", "Please Enter Your Department To Continue.", "error");
    } else if (!sec) {
      swal("Error!", "Please Enter Your Section To Continue.", "error");
    } else if (!rollno) {
      swal("Error!", "Please Enter Your Roll Number To Continue.", "error");
    } else if (!sem) {
      swal("Error!", "Please Enter Your Semester To Continue.", "error");
    } else if (!email) {
      swal("Error!", "Please Enter Your Email To Continue.", "error");
    } else if (!password) {
      swal("Error!", "Please Enter Your Password To Continue.", "error");
    } else if (!plan) {
      swal("Error!", "Please Select Your Plan To Continue.", "error");
    } else {
      registerStudentWithEmailAndPassword(
        name,
        email,
        password,
        dept,
        sec,
        rollno,
        sem,
        plan
      );
    }
  };
  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  useEffect(() => {
    if (loading) return;
    if (student) navigate("/BasicStudent");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student, loading]);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Register As A Student Of EduSys Now!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Student's Registration Edusys,Student's Registration in India,Student Registration Section Of Edusys,Student Registration Portal,Student Registration Portal Of Edusys,Edusys Student Registration"
        />
        <title>Student's Registration | EduSys</title>
      </Helmet>
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
                        value={dept}
                        onInput={toInputUppercase}
                        onChange={(e) => setDept(e.target.value)}
                        className="form-control"
                        placeholder="eg. CSE,EE,ECE,IT,CE etc."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Section</label>
                      <input
                        type="text"
                        value={sec}
                        style={{ textTransform: "uppercase" }}
                        onInput={toInputUppercase}
                        onChange={(e) => setSec(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your University Roll No.
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={rollno}
                        onChange={(e) => setRollno(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your Present Semester
                      </label>
                      <input
                        type="number"
                        value={sem}
                        onChange={(e) => setSem(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Plan</label>
                      <select
                        name="Selected-Plan"
                        className="form-select"
                        onChange={(e) => setPlan(e.target.value)}
                        required
                      >
                        <option value="Basic Student" selected>
                          Basic
                        </option>
                        <option value="Pro Student" disabled>
                          Pro
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your Student Email ID
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
                      to="/StudentLogin"
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

export default StudentRegistration;
