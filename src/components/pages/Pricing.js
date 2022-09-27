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
          </center>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">$10</span>
                    <span className="duration">per month</span>
                  </div>
                  <h3 className="title">Standard</h3>
                </div>
                <ul className="pricing-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="pricingTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable pink">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">$20</span>
                    <span className="duration">per month</span>
                  </div>
                  <h3 className="title">Business</h3>
                </div>
                <ul className="pricing-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="pricingTable-signup">
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable orange">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">$30</span>
                    <span className="duration">per month</span>
                  </div>
                  <h3 className="title">Premium</h3>
                </div>
                <ul className="pricing-content">
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Bandwidth</li>
                  <li>Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="pricingTable-signup">
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

export default Pricing;
