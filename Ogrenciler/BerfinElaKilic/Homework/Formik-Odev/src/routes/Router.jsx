import { Navigate, useRoutes } from "react-router";
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import ProtectedUser from "../views/User";
import JobDetail from "../views/JobDetail";
import Login from "../views/Login";
import Register from "../views/Register";
import Auth from "../views/Auth";
import Jobs from "../views/Jobs";
import ProtectedUserDashboard from "../views/UserDashboardView";
import AllJobs from "../views/AllJobs";
import ApplicantsView from "../views/ApplicantsView";
import QuizView from "../views/QuizView";
import ExamManagement from "../views/Exams";
import AdminDashboard from "../views/AdminDashboard";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/", //TODO:Not protected
      element: <Auth />,
      children: [
        { index: true, element: <Navigate to="login" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/admin", //TODO:Protected for adminID
      element: <Admin />,
      children: [
        { index: true, element: <Navigate to=":adminId" /> },
        { path: `:adminId`, element: <AdminDashboard /> },
        // {
        //   path: `:jobId`, //TODO:Protected for adminID :route henüz aktif değil. iş ekleme ve düzenleme modülü olucak
        //   element: <JobDetail />,
        // },
        {
          path: `:adminId/exams`, //TODO:Protected for adminID
          element: <ExamManagement />,
        },
      ],
    },
    {
      path: `user`, //TODO:Protected for userId
      element: <ProtectedUser />,
      children: [
        { index: true, element: <Navigate to=":userId" /> },
        { path: `:userId`, element: <ProtectedUserDashboard /> },
        { path: `:userId/profile`, element: <UserProfile /> },
        // { path: `:userId/candidates/:candidateId`, element: <UserProfile /> },Gereksiz
      ], //TODO:display Not Protected,crud protected for userId
    },
    {
      path: "jobs", //TODO: Not Protected
      element: <Jobs />,
      children: [
        { path: `:id`, element: <JobDetail /> },
        { index: true, element: <Navigate to="all" /> },
        { path: `all`, element: <AllJobs /> },
        { path: `:jobId/candidates`, element: <ApplicantsView /> }, //TODO: admin altına çekilmesi daha uygun olabilir.
        { path: `:jobId/exam`, element: <QuizView /> }, //TODO: admin altına çekilmesi daha uygun olabilir.
      ],
    },
  ]);
  return routes;
};

export default Router;
