import React, { useEffect } from "react";
import contact1 from "../../img/contact1.svg";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | EduSys";
  }, []);
  function ShowHideDiv() {
    var selectedChoice = document.getElementById("selectedChoice");
    var selectedPlan = document.getElementById("selectedPlan");
    selectedPlan.style.display = selectedChoice.value === "Yes" ? "block" : "none";
}
  return (
    <>
      <section id="contact">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    Contact <span>Us</span>
                  </h1>
                  <h5>
                    "We Are Always Available To Help You. Feel Free To Contact
                    Us!"
                  </h5>
                  <form
                    action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862"
                    method="POST"
                  >
                    {/* Email Preferences */}
                    <div>
                      <input
                        type="hidden"
                        name="_subject"
                        value="An User Has Just Send You A Message From EduSys's Contact Form.Please Have A Look!"
                      />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_next"
                        value="https://edusys.co.in/ThankYou"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        id="exampleInputText1"
                        aria-describedby="TextHelp"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Mobile Number</label>
                      <input
                        type="text"
                        name="Mobile-Number"
                        className="form-control"
                        id="exampleInputText1"
                        aria-describedby="TextHelp"
                        required
                      />
                      <div id="phoneHelp" className="form-text">
                        We'll Never Share Your Mobile Number With Anyone Else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Email Id</label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                      <div id="emailHelp" className="form-text">
                        We'll Never Share Your Email With Anyone Else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Discuss About Our Plans?
                      </label>
                      <select
                      id="selectedChoice"
                      name="About-Plans"
                        className="form-select"
                        onChange={ShowHideDiv}
                        required
                      >
                        <option value="Yes">Yes</option>
                        <option value="No" selected>No</option>
                      </select>
                    </div>
                    <div id="selectedPlan" style={{display:"none"}} className="mb-3">
                      <label className="form-label">
                        If Yes, Which One?
                      </label>
                      <select
                        name="Selected-Plan"
                        className="form-select"
                        required
                      >
                        <option value="None">Select Your Plan</option>
                        <option value="Basic">Basic</option>
                        <option value="Pro">Pro</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Message</label>
                      <textarea
                        type="text"
                        name="Message"
                        className="form-control"
                        id="exampleInputText1"
                        aria-describedby="TextHelp"
                        required
                      />
                    </div>
                    <button type="submit" className="btn">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={contact1}
                    alt="Contact"
                    className="imgfix"
                    id="animateimg"
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

export default Contact;
