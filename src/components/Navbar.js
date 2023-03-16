import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../img/icon.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  function toggleNav() {
    setNavOpen((state) => !state)
  }
  // Add toggleNav() in each navlink to close the navbar after clicking on a link.
  // add data-bs-dismiss={navOpen ? "offcanvas" : "none"} to the offcanvas div or mobile nav div
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
      },
      'google_translate_element',
    )
  }
  useEffect(() => {
    var addScript = document.createElement('script')
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    )
    document.body.appendChild(addScript)
    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  useEffect(() => {
    // Select all the elements with the .goog-te-combo class except for the first one
    const comboElements = document.querySelectorAll(
      '#google_translate_element .goog-te-combo:not(:first-child)',
    )

    // Remove the .goog-te-combo class from the extra elements
    comboElements.forEach((element) => {
      element.classList.remove('goog-te-combo')
    })
  }, [])
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg text-center">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">
            <img src={icon} alt="Logo" width="30" height="24" /> <b>Edu</b>
            <span>Sys</span>
          </NavLink>
          <button
            onClick={toggleNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="navbarOffcanvasNavbarLabel"
            data-bs-dismiss={navOpen ? 'offcanvas' : 'none'}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Edu<span>Sys</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="main-bar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/Home"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/About"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/Features"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    Features
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/Pricing"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/Contact"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'menu_active' : 'nav-link'
                    }
                    to="/Login"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      toggleNav()
                    }}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item mt-2">
                  <div id="google_translate_element"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
