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

const Router = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  const { email, password, yayinevi, adminName } = userInfo;
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("response", userCredential);

      navigate("/app");
    } catch (signinError) {
      if (signinError.code === "auth/user-not-found") {
        console.error(signinError);
        navigate("/signUp");
      }
    }
  };

  const handleSignUp = async () => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      try {
        await setDoc(doc(db, "admins", user.uid), {
          adminID: user.uid,
          adminName: adminName,
          yayin: yayinevi,
        });
        setEmail("");
        setPassword("");
        setAdminName("");
        setYayinevi("");
        navigate("/app");
      } catch (error) {
        console.error("Firestore'a veri yazma hatası:", error);
      }
    }
  };

  const handleSubmit = async () => {
    console.log(password, email, adminName, yayinevi);
    try {
      await handleSignUp(password, email, adminName, yayinevi);
      console.log("✅ Kayıt başarılı!");
    } catch (signupError) {
      console.error("❌ Kayıt başarısız:", signupError.message);
      if (signupError.code === "auth/email-already-in-use") {
        console.log("📌 Giriş deneniyor:", email);
        await handleSignIn(password, email);
        console.log("✅ Giriş başarılı!");
      }
    }
  };
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
