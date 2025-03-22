import { Navigate, useRoutes } from "react-router";
import AdayFormu from "../components/organisms/AdayFormu";
import UserProfile from "../views/UserProfile";
import Applicants from "../views/Applicants";
import Admin from "../views/Admin";
import User from "../views/User";
import JobDetail from "../views/JobDetail";
import Login from "../views/Login";
import Register from "../views/Register";
import Auth from "../views/Auth";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        { index: true, element: <Navigate to="login" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: ":adminId", //TODO:Protected for adminID
      element: <Admin />,
      children: [
        {
          path: `:jobId`, //TODO:Protected for adminID
          element: <JobDetail />,
          children: [{ path: `applicants`, element: <UserProfile /> }],
        },
      ],
    },
    {
      path: `/:userId`, //TODO:Protected for userId
      element: <User />,
      children: [{ path: `profile`, element: <UserProfile /> }], //TODO:display Not Protected,crud protected for userId
    },
    {
      path: `/:jobId`, //TODO: Not Protected
      element: <JobDetail />,
    },
  ]);
  return routes;
};

export default Router;
