import React, {useState } from "react";
import { sendPasswordReset } from "../firebase";
import reset1 from "../../img/reset1.svg";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  // useEffect(() => {
  //   document.title = "Reset Password | EduSys";
  // }, []);
  const [email, setEmail] = useState("");
  return (
    <>
      <Helmet>
        <meta name="description" content="Reset Your EduSys Password Now!" />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Reset Your Password,Reset Password,Reset Password EduSys,One Click Reset Password"
        />
        <title>Reset Password | EduSys</title>
      </Helmet>
      <section id="login">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    className="imgfix"
                    src={reset1}
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
                    Reset <span>Password</span>
                  </h1>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn"
                      onClick={() => sendPasswordReset(email)}
                    >
                      Send Password Reset Email
                    </button>
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

export default ResetPassword;
