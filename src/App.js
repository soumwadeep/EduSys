import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import ThankYou from "./components/pages/ThankYou";
import RegisterNow from "./components/pages/RegisterNow";
import ThanksForRegistering from "./components/pages/ThanksForRegistering";
// Basic Student All
import BasicStudent from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudent";
import BasicStudentUpdates from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentUpdates";
import BasicStudentStudyMaterials from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentStudyMaterials";
import BasicStudentClasses from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentClasses";
import BasicStudentAssignments from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentAssignments";
// Basic Teacher All
import BasicTeacher from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacher";
// Pro Student All
import ProStudent from "./components/pages/Dashboard/Pro/Pro Students Plan/ProStudent";
// Pro Teacher All
import ProTeacher from "./components/pages/Dashboard/Pro/Pro Teachers Plan/ProTeacher";
import ResetPassword from "./components/pages/ResetPassword";
import BasicStudentProfile from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentProfile";

function App() {
  const location = useLocation();
  // Basic Students Plan
  const isBasicStudentsRendering = location.pathname === "/BasicStudents";
  const isBasicStudentsUpdatesRendering =
    location.pathname === "/BasicStudents/Updates";
  const isBasicStudentsStudyMaterialsRendering =
    location.pathname === "/BasicStudents/StudyMaterials";
  const isBasicStudentsClassesRendering =
    location.pathname === "/BasicStudents/Classes";
  const isBasicStudentsAssignmentsRendering =
    location.pathname === "/BasicStudents/Assignments";
  const isBasicStudentsProfileRendering =
    location.pathname === "/BasicStudents/Profile";
  // Basic Teachers Plans
  const isBasicTeachersRendering = location.pathname === "/BasicTeachers";
  // Pro Students Plans
  const isProStudentsRendering = location.pathname === "/ProStudents";
  // Pro Teachers Plans
  const isProTeachersRendering = location.pathname === "/ProTeachers";
  return (
    <>
      <div className="container">
        {!isBasicStudentsRendering &&
          !isBasicStudentsUpdatesRendering &&
          !isBasicStudentsStudyMaterialsRendering &&
          !isBasicStudentsClassesRendering &&
          !isBasicStudentsAssignmentsRendering &&
          !isBasicStudentsProfileRendering &&
          !isBasicTeachersRendering &&
          !isProStudentsRendering &&
          !isProTeachersRendering && <NavBar />}
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Pricing" element={<Pricing />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/ThankYou" element={<ThankYou />} />
          <Route
            exact
            path="/ThanksForRegistering"
            element={<ThanksForRegistering />}
          />
          {/* Basic User's Login And Register */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<RegisterNow />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
          {/* Basic Students All */}
          <Route exact path="/BasicStudents" element={<BasicStudent />} />
          <Route
            exact
            path="/BasicStudents/Updates"
            element={<BasicStudentUpdates />}
          />
          <Route
            exact
            path="/BasicStudents/StudyMaterials"
            element={<BasicStudentStudyMaterials />}
          />
          <Route
            exact
            path="/BasicStudents/Classes"
            element={<BasicStudentClasses />}
          />
          <Route
            exact
            path="/BasicStudents/Assignments"
            element={<BasicStudentAssignments />}
          />

          <Route
            exact
            path="/BasicStudents/Profile"
            element={<BasicStudentProfile />}
          />

          {/* Pro Students All */}
          <Route exact path="/ProStudents" element={<ProStudent />} />
          <Route exact path="/BasicTeachers" element={<BasicTeacher />} />
          <Route exact path="/ProTeachers" element={<ProTeacher />} />
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
