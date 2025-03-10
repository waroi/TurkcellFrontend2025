import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import AuthView from "../views/AuthView";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

import {
  createUserWithEmailAndPassword,
  SignInMethod,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router";
import "../App.css";
import { doc, setDoc } from "firebase/firestore";
import { Outlet } from "react-router";
import { useAuthStore } from "../store";

const Router = ({ handleSignIn, handleSubmit }) => {
  const navigate = useNavigate();

  const routes = useRoutes([
    {
      path: "/",
      element: <AuthView />,
      children: [
        { index: true, element: <Navigate to="/login" /> },
        { path: "/login", element: <LoginForm handleSignIn={handleSignIn} /> },
        {
          path: "/signup",
          element: <SignUpForm handleSubmit={handleSubmit} />,
        },
      ],
    },

    { path: "/app", element: <HomeView /> },
  ]);
  return routes;
};

export default Router;
