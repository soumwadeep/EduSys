import "./App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
