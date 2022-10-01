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
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRr9SWeI9oHMf8amnUWyx8lEvOmUKUaw1GW8ErXrlXsJ4rTSaeedJZaqXBTmLv43XFyCcf-GhTK9cMm/pub?embedded=true" className="basiciframe"></iframe>
    </>
  );
};

export default BasicStudentUpdates;
