import React, { useEffect } from "react";
import about1 from "../../img/about1.svg";
import { Helmet } from "react-helmet";
const About = () => {
  // To add heading without using helmet
  // useEffect(() => {
  //   document.title = "About | EduSys";
  // }, []);
  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome To EduSys's About Section!" />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,About Edusys,About EduSys,About EduSys's,About Edu"
        />
        <title>About | EduSys</title>
      </Helmet>
      <section id="about">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={about1}
                    className="imgfix"
                    alt="about us"
                    id="animateimg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    <span>About</span> Us
                  </h1>
                  <p>
                    <span>EduSys</span> Is Created By Keeping The Problems Of
                    Feature's Availaibility Of Students And Teachers.{" "}
                    <span>EduSys</span> Is Created By{" "}
                    <span>Soumwadeep Guha</span> In The Year Of{" "}
                    <span>2022</span>.
                  </p>
                  <p>
                    After Thorough Analysis We Have Added Several Features Which
                    Will Make The Student's And Teacher's Life Easier In The
                    Field Of Education.
                  </p>
                  <p>
                    The Available Resources And Features Solves Many Problems
                    Such As HomeWork Uploading,Getting Recorded Video Lectures
                    Of The Live Classes,Easy UI For Teachers,Present Of All
                    Sorts Of Features Whether Its Maybe Of Books Or Labs Or Fees
                    Payment,We Have Added All The Features In Our Web App.
                  </p>
                  <p>
                    We Are Not Stopping Here Only!We Are Still Working Hard On
                    Adding More Features Which Will Make The Life Of Students
                    And Teachers More Easier!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
