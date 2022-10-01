import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import BasicStudentSidebar from "./BasicStudentSidebar";

const BasicStudentUpdates = () => {
  useEffect(() => {
    document.title = "Your Updates | EduSys";
  }, []);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/Login");
  }, [user, loading]);
  return (
    <>
      <BasicStudentSidebar />
      <h1>Updates</h1>
    </>
  );
};

export default BasicStudentUpdates;
