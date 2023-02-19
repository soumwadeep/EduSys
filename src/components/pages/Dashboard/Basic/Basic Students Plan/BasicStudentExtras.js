import React, { useEffect, useState } from "react";
import Extras from "../../../../../img/Designer.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";

const BasicStudentExtras = () => {
  useEffect(() => {
    document.title = "Your Extras Section | EduSys";
  }, []);
  return (
    <section id="basicstudentextras">
      <BasicStudentSidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Extras <span>Section</span>
                  </h1>
                  <p>
                    Here You Will Get Some More Extra Stuff Which Will Help You
                    A Lot In Your Studies.
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
                    src={Extras}
                    alt="Extras"
                    className="imgfix"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <h1 className="text-center mt-5">Tool<span>Kit</span></h1>
            <div className="col-sm">
                <div className="featureTable">
                  <div className="featureTable-header">
                    <h3 className="title" id="extras-headings">
                      <i className="fa-regular fa-screen-users"></i>Scientific Calculator
                    </h3>
                  </div>
                  <div className="feature-content" id="extras-text">
                  <center><i className="fa-solid fa-calculator" id="LargeIcon"></i></center>
                  <br/>
                    <h4>
                        Need a Scientific Calculator? Go Here To Use It.
                    </h4>
                    <button id="extras-btn">
                        Use Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="featureTable red">
                  <div className="featureTable-header">
                    <h3 className="title" id="extras-headings">Todo App</h3>
                  </div>
                  <div className="feature-content" id="extras-text">
                  <center><i className="fa-solid fa-clipboard-list" id="LargeIcon"></i></center>
                  <br/>
                    <h4>
                        Want To Make A Todo List? Go Here To Use It.
                    </h4>
                    <button id="extras-btn">
                        Use Now
                    </button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default BasicStudentExtras;
