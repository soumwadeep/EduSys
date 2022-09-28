import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import BasicDashboard1 from "../../../../../img/BasicDashboard1.svg";
import BasicStudentSidebar from "./BasicStudentSidebar";
const BasicStudent = () => {
  useEffect(() => {
    document.title = `Welcome ${name} | EduSys`;
  }, []);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/Login");

    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <section id="basicstudent">
        <BasicStudentSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <h1>
                      Welcome To Our DashBoard
                      <span> {name}</span>
                    </h1>
                    <p>
                      Your Email Id Is:<span> {user?.email}</span>
                    </p>
                    <p>
                      We Are Currently Working On It.So Please Wait For Some
                      Time.We Will Update You Via Email After We Finish Setting
                      Up Your Dashboard!
                    </p>
                    <button className="btn" onClick={() => logout()}>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="outer">
                <div className="middle">
                  <div className="inner" id="mobviewtextfix">
                    <img
                      src={BasicDashboard1}
                      alt="BasicDashboard1"
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

export default BasicStudent;
