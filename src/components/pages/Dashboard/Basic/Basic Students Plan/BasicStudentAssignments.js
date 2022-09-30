import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import BasicStudentSidebar from "./BasicStudentSidebar";

const BasicStudentAssignments = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/Login");
  }, [user, loading]);
  return (
    <>
      <BasicStudentSidebar />
      <h1>Assignments</h1>
    </>
  );
};

export default BasicStudentAssignments;
