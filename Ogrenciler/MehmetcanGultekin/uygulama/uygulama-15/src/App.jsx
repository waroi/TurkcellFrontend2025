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
    getUserInfo();
  }, []);
  useEffect(() => {
    console.log("authe user", authenticatedUser);
  }, [authenticatedUser]);

  console.log(userInfo);
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
        navigate("/app");
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

  const getUserInfo = async () => {
    try {
      const userSnap = await getDocs(userRef);

      if (!userSnap.empty && auth.currentUser) {
        userSnap.forEach((doc) => {
          const userID = doc.data().adminID;
          if (userID === auth.currentUser.uid) {
            console.log(
              "Kullanıcı eşleşti, yayin alanı from app:",
              doc.data().yayin
            );
            // setUserName(doc.data().adminName);
            // setYayin(doc.data().yayin);
            const user = {
              userId: userID,
              yayin: doc.data().yayin,
              adminName: doc.data().adminName,
              isAuthenticated: true,
            };
            console.log("user from app", user);
            addAuthenticatedUser(user);
          }
        });
      } else {
        console.log("Belge bulunamadı veya kullanıcı giriş yapmamış!");
      }
    } catch (error) {
      console.error("Belge alınırken hata oluştu:", error);
    }
  };

  return (
    <>
      <Router handleSignIn={handleSignIn} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
