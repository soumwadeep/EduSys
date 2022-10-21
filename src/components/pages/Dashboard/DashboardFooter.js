import React from 'react'

const DashboardFooter = () => {
  return (
    <>
        <section id="DashboardFooter">
            <center>
            <div className="text-center p-4" id="copyright-text">
          © 2022 Copyright:
          {/* <NavLink
            className="text-reset fw-bold"
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          > */}
            {" "}
            <span>EduSys</span>
          {/* </NavLink> */}
        </div>
            </center>
        </section>
    </>
  )
}

export default DashboardFooter
