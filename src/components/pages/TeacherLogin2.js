import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from '../firebase'
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import teacherloginimg from '../../img/TeacherLogin.svg'
import swal from 'sweetalert'

const TeacherLogin2 = () => {
  useEffect(() => {
    document.title = "Teacher's Login | EduSys"
  }, [])

  const [facultyNum, setFacultynum] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teacher, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const formValidation = async () => {
    if (!facultyNum) {
      swal("Fill All Values","Please Enter Your Faculty Number To Continue!","warning")
      // return window.location.reload()
    }

    const db = getFirestore()
    console.log(db)
    // const teachersRef = collection(db, 'Teachers')
    // const q = query(teachersRef, where('facultynum', '==', facultyNum))
    const q = query(
      collection(db, "Teachers"),
      where("facultynum", "==", teacher.facultyNum)
    );
    // console.log(q)
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      alert('Invalid Faculty Number')
      return window.location.reload()
    } else {
      return true
    }
  }

  const handleLogin = async () => {
    const validFacultyNum = await formValidation()
    if (validFacultyNum) {
      await logInWithEmailAndPassword(email, password)
    }
  }

  useEffect(() => {
    if (loading) {
      return
    }
    if (teacher) navigate('/BasicTeacher')
    // eslint-disable-next-line
  }, [teacher, loading])

  return (
    <>
      <section id="login">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    className="imgfix"
                    src={teacherloginimg}
                    alt="Login"
                    id="animateimg"
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
                    Sign <span>In</span>
                  </h1>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Faculty Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="facultyno"
                        value={facultyNum}
                        onChange={(e) => setFacultynum(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button className="btn" onClick={handleLogin}>
                      Login
                    </button>
                    {/* &nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn"
                      onClick={signInWithGoogle}
                    >
                      Login With Google
                    </button> */}
                  </div>
                  <br />
                  <p>
                    Forgot Password? Reset It
                    <NavLink
                      to="/ResetPassword"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: 'smooth',
                        })
                      }}
                    >
                      <span> Now.</span>
                    </NavLink>
                  </p>
                  <p>
                    New User? Register
                    <NavLink
                      to="/TeacherRegistration"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: 'smooth',
                        })
                      }}
                    >
                      <span> Now.</span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeacherLogin2
