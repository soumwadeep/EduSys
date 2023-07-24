import React from "react";
import home1 from "../../img/home1.svg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const Home = () => {
  // useEffect(() => {
  //   document.title = "Home | EduSys";
  // }, []);

  const navigate = useNavigate();
  function goToSignUp() {
    navigate("/Login");
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome To EduSys!" />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in"
        />
        <title>Home | EduSys</title>
      </Helmet>
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
                  <button
                    className="btn btn-lg"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      goToSignUp();
                    }}
                  >
                    Click Here To Register
                  </button>
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
