import React from "react";
import errimg from "../../img/404.svg";
const Error = () => {
  return (
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
                  It Seems Like We Couldn't Find The Page You Were Looking For...
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
