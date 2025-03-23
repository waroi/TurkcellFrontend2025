import { useRoutes, Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Position from "../pages/Position";
import UploadJobForm from "../pages/UploadJobForm";
import PositionDetail from "../pages/PositionDetail";
import WorkForm from "../components/WorkForm";
import Applications from "../pages/Applications";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/position", element: <Position /> },
    { path: "/position/:id", element: <PositionDetail /> },
    { path: "/uploadjobform", element: <UploadJobForm /> },
    { path: "/workform", element: <WorkForm /> },
    { path: "/applications", element: <Applications /> },





  ]);
  return routes;
};

export default Router;
