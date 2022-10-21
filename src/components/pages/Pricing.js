import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pricing1 from "../../img/pricing1.svg";
const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing | EduSys";
  }, []);
  return (
    <>
      <section id="pricing">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={pricing1}
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
                    <span>Pricing</span> Plans
                  </h1>
                  <h5>
                    We Have Different Pricing Plans For Different Needs Of Our
                    Users.Have A Look At Our Plans And Choose The One That Suits
                    You The Best!
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="demo">
          <center>
            <h1>
              Our <span style={{ color: "#F53803" }}>Plans</span>
            </h1>
            <br />
            <marquee direction="left" className="pricing-marquee">
              We Are Providing Our Exclusive Virtual-Lab Feature For Free In Our Basic Plan For Limited Time.Enjoy!
            </marquee>
            <br />
            <div className="row justify-content-md-center">
              <div className="col-sm">
                <div className="pricingTable pink">
                  <div className="pricingTable-header">
                    <div className="price-value">
                      <span className="amount">₹ 1000</span>
                      <span className="duration">per month</span>
                    </div>
                    <h3 className="title">Basic</h3>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <i className="fa fa-check"></i> Live Classes
                    </li>
                    <li>
                      <i className="fa fa-xmark"></i>&nbsp;&nbsp; Recorded
                      Classes
                    </li>
                    <li>
                      <i className="fa fa-check"></i> 50 Students
                    </li>
                    <li>
                      <i className="fa fa-check"></i> 50 GB Storage
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Upload Files
                    </li>
                    <li>
                      <i className="fa fa-xmark"></i>&nbsp;&nbsp; Virtual Lab
                    </li>
                    <li>
                      <i className="fa fa-xmark"></i>&nbsp;&nbsp; Fees Payment
                    </li>
                    <li>
                      <i className="fa fa-xmark"></i>&nbsp;&nbsp; Exam Portal
                    </li>
                  </ul>
                  <div className="pricingTable-signup">
                    <NavLink to="#">Sign Up</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="pricingTable orange">
                  <div className="pricingTable-header">
                    <div className="price-value">
                      <span className="amount">₹ 5000</span>
                      <span className="duration">per month</span>
                    </div>
                    <h3 className="title">Pro</h3>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <i className="fa fa-check"></i> Live Classes
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Recorded Classes
                    </li>
                    <li>
                      <i className="fa fa-check"></i> 100 Students
                    </li>
                    <li>
                      <i className="fa fa-check"></i> 100 GB Storage
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Upload Files
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Virtual Lab
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Fees Payment
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Exam Portal
                    </li>
                  </ul>
                  <div className="pricingTable-signup">
                    <NavLink to="#">Sign Up</NavLink>
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
