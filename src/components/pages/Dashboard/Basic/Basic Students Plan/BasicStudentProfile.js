import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicStudentSidebar from "./BasicStudentSidebar";
import BasicDashboardProfile from "../../../../../img/BasicDashboardProfile.svg";
import swal from "sweetalert";

const BasicStudentProfile = () => {
  useEffect(() => {
    document.title = "Your Profile | EduSys";
  }, []);

  const [student, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [sec, setSec] = useState("");
  const [rollno, setRollno] = useState("");
  const [sem, setSem] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setDept(data.dept);
      setEmail(data.email);
      setSec(data.sec);
      setRollno(data.rollno);
      setSem(data.sem);
    } catch (err) {
      logout();
      swal("Error!", "We Got An Error Fetching Your Data.Please Login Again!", "error");
      return navigate("/StudentLogin");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");

    fetchUserName();
  }, [student, loading]);

  return (
    <>
      <section id="basicuserprofile">
        <BasicStudentSidebar />
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
                      Section:<span> {sec}</span>
                    </h4>
                    <h4>
                      Roll No.:<span> {rollno}</span>
                    </h4>
                    <h4>
                      Semester:<span> {sem}</span>
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

export default BasicStudentProfile;
