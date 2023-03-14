import React, { useEffect } from "react";

const DashboardFooter = () => {
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
  return (
    <>
      <section id="DashboardFooter">
        <center>
          <div className="text-center p-4" id="copyright-text">
            © 2022 Copyright:
            {/* <NavLink
            className="text-reset fw-bold"
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          > */}{" "}
            <span>EduSys</span>
            <div id="google_translate_element"></div>
            {/* </NavLink> */}
          </div>
        </center>
      </section>
    </>
  );
};

export default DashboardFooter;
