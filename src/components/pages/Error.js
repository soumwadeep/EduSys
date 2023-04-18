import React from "react";
import errimg from "../../img/404.svg";
import { Helmet } from "react-helmet";
const Error = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Whoops!We Were Unable To Find Your Desired Page."
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,About Edusys,About EduSys,About EduSys's,About Edu,Contact Sales,Contact Edusys,Contact EduSys,Contact EduSys's,Contact Edu,Contact Us,Contact Us Now,Contact Us Now!,Contact"
        />
        <title>404 | EduSys</title>
      </Helmet>
      <section id="home">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={errimg}
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
                    <span>Whoops!</span>
                  </h1>
                  <h5>
                    It Seems Like We Couldn't Find The Page You Were Looking
                    For...
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
