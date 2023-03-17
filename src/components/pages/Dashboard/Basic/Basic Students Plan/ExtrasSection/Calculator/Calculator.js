import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../../../../firebase";
import { query, collection, where } from "firebase/firestore";
import swal from "sweetalert";
import BasicStudentSidebar from "../../BasicStudentSidebar";

const Calculator = () => {
  useEffect(() => {
    document.title = "Scientific Calculator | EduSys";
  }, []);
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
    <section id="Calculator">
      <BasicStudentSidebar />
      <h1>
        <span>Scientific </span>Calculator
      </h1>
      <p>
        Solve Your Math Problems With This Scientific Calculator. It Is A Simple
        And Easy To Use Calculator.
      </p>
      <iframe
        src="https://soumwadeep.github.io/EduSys/ScientificCalculator/"
        className="calciframe"
      ></iframe>
    </section>
  );
};

export default Calculator;
