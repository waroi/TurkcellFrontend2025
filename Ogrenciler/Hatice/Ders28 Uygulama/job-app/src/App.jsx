import "./App.css";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./context/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><GeneralForm /></ProtectedRoute>} />
          <Route path="/portal" element={<ProtectedRoute><PortalForm /></ProtectedRoute>} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </AuthProvider>
  );
}

export default App;
