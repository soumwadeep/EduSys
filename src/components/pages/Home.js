import React from "react";
import home1 from "../../img/home1.svg";
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Welcome To EduSys</h1>
                  <h5>
                    The World's Best All In One Digital Education System Which
                    Consists Of Almost All The Features Required By
                    Teachers,Administrators And Students.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <img
              src={home1}
              className="imgfix"
              id="animateimg"
              alt="education"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
