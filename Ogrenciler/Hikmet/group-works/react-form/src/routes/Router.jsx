import { Route, Routes } from "react-router";

import AdminView from "../views/AdminView";
import ApplyView from "../views/ApplyView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import Quiz from "../components/test/Quiz";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/apply-job/:jobId" element={<ApplyView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/profile" element={<Quiz />} />
    </Routes>
  );
};

export default Router;
