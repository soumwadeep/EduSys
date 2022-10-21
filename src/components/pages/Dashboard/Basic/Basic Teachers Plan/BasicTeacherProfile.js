import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicTeacherSidebar from "./BasicTeacherSidebar";
import BasicDashboardProfile from "../../../../../img/BasicDashboardProfile.svg";
import swal from "sweetalert";

const BasicTeacherProfile = () => {
  useEffect(() => {
    document.title = "Your Profile | EduSys";
  }, []);

  const [teacher, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [facultynum, setFacultynum] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Teachers"),
        where("uid", "==", teacher?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setDept(data.dept);
      setPosition(data.position);
      setFacultynum(data.facultynum);
      setEmail(data.email);

    } catch (err) {
      logout();
      swal("Error!", "We Got An Error Fetching Your Data.Please Login Again!", "error");
      return navigate("/TeacherLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!teacher) return navigate("/TeacherLogin");

    fetchUserName();
  }, [teacher, loading]);

  return (
    <>
      <section id="basicuserprofile">
        <BasicTeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Your
                      <span> Profile</span>
                    </h1>
                    <h4>Plan:<span> Basic Plan</span></h4>
                    <h4>
                      Name:<span> {name}</span>
                    </h4>
                    <h4>
                      Department:<span> {dept}</span>
                    </h4>
                    <h4>
                      Position:<span> {position}</span>
                    </h4>
                    <h4>
                      Faculty No.:<span> {facultynum}</span>
                    </h4>
                    <h4>
                      Email:<span> {email}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <img
                      src={BasicDashboardProfile}
                      alt="BasicDashboardProfile"
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

export default BasicTeacherProfile;
