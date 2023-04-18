import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../firebase";
import { query, collection, where } from "firebase/firestore";
import swal from "sweetalert";
import DoubtClearing from "../../DoubtClearing";
import BasicStudentSidebar from "./BasicStudentSidebar";
import { Helmet } from "react-helmet";

const BasicStudentClearDoubts = () => {
  // useEffect(() => {
  //   document.title = 'Your Doubt Clearing Section | EduSys'
  // }, [])
  const [student, loading, err] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "Students"),
        where("uid", "==", student?.uid)
      );
      // const doc = await getDocs(q);
      // const data = doc.docs[0].data();
    } catch (err) {
      logout();
      swal(
        "Error!",
        "We Got An Error Fetching Your Data.Please Login Again!",
        "error"
      );
      return navigate("/StudentLogin");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!student) return navigate("/StudentLogin");
    fetchUserName();
  }, [student, loading]);
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Welcome To EduSys's 24*7 Doubt Clearing Section!"
        />
        <meta
          name="keywords"
          content="EduSys,Byjus,Aakash,Allen,Smart Class,Recorder Videos,Notes,Books,Cheap,Free,Online,Offline,India,Best education system,education system,education,edusys,edusys india,edusys,Best e-Learning Platform,edusys e-learning,edusys e-learning system,edusys e-learning system in,24*7 Live Doubt Clearing Section Edusys,24*7 Live Doubt Clearing Section,24*7 Live Doubt Clearing Section Of EduSys,24*7 Live Doubt Clearing Section Of EduSys,24*7 Live Doubt Clearing Portal Of EduSys,24*7 Live Doubt Clearing Portal"
        />
        <title>Your 24*7 Doubt Clearing Section | EduSys</title>
      </Helmet>
      <BasicStudentSidebar />
      <DoubtClearing />
    </div>
  );
};

export default BasicStudentClearDoubts;
