import React from "react";
import about1 from "../../img/about1.svg"
const About = () => {
  return (
    <>
      <section id="about">
        <div className="row">
          <div className="col-sm">
            <img src={about1} className="imgfix" alt="about us" id="animateimg"></img>
          </div>
          <div className="col-sm">
          <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
            <h1><span>About</span> Us</h1>
            <p><b>EduSys</b> Is Created By Keeping The Problems Of Feature's Availaibility Of Students And Teachers. <b>EduSys</b> Is Created By <b>Soumwadeep Guha</b> In The Year Of <b>2022</b>.</p>
            <p>After Thorough Analysis We Have Added Several Features Which Will Make The Student's And Teacher's Life Easier In The Field Of Education.</p>
            <p>The Available Resources And Features Solves Many Problems Such As HomeWork Uploading,Getting Recorded Video Lectures Of The Live Classes,Easy UI For Teachers,Present Of All Sorts Of Features Whether Its Maybe Of Books Or Labs Or Fees Payment,We Have Added All The Features In Our Web App.</p>
            <p>We Are Not Stopping Here Only!We Are Still Working Hard On Adding More Features Which Will Make The Life Of Students And Teachers More Easier!</p></div></div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
