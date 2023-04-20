import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    // Select all the elements with the .goog-te-combo class except for the first one
    const comboElements = document.querySelectorAll(
      "#google_translate_element .goog-te-combo:not(:first-child)"
    );

    // Remove the .goog-te-combo class from the extra elements
    comboElements.forEach((element) => {
      element.classList.remove("goog-te-combo");
    });
  }, []);

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
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </NavLink>
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </NavLink>
            <NavLink to="/Home" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </NavLink>
          </div>
        </section>

        <section id="footer-contents">
          <div className="container text-center text-md-start mt-5">
            <div className="row ">
              <div className="col-sm">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>EduSys
                </h6>
                <p>
                  India's Best All In One Digital Education System Which
                  Consists Of Almost All The Features Required By
                  Teachers,Administrators And Students.
                </p>
                <p>Select Your <span>Favourite Language</span> From This Dropdown To <span>Translate:</span></p>
                <div className="translator" id="google_translate_element"></div>
              </div>

              <div className="col-sm">
                <h6 className="text-uppercase fw-bold  mb-4">Features</h6>
                <p>
                  <NavLink
                    to="/Home"
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
                    to="/Home"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Live And Recorded Classes
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/Home"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Fees Payment
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/Home"
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
                <h6 className="text-uppercase fw-bold  mb-4">Useful Links</h6>
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
                <h6 className="text-uppercase fw-bold  mb-4">Contact</h6>
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
                    href="mailto:admin@edusys.co.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    admin@edusys.co.in
                  </a>
                </p>
                <p>
                  <i className="fa-brands fa-rocketchat"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink
                    to="/Contact"
                    className="text-reset"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Chat With Us
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" id="copyright-text">
          © 2023
          <NavLink
            className="text-reset fw-bold"
            to="/Home"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            {" "}
            <span>EduSys </span>
          </NavLink>
          | All Rights Reserved |
          <NavLink
            className="text-reset fw-bold"
            to="/PrivacyPolicy"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            {" "}
            Terms & Conditions
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
