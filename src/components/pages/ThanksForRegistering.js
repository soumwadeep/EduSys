import React, { useEffect } from "react";
import thankyouregister1 from "../../img/thankyouregister1.svg";
const ThanksForRegistering = () => {
  useEffect(() => {
    document.title = "Thanks For Registering | EduSys";
  }, []);
  return (
    <section id="thankyou">
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner" id="mobviewtextfix">
                <h1>
                  Thank You For <span>Registering</span> With Us!
                </h1>
                <h5>
                  We Have Received Your Registering Request!We Will Soon
                  Validate Your Details And Finally Register You With Us.Check
                  Your Mail Regularly For Further Updates!
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
                  src={thankyouregister1}
                  className="imgfix"
                  id="animateimg"
                  alt="education"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksForRegistering;
