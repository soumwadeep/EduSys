import React from "react";
import home1 from "../../img/home1.svg";
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="row">
          <div className="col-sm">
            <h1>Welcome To EduSys</h1>
            <h4>The World's Best Digital Education System</h4>
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
