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
// Basic Student All
import BasicStudent from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudent";
import BasicStudentProfile from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentProfile";
import BasicStudentUpdates from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentUpdates";
import BasicStudentStudyMaterials from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentStudyMaterials";
import BasicStudentVirtualLabs from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentVirtualLabs";
import BasicStudentClasses from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentClasses";
import BasicStudentAssignments from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentAssignments";
import BasicStudentClearDoubts from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentClearDoubts";
import BasicStudentQuiz from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentQuiz";
import BasicStudentExtras from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentExtras";
import BasicStudentCalculator from "./components/pages/Dashboard/Basic/Basic Students Plan/ExtrasSection/Calculator/Calculator";
import BasicStudentTodo from "./components/pages/Dashboard/Basic/Basic Students Plan/ExtrasSection/Todo/Todo";
import BasicStudentTakeNotes from "./components/pages/Dashboard/Basic/Basic Students Plan/ExtrasSection/TakeNotes/TakeNotes";
// Basic Teacher All
import BasicTeacher from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacher";
import BasicTeacherUpdates from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherUpdates";
import BasicTeacherClasses from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherClasses";
import BasicTeacherStudyMaterials from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherStudyMaterials";
import BasicTeacherVirtualLabs from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherVirtualLabs";
import BasicTeacherAssignments from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherAssignments";
import BasicTeacherProfile from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherProfile";
import BasicTeacherExtras from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherExtras";
import BasicTeacherCalculator from "./components/pages/Dashboard/Basic/Basic Teachers Plan/ExtrasSection/Calculator/Calculator";
import BasicTeacherTodo from "./components/pages/Dashboard/Basic/Basic Teachers Plan/ExtrasSection/Todo/Todo";
import BasicTeacherTakeNotes from "./components/pages/Dashboard/Basic/Basic Teachers Plan/ExtrasSection/TakeNotes/TakeNotes";
// Pro Student All
import ProStudent from "./components/pages/Dashboard/Pro/Pro Students Plan/ProStudent";
// Pro Teacher All
import ProTeacher from "./components/pages/Dashboard/Pro/Pro Teachers Plan/ProTeacher";
// All Common Pages
import ResetPassword from "./components/pages/ResetPassword";
import DashboardFooter from "./components/pages/Dashboard/DashboardFooter";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Error from "./components/pages/Error";
// import Note from "./components/pages/Dashboard/Basic/Basic Students Plan/ExtrasSection/TakeNotes/Note";

function App() {
  const location = useLocation();
  //Main Files
  const isHomeRendering = location.pathname === "/Home";
  const isAboutRendering = location.pathname === "/About";
  const isFeaturesRendering = location.pathname === "/Features";
  const isPricingRendering = location.pathname === "/Pricing";
  const isLoginRendering = location.pathname === "/Login";
  // Sub Files
  const isThankYouRendering = location.pathname === "/ThankYou";
  const isResetPasswordRendering = location.pathname === "/ResetPassword";
  const isPrivacyPolicyRendering = location.pathname === "/PrivacyPolicy";
  const isErrorRendering = location.pathname === "/404";

  // Basic Students Plan
  const isBasicStudentsRendering = location.pathname === "/BasicStudent";
  const isBasicStudentsUpdatesRendering =
    location.pathname === "/BasicStudent/Updates";
  const isBasicStudentsStudyMaterialsRendering =
    location.pathname === "/BasicStudent/StudyMaterials";
  const isBasicStudentsVirtualLabsRendering =
    location.pathname === "/BasicStudent/VirtualLabs";
  const isBasicStudentsClassesRendering =
    location.pathname === "/BasicStudent/Classes";
  const isBasicStudentsAssignmentsRendering =
    location.pathname === "/BasicStudent/Assignments";
  const isBasicStudentsProfileRendering =
    location.pathname === "/BasicStudent/Profile";
  const isBasicStudentsClearDoubtsRendering =
    location.pathname === "/BasicStudent/ClearDoubts";
  const isBasicStudentsQuizRendering =
    location.pathname === "/BasicStudent/PlayQuiz";
  const isBasicStudentsExtrasRendering =
    location.pathname === "/BasicStudent/Extras";
  // Basic Students Plan Extras
  const isBasicStudentsCalculatorRendering =
    location.pathname === "/BasicStudent/Extras/Calculator";
  const isBasicStudentsTodoRendering =
    location.pathname === "/BasicStudent/Extras/Todo";
  const isBasicStudentsTakeNotesRendering =
    location.pathname === "/BasicStudent/Extras/TakeNotes";
  // Basic Teachers Plans
  const isBasicTeachersRendering = location.pathname === "/BasicTeacher";
  const isBasicTeachersUpdatesRendering =
    location.pathname === "/BasicTeacher/Updates";
  const isBasicTeachersClassesRendering =
    location.pathname === "/BasicTeacher/Classes";
  const isBasicTeachersStudyMaterialsRendering =
    location.pathname === "/BasicTeacher/StudyMaterials";
  const isBasicTeachersVirtualLabsRendering =
    location.pathname === "/BasicTeacher/VirtualLabs";
  const isBasicTeachersAssignmentsRendering =
    location.pathname === "/BasicTeacher/Assignments";
  const isBasicTeachersProfileRendering =
    location.pathname === "/BasicTeacher/Profile";
  // Basic Teachers Plan Extras
  const isBasicTeachersExtrasRendering =
    location.pathname === "/BasicTeacher/Extras";
  const isBasicTeachersCalculatorRendering =
    location.pathname === "/BasicTeacher/Extras/Calculator";
  const isBasicTeachersTodoRendering =
    location.pathname === "/BasicTeacher/Extras/Todo";
  const isBasicTeachersTakeNotesRendering =
    location.pathname === "/BasicTeacher/Extras/TakeNotes";

  // Pro Students Plans
  const isProStudentsRendering = location.pathname === "/ProStudent";
  // Pro Teachers Plans
  const isProTeachersRendering = location.pathname === "/ProTeacher";
  //Login Part
  const isStudentLoginRendering = location.pathname === "/StudentLogin";
  const isTeacherLoginRendering = location.pathname === "/TeacherLogin";
  //Contact
  const isContactRendering = location.pathname === "/Contact";
  //Registration Part
  const isStudentRegistrationRendering =
    location.pathname === "/StudentRegistration";
  const isTeacherRegistrationRendering =
    location.pathname === "/TeacherRegistration";

  return (
    <>
      {!isBasicStudentsRendering &&
        !isBasicStudentsUpdatesRendering &&
        !isBasicStudentsStudyMaterialsRendering &&
        !isBasicStudentsVirtualLabsRendering &&
        !isBasicStudentsClassesRendering &&
        !isBasicStudentsAssignmentsRendering &&
        !isBasicStudentsProfileRendering &&
        !isBasicStudentsClearDoubtsRendering &&
        !isBasicStudentsQuizRendering &&
        !isBasicStudentsExtrasRendering &&
        !isBasicStudentsCalculatorRendering &&
        !isBasicStudentsTodoRendering &&
        !isBasicStudentsTakeNotesRendering &&
        !isBasicTeachersRendering &&
        !isBasicTeachersUpdatesRendering &&
        !isBasicTeachersClassesRendering &&
        !isBasicTeachersStudyMaterialsRendering &&
        !isBasicTeachersVirtualLabsRendering &&
        !isBasicTeachersAssignmentsRendering &&
        !isBasicTeachersProfileRendering &&
        !isBasicTeachersExtrasRendering &&
        !isBasicTeachersCalculatorRendering &&
        !isBasicTeachersTodoRendering &&
        !isBasicTeachersTakeNotesRendering &&
        !isProStudentsRendering &&
        !isProTeachersRendering && <NavBar />}
      <div className="container">
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Pricing" element={<Pricing />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/ThankYou" element={<ThankYou />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/404" element={<Error />} />
          <Route exact path="/Login" element={<Login />} />
          {/* Basic Student's Login And Register */}
          <Route exact path="/StudentLogin" element={<StudentLogin />} />
          <Route
            exact
            path="/StudentRegistration"
            element={<StudentRegistration />}
          />
          {/* Basic Teacher's Login And Register */}
          <Route exact path="/TeacherLogin" element={<TeacherLogin />} />
          <Route
            exact
            path="/TeacherRegistration"
            element={<TeacherRegistration />}
          />
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
            path="/BasicStudent/VirtualLabs"
            element={<BasicStudentVirtualLabs />}
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
          <Route
            exact
            path="/BasicStudent/Extras"
            element={<BasicStudentExtras />}
          />
          <Route
            exact
            path="/BasicStudent/Extras/Todo"
            element={<BasicStudentTodo />}
          />
          <Route
            exact
            path="/BasicStudent/Extras/Calculator"
            element={<BasicStudentCalculator />}
          />
          <Route
            exact
            path="/BasicStudent/Extras/TakeNotes"
            element={<BasicStudentTakeNotes />}
          />
          {/* <Route
            exact
            path="/BasicStudent/Extras/Notes"
            element={<Note />}
          /> */}
          <Route
            exact
            path="/BasicStudent/ClearDoubts"
            element={<BasicStudentClearDoubts />}
          />
          <Route
            exact
            path="/BasicStudent/PlayQuiz"
            element={<BasicStudentQuiz />}
          />
          {/* Basic Teachers All */}
          <Route exact path="/BasicTeacher" element={<BasicTeacher />} />
          <Route
            exact
            path="/BasicTeacher/Updates"
            element={<BasicTeacherUpdates />}
          />
          <Route
            exact
            path="/BasicTeacher/Classes"
            element={<BasicTeacherClasses />}
          />
          <Route
            exact
            path="/BasicTeacher/StudyMaterials"
            element={<BasicTeacherStudyMaterials />}
          />
          <Route
            exact
            path="/BasicTeacher/VirtualLabs"
            element={<BasicTeacherVirtualLabs />}
          />
          <Route
            exact
            path="/BasicTeacher/Assignments"
            element={<BasicTeacherAssignments />}
          />
          <Route
            exact
            path="/BasicTeacher/Profile"
            element={<BasicTeacherProfile />}
          />
          <Route
            exact
            path="/BasicTeacher/Extras"
            element={<BasicTeacherExtras />}
          />
          <Route
            exact
            path="/BasicTeacher/Extras/Calculator"
            element={<BasicTeacherCalculator />}
          />
          <Route
            exact
            path="/BasicTeacher/Extras/Todo"
            element={<BasicTeacherTodo />}
          />
          <Route
            exact
            path="/BasicTeacher/Extras/TakeNotes"
            element={<BasicTeacherTakeNotes />}
          />
          {/* Pro Users All */}
          <Route exact path="/ProStudent" element={<ProStudent />} />
          <Route exact path="/ProTeacher" element={<ProTeacher />} />
          <Route exact path="/" element={<Navigate to="/Home" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      {!isBasicStudentsRendering &&
        !isBasicStudentsUpdatesRendering &&
        !isBasicStudentsStudyMaterialsRendering &&
        !isBasicStudentsVirtualLabsRendering &&
        !isBasicStudentsClassesRendering &&
        !isBasicStudentsAssignmentsRendering &&
        !isBasicStudentsProfileRendering &&
        !isBasicStudentsClearDoubtsRendering &&
        !isBasicStudentsQuizRendering &&
        !isBasicStudentsExtrasRendering &&
        !isBasicStudentsCalculatorRendering &&
        !isBasicStudentsTodoRendering &&
        !isBasicStudentsTakeNotesRendering &&
        !isBasicTeachersRendering &&
        !isBasicTeachersUpdatesRendering &&
        !isBasicTeachersClassesRendering &&
        !isBasicTeachersStudyMaterialsRendering &&
        !isBasicTeachersVirtualLabsRendering &&
        !isBasicTeachersAssignmentsRendering &&
        !isBasicTeachersProfileRendering &&
        !isBasicTeachersExtrasRendering &&
        !isBasicTeachersCalculatorRendering &&
        !isBasicTeachersTodoRendering &&
        !isBasicTeachersTakeNotesRendering &&
        !isProStudentsRendering &&
        !isProTeachersRendering && <Footer />}

      {!isHomeRendering &&
        !isAboutRendering &&
        !isFeaturesRendering &&
        !isPricingRendering &&
        !isLoginRendering &&
        !isThankYouRendering &&
        !isStudentLoginRendering &&
        !isTeacherLoginRendering &&
        !isStudentRegistrationRendering &&
        !isTeacherRegistrationRendering &&
        !isContactRendering &&
        !isResetPasswordRendering &&
        !isPrivacyPolicyRendering &&
        !isErrorRendering && <DashboardFooter />}
    </>
  );
}
export default App;
