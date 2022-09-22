import React from "react";
import contact1 from "../../img/contact1.svg";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="row">
          <div className="col-sm">
            <img
              src={contact1}
              alt="Contact"
              className="imgfix"
              id="animateimg"
            />
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>
                    <span>Contact</span> Us
                  </h1>
                  <h5>
                    "We Are Always Available To Help You. Feel Free To Contact
                    Us!"
                  </h5>
                  <form action="https://formsubmit.co/soumwadeep@gmail.com" method="POST">
                    {/* Email Preferences */}
                    <div>
                    <input type="hidden" name="_subject" value="An User Has Just Send You A Message From EduSys's Contact Form.Please Have A Look!"/>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://soumwadeep.github.io/EduSys/ThankYou"/>
                  </div>
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="exampleInputText1"
                        aria-describedby="TextHelp"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        name="email"
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
                      <label className="form-label">Your Message</label>
                      <textarea
                        type="text"
                        name="message"
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
        </div>
      </section>
    </>
  );
};

export default Contact;
