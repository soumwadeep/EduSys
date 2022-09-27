import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import feature1 from "../../img/feature1.svg";
const Features = () => {
  useEffect(() => {
    document.title = "Features | EduSys";
  }, []);
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
                    Students And Teachers Easier.Have A Look At Our Features
                    From Below And Find About The Details Of Our All Features.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={feature1}
                    className="imgfix"
                    alt="feature"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="demo">
          <center>
            <h1>
              Our <span style={{ color: "#F53803" }}>Services</span>
            </h1>
          </center>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="featureTable">
                <div className="featureTable-header">
                  <h3 className="title">Live Classes</h3>
                  <div className="feature-value">
                    <span className="amount">$9.99</span>
                    <span className="duration">Per Month</span>
                  </div>
                </div>
                <ul className="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li className="disable">Maintenance</li>
                  <li className="disable">15 Subdomains</li>
                </ul>
                <div className="featureTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="featureTable red">
                <div className="featureTable-header">
                  <h3 className="title">Study Materials</h3>
                  <div className="feature-value">
                    <span className="amount">$19.99</span>
                    <span className="duration">Per Month</span>
                  </div>
                </div>
                <ul className="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li className="disable">15 Subdomains</li>
                </ul>
                <div className="featureTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="featureTable blue">
                <div className="featureTable-header">
                  <h3 className="title">Exam Portal</h3>
                  <div className="feature-value">
                    <span className="amount">$30.00</span>
                    <span className="duration">Per Month</span>
                  </div>
                </div>
                <ul className="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="featureTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
