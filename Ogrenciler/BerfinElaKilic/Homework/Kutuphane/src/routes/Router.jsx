import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register />},
  ]);
  return routes;
};

export default Router;
