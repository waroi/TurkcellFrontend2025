import { Navigate, useRoutes } from "react-router";
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import User from "../views/User";
import JobDetail from "../views/JobDetail";
import Login from "../views/Login";
import Register from "../views/Register";
import Auth from "../views/Auth";
import Jobs from "../views/Jobs";

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
      path: "/admin/:adminId", //TODO:Protected for adminID
      element: <Admin />,
      children: [
        {
          path: `:jobId`, //TODO:Protected for adminID
          element: <JobDetail />,
        },
      ],
    },
    {
      path: `user/:userId`, //TODO:Protected for userId
      element: <User />,
      children: [{ path: `profile`, element: <UserProfile /> }], //TODO:display Not Protected,crud protected for userId
    },
    {
      path: "jobs", //TODO: Not Protected
      element: <Jobs />,
      children: [{ path: `:id`, element: <JobDetail /> }],
    },
  ]);
  return routes;
};

export default Router;
