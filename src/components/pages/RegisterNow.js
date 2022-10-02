import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import register1 from "../../img/register1.svg";
import swal from "sweetalert";
const RegisterNow = () => {
  useEffect(() => {
    document.title = "Register | EduSys";
  }, []);

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [sec, setSec] = useState("");
  const [rollno, setRollno] = useState("");
  const [sem, setSem] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name)
    {
      swal("Error!", "Please Enter Your Name To Continue.", "error");
    }
    else if (!dept)
    {
      swal("Error!", "Please Enter Your Department To Continue.", "error");
    }
    else if (!sec)
    {
      swal("Error!", "Please Enter Your Section To Continue.", "error");
    }
    else if (!rollno)
    {
      swal("Error!", "Please Enter Your Roll Number To Continue.", "error");
    }
    else if (!sem)
    {
      swal("Error!", "Please Enter Your Semester To Continue.", "error");
    }
    else if (!email)
    {
      swal("Error!", "Please Enter Your Email To Continue.", "error");
    }
    else if (!password)
    {
      swal("Error!", "Please Enter Your Password To Continue.", "error");
    }
    else
    {
    registerWithEmailAndPassword(name, email, password, dept, sec, rollno, sem);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/BasicStudents");
  }, [user, loading]);
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
                        style={{textTransform: "uppercase"}}
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Section</label>
                      <input
                        type="text"
                        value={sec}
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
                      to="/Login"
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

export default RegisterNow;
