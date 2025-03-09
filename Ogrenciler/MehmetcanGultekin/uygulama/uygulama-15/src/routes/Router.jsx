import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import AuthView from "../views/AuthView";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AuthView />,
      children: [
        { index: true, element: <Navigate to="/login" /> },
        { path: "/login", element: <LoginForm /> },
        { path: "/signup", element: <SignUpForm /> },
      ],
    },

    { path: "/app", element: <HomeView /> },
  ]);
  return routes;
};

export default Router;
