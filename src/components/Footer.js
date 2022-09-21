import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-white text-muted"
        id="footer"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get Connected With Us On Social Networks:</span>
          </div>

          <div>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-google"></i>
            </NavLink>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-linkedin"></i>
            </NavLink>
            <NavLink
              to="/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-github"></i>
            </NavLink>
          </div>
        </section>

        <section id="footer-contents">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-sm">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>EduSys
                </h6>
                <p>
                  The World's Best All In One Digital Education System Which
                  Consists Of Almost All The Features Required By
                  Teachers,Administrators And Students.
                </p>
              </div>

              <div className="col-sm">
                <h6 className="text-uppercase fw-bold mt-4 mb-4">Features</h6>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Digital Library
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Liva And Recorded Classes
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Fess Payment
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Virtual Labs
                  </NavLink>
                </p>
              </div>

              <div className="col-sm">
                <h6 className="text-uppercase fw-bold mt-4 mb-4">Useful Links</h6>
                <p>
                  <NavLink
                    to="/Home"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/About"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    About
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/Features"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Features
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/Pricing"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Pricing
                  </NavLink>
                </p>
              </div>
              <div className="col-sm">
                <h6 className="text-uppercase fw-bold mt-4 mb-4">Contact</h6>
                <p>
                  <a
                    href="https://goo.gl/maps/1sigdrwWr4vyMYFu7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-home me-3 text-secondary"></i> West
                    Bengal,India
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:soumwadeep@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    support@edusys.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919883505330">
                    <i className="fas fa-phone me-3 text-secondary"></i> + 91
                    9883505330
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" id="copyright-text">
          © 2022 Copyright:
          <NavLink
            className="text-reset fw-bold"
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            {" "}
            EduSys
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
