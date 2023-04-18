import React, { useEffect } from "react";
import thankyou1 from "../../img/thankyou1.svg";
import { Helmet } from "react-helmet";
const ThankYou = () => {
  // useEffect(() => {
  //   document.title = "Thank You | EduSys";
  // }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Thanks For Contacting EduSys,We Will Soon Reach You!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,Contact EduSys,Thanks For Contacting EduSys,Thank You"
        />
        <title>Thank You | EduSys</title>
      </Helmet>
      <section id="thankyou">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    <span>Thank</span> You
                  </h1>
                  <h5>
                    We Have Received Your Message!We Will Soon Contact You.Till
                    Then Have A Look At Our Awesome Features That Might Help
                    You!
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
                    src={thankyou1}
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
    </>
  );
};

export default ThankYou;
