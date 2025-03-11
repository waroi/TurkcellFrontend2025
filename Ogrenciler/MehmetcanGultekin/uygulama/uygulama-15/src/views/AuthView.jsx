import {
  createUserWithEmailAndPassword,
  SignInMethod,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router";
import "../App.css";
import { doc, setDoc } from "firebase/firestore";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import { Outlet } from "react-router";
import { useAuthStore } from "../store";

const AuthView = () => {
  return (
    <div className=" loginscreen w-100 d-flex align-items-center justify-content-center vh-100">
      <Outlet />
      {/* <SignUpForm handleSubmit={handleSubmit} /> */}
      {/* {<LoginForm handleSignIn={handleSignIn} />} */}
    </div>
  );
};
export default AuthView;
