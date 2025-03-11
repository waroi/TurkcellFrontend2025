import Router from "./routes/Router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router";
import "./App.css";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { useAuthStore } from "./store";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { userInfo, authenticatedUser, addAuthenticatedUser } = useAuthStore();
  const { email, password, yayinevi, adminName } = userInfo;
  const userRef = collection(db, "admins");

  useEffect(() => {
    console.log("authe user", authenticatedUser);
  }, [authenticatedUser]);

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
        navigate("/");
      } catch (error) {
        console.error("Firestore'a veri yazma hatası:", error);
      }
    }
  };

  const handleSubmit = async () => {
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
    <>
      <Router handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
