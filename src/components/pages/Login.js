import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import login1 from "../../img/login1.svg";
import studentimg from "../../img/Student.svg";
import teacherimg from "../../img/Teacher.svg";
const Pricing = () => {
  useEffect(() => {
    document.title = "Login | EduSys";
  }, []);
  return (
    <>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <img
                      src={login1}
                      className="imgfix"
                      id="animateimg"
                      alt="education"
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
                      <span>Sign</span> In
                    </h1>
                    <h5>
                      Get The Best Features Available For You By Just Signing In
                      To Our Dashboard!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <center>
            <div className="row">
              <div className="col-sm">
                <div className="card login-cards">
                  <img src={studentimg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Student's <span>Login</span>
                    </h5>
                    <p className="card-text">
                      If You Are A Student Then Click On The Given Button And Go
                      To Your Respective Login Page.
                    </p>
                    <NavLink to="/StudentLogin" className="btn">
                      Student's Login Portal
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card login-cards">
                  <img src={teacherimg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Teacher's <span>Login</span>
                    </h5>
                    <p className="card-text">
                      If You Are A Teacher Then Click On The Given Button And Go
                      To Your Respective Login Page.
                    </p>
                    <NavLink to="/TeacherLogin" className="btn">
                      Teacher's Login Portal
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  );
};

export default Pricing;
