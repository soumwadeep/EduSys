import React, { useEffect } from "react";
import register1 from "../../img/register1.svg";
const RegisterNow = () => {
  useEffect(() => {
    document.title = "Register | EduSys";
  }, []);
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
                  <form
                    action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862"
                    method="POST"
                  >
                    {/* Email Preferences */}
                    <div>
                      <input
                        type="hidden"
                        name="_subject"
                        value="An User Has Just Registered In EduSys Web App.Please Have A Look!"
                      />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_next"
                        value="https://edusys.co.in/ThanksForRegistering"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Department</label>
                      <input
                        type="text"
                        name="dept"
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
                        name="rollno"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your Present Semester
                      </label>
                      <input
                        type="number"
                        name="sem"
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
                        name="email"
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
                        name="password"
                        className="form-control"
                        required
                      />
                      <div id="userHelp" className="form-text">
                        This Will Be Your Login Password For Our Login Portal.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Comments</label>
                      <textarea
                        type="text"
                        name="comment"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </form>
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
