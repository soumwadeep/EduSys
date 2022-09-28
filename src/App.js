import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import BasicStudent from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudent";
import BasicStudentSidebar from "./components/pages/Dashboard/Basic/Basic Students Plan/BasicStudentSidebar";
import BasicTeacher from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacher";
import BasicTeacherSidebar from "./components/pages/Dashboard/Basic/Basic Teachers Plan/BasicTeacherSidebar";
import ProStudent from "./components/pages/Dashboard/Pro/Pro Students Plan/ProStudent";
import ProStudentSidebar from "./components/pages/Dashboard/Pro/Pro Students Plan/ProStudentSidebar";
import ProTeacher from "./components/pages/Dashboard/Pro/Pro Teachers Plan/ProTeacher";
import ProTeacherSidebar from "./components/pages/Dashboard/Pro/Pro Teachers Plan/ProTeacherSidebar";
function App() {
  return (
    <>
      <div className="container">
        <NavBar />
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
          <Route exact path="/Register" element={<RegisterNow />} />
          <Route exact path="/BasicStudents" element={<BasicStudent />} />
          <Route
            exact
            path="/BasicStudentSidebar"
            element={<BasicStudentSidebar />}
          />
          <Route exact path="/ProStudents" element={<ProStudent />} />
          <Route
            exact
            path="/ProStudentSidebar"
            element={<ProStudentSidebar />}
          />
          <Route exact path="/BasicTeachers" element={<BasicTeacher />} />
          <Route
            exact
            path="/BasicTeacherSidebar"
            element={<BasicTeacherSidebar />}
          />
          <Route exact path="/ProTeachers" element={<ProTeacher />} />
          <Route
            exact
            path="/ProTeacherSidebar"
            element={<ProTeacherSidebar />}
          />
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
