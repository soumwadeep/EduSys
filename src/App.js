import "./App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import ThankYou from "./components/pages/ThankYou";
function App() {
  return (
    <>
    <div className="container">
      <NavBar/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Features" element={<Features/>} />
        <Route exact path="/Pricing" element={<Pricing/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/ThankYou" element={<ThankYou/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}
export default App;
