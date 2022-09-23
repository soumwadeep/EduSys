import React from "react";
import login1 from "../../img/login1.svg";
const Login = () => {
  return (
    <>
      <section id="login">
        <div className="row">
          <div className="col-sm">
            <img className="imgfix" src={login1} alt="Login" id="animateimg" />
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>Sign <span>In</span></h1>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button type="submit" className="btn">
                      Login
                    </button>
                  </form><br/>
                  <p><b>New User? Register<span> Now.</span></b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
