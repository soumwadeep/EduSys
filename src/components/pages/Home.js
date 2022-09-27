import React, { useEffect } from "react";
import home1 from "../../img/home1.svg";
const Home = () => {
  useEffect(() => {
    document.title = "Home | EduSys";
  }, []);
  return (
    <>
      <section id="home">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Welcome To <span>EduSys</span>
                  </h1>
                  <h5>
                    India's Best All In One Digital Education System Which
                    Consists Of Almost All The Features Required By
                    Teachers,Administrators And Students.
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
                    src={home1}
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

export default Home;
