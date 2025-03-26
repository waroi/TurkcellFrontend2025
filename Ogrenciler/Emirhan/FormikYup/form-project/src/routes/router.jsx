import { useRoutes, Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Position from "../pages/Position";
import UploadJobForm from "../pages/UploadJobForm";
import PositionDetail from "../pages/PositionDetail";
import WorkForm from "../components/WorkForm";
import Applications from "../pages/Applications";
import OnlineTest from "../pages/OnlineTest";
import QuestionType from "../pages/QuestionType";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const status = localStorage.getItem("status");

  if (!status) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(status)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/position", element: <Position /> },
    { path: "/position/:id", element: <PositionDetail /> },
    {
      path: "/uploadjobform",
      element: (
        <ProtectedRoute element={<UploadJobForm />} allowedRoles={["admin"]} />
      ),
    },
    {
      path: "/workform",
      element: (
        <ProtectedRoute
          element={<WorkForm />}
          allowedRoles={["user", "admin"]}
        />
      ),
    },
    {
      path: "/applications",
      element: (
        <ProtectedRoute element={<Applications />} allowedRoles={["admin"]} />
      ),
    },
    { path: "/online-test/:id", element: <OnlineTest /> },
    { path: "/question-type-select/:id", element: <QuestionType /> }
  ]);

  return routes;
};

export default Router;
