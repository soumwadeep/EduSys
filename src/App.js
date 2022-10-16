import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Login from "./components/pages/Login";
import StudentLogin from "./components/pages/StudentLogin";
import TeacherLogin from "./components/pages/TeacherLogin";
import Contact from "./components/pages/Contact";
import ThankYou from "./components/pages/ThankYou";
import StudentRegistration from "./components/pages/StudentRegistration";
import TeacherRegistration from "./components/pages/TeacherRegistration";
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
  const isBasicStudentsRendering = location.pathname === "/BasicStudent";
  const isBasicStudentsUpdatesRendering =
    location.pathname === "/BasicStudent/Updates";
  const isBasicStudentsStudyMaterialsRendering =
    location.pathname === "/BasicStudent/StudyMaterials";
  const isBasicStudentsClassesRendering =
    location.pathname === "/BasicStudent/Classes";
  const isBasicStudentsAssignmentsRendering =
    location.pathname === "/BasicStudent/Assignments";
  const isBasicStudentsProfileRendering =
    location.pathname === "/BasicStudent/Profile";
  // Basic Teachers Plans
  const isBasicTeachersRendering = location.pathname === "/BasicTeacher";
  // Pro Students Plans
  const isProStudentsRendering = location.pathname === "/ProStudent";
  // Pro Teachers Plans
  const isProTeachersRendering = location.pathname === "/ProTeacher";
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
          <Route exact path="/Login" element={<Login />} />
          {/* Basic Student's Login And Register */}
          <Route exact path="/StudentLogin" element={<StudentLogin />} />
          <Route exact path="/StudentRegistration" element={<StudentRegistration />} />
          {/* Basic Teacher's Login And Register */}
          <Route exact path="/TeacherLogin" element={<TeacherLogin />} />
          <Route exact path="/TeacherRegistration" element={<TeacherRegistration />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
          {/* Basic Students All */}
          <Route exact path="/BasicStudent" element={<BasicStudent />} />
          <Route
            exact
            path="/BasicStudent/Updates"
            element={<BasicStudentUpdates />}
          />
          <Route
            exact
            path="/BasicStudent/StudyMaterials"
            element={<BasicStudentStudyMaterials />}
          />
          <Route
            exact
            path="/BasicStudent/Classes"
            element={<BasicStudentClasses />}
          />
          <Route
            exact
            path="/BasicStudent/Assignments"
            element={<BasicStudentAssignments />}
          />

          <Route
            exact
            path="/BasicStudent/Profile"
            element={<BasicStudentProfile />}
          />

          {/* Pro Students All */}
          <Route exact path="/ProStudent" element={<ProStudent />} />
          <Route exact path="/BasicTeacher" element={<BasicTeacher />} />
          <Route exact path="/ProTeacher" element={<ProTeacher />} />
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
