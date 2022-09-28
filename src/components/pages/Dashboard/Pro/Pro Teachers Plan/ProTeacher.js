import React, { useEffect } from "react";
import ProDashboard1 from "../../../../../img/ProDashboard1.svg";
import ProTeacherSidebar from "./ProTeacherSidebar";
const ProTeacher = () => {
  useEffect(() => {
    document.title = "Welcome Teacher | EduSys";
  }, []);
  return (
    <>
      <section id="proteacher">
        <ProTeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Welcome To Our <span>DashBoard</span>
                    </h1>
                    <p>
                      We Are Currently Working On It.So Please Wait For Some
                      Time.We Will Update You Via Email After We Finish Setting
                      Up Your Dashboard!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <img
                      src={ProDashboard1}
                      alt="ProDashboard1"
                      className="imgfix"
                      id="animateimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProTeacher;
