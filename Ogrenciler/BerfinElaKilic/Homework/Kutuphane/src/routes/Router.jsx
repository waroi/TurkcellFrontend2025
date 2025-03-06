import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PublisherView from "../views/PublisherView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/publisher/:id", element: <PublisherView /> },
  ]);
  return routes;
};

export default Router;
