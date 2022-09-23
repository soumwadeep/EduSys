import React from "react";
import { NavLink } from "react-router-dom";
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
                    Students And Teachers Easier.Have A Look At Our Features
                    From Below And Find About The Details Of Our All Features.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <img
              src={feature1}
              className="imgfix"
              alt="feature"
              id="animateimg"
            />
          </div>
        </div>
        <div id="demo">
          <center>
            <h1>
              Our <span style={{ color: "#F53803" }}>Services</span>
            </h1>
          </center>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="featureTable">
                <div class="featureTable-header">
                  <h3 class="title">Live Classes</h3>
                  <div class="feature-value">
                    <span class="amount">$9.99</span>
                    <span class="duration">Per Month</span>
                  </div>
                </div>
                <ul class="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li class="disable">Maintenance</li>
                  <li class="disable">15 Subdomains</li>
                </ul>
                <div class="featureTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="featureTable red">
                <div class="featureTable-header">
                  <h3 class="title">Study Materials</h3>
                  <div class="feature-value">
                    <span class="amount">$19.99</span>
                    <span class="duration">Per Month</span>
                  </div>
                </div>
                <ul class="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li class="disable">15 Subdomains</li>
                </ul>
                <div class="featureTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="featureTable blue">
                <div class="featureTable-header">
                  <h3 class="title">Exam Portal</h3>
                  <div class="price-value">
                    <span class="currency">$</span>
                    <span class="amount">30</span>
                    <span class="duration">/month</span>
                  </div>
                </div>
                <ul class="feature-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div class="featureTable-signup">
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
