import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/AdminPanel";
import ApplicationForm from "../FormApplication/ApplicationForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationForm />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default AppRoutes;
