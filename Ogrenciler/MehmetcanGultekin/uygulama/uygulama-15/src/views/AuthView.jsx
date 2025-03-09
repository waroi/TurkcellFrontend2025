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

const AuthView = () => {
  const navigate = useNavigate();

  const handleSignIn = async (password, email) => {
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

  const handleSignUp = async (password, email, adminName, yayinevi) => {
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

  const handleSubmit = async (password, email, adminName, yayinevi) => {
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

  return (
    <div className=" loginscreen w-100 d-flex align-items-center justify-content-center vh-100">
      <Outlet />
      {/* <SignUpForm handleSubmit={handleSubmit} /> */}
      {/* {<LoginForm handleSignIn={handleSignIn} />} */}
    </div>
  );
};
export default AuthView;
