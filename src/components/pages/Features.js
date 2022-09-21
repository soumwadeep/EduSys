import React from "react";
import feature1 from "../../img/feature1.svg";
const Features = () => {
  return (
    <>
      <section id="features">
        <h1>
          Our <span>Features</span>
        </h1>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h5 style={{ textAlign: "left" }}>
                    EduSys Consists Of Many Features Which Will Make The Life Of
                    Students And Teachers Easier.Have A Look At Our Features From Below And Find About The Details Of Our All Features.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <img src={feature1} className="imgfix" alt="feature" id="animateimg" /> 
            </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="feature-cards">
              <div className="row">
                <div className="col-sm">
                  <i className="fa-solid fa-1" id="feature-icons"></i>
                </div>
                <div className="col-sm">
                  <h3>
                    Recorded <span>Sessions</span>
                  </h3>
                </div>
              </div>
              <br />
              <i
                className="fa-solid fa-person-chalkboard"
                id="feature-icons"
              ></i>
              <br />
              <br />
              <p>
                We Have Provided All The Students With The Functionality Of
                Recording Sessions.If The Students Remains Absent On Classes
                With The Help Of This Feature They Can Watch The Recorded Video
                Of All The Classes.
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="feature-cards">
              <div className="row">
                <div className="col-sm">
                  <i className="fa-solid fa-2" id="feature-icons"></i>
                </div>
                <div className="col-sm">
                  <h3>
                    Fees <span>Payment</span>
                  </h3>
                </div>
              </div>
              <br />
              <i
                className="fa-solid fa-money-bill-1-wave"
                id="feature-icons"
              ></i>
              <br />
              <br />
              <p>
                We Have Created A Total Secured Payment Environment Which Can Be
                Used Securely For Payment Of Various
                Semesters,Fees,Courses,Transport etc.This Payment System Is
                Completely Secured And Is Based On The Latest Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
