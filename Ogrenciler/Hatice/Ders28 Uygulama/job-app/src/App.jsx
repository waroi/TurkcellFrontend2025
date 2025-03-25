import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GeneralForm from "./components/GeneralForm";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { db } from "./firebase/firebaseConfig";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Applications from "./views/Applications";
import Congrats from "./views/Congrats";
import MyApplications from "./views/MyApplications";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<GeneralForm />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
