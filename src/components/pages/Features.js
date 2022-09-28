import React, { useEffect } from "react";
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
            <br />
            <div className="row">
              <div className="col-sm">
                <div className="featureTable">
                  <div className="featureTable-header">
                    <h3 className="title">
                      <i class="fa-regular fa-screen-users"></i>Live Classes
                    </h3>
                  </div>
                  <ul className="feature-content">
                    <li>High Quality Recording</li>
                    <li>Live Chat</li>
                    <li>Screen Sharing</li>
                    <li>Easy To Use UI</li>
                    <li>Well Maintained</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm">
                <div className="featureTable red">
                  <div className="featureTable-header">
                    <h3 className="title">Study Materials</h3>
                  </div>
                  <ul className="feature-content">
                    <li>All Subject Books</li>
                    <li>Sample Papers</li>
                    <li>Best Notes</li>
                    <li>Supports Every Format</li>
                    <li>Best Support</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm">
                <div className="featureTable blue">
                  <div className="featureTable-header">
                    <h3 className="title">Exam Portal</h3>
                  </div>
                  <ul className="feature-content">
                    <li>Best Security</li>
                    <li>Best Survillance</li>
                    <li>Easy To Use UI</li>
                    <li>Well Maintenance</li>
                    <li>Real Time Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm">
                <div className="featureTable">
                  <div className="featureTable-header">
                    <h3 className="title">
                      <i class="fa-regular fa-screen-users"></i>Fees Portal
                    </h3>
                  </div>
                  <ul className="feature-content">
                    <li>256-Bit Security</li>
                    <li>Refund Facility</li>
                    <li>Every Payment Methods</li>
                    <li>International Payments</li>
                    <li>Well Maintained</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm">
                <div className="featureTable red">
                  <div className="featureTable-header">
                    <h3 className="title">Virtual Lab</h3>
                  </div>
                  <ul className="feature-content">
                    <li>All Practical Subject's Lab</li>
                    <li>IIT Digital Labs</li>
                    <li>Lab Notes</li>
                    <li>Live Digital Experimenting</li>
                    <li>97.8% Accurate Results</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm">
                <div className="featureTable blue">
                  <div className="featureTable-header">
                    <h3 className="title">Dashboard</h3>
                  </div>
                  <ul className="feature-content">
                    <li>Has Every Contents</li>
                    <li>Easy To Understand</li>
                    <li>Important Direct Links</li>
                    <li>Regularly Updated</li>
                    <li>Best Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  );
};

export default Features;
