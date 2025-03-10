import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router";
import "../App.css";
import { useAuthStore } from "../store";
import { auth, db } from "../../firebase-config";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [yayinevi, setYayinevi] = useState("");
  const { addUserInfo, userInfo, authenticatedUser, addAuthenticatedUser } =
    useAuthStore();
  const navigate = useNavigate();
  const userRef = collection(db, "admins");

  useEffect(() => {
    console.log(authenticatedUser);
    if (authenticatedUser.isAuthenticated) {
      navigate("/app");
    }
  }, [authenticatedUser]);

  const handleStates = (e) => {
    e.preventDefault();
    handleSignIn();
    // const userInfo = { email, password, yayinevi, adminName };
    // addUserInfo(userInfo);
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
          navigate("/app");
        });
      } else {
        console.log("Belge bulunamadı veya kullanıcı giriş yapmamış!");
      }
    } catch (error) {
      console.error("Belge alınırken hata oluştu:", error);
    }
  };

  const handleSignIn = async () => {
    console.log(auth, email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Firebase kullanıcısı
      console.log("credential", userCredential, user.uid);

      getUserInfo();

      // navigate("/app");
    } catch (signinError) {
      if (signinError.code === "auth/user-not-found") {
        console.error(signinError);
        navigate("/signUp");
      }
    }
  };

  return (
    <div className="flex-column w-50 p-5 bg-brown text-white rounded-5">
      <h2 className="mb-5 text-center">Giriş Yap </h2>
      <Form onSubmit={handleStates}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            className="rounded-pill py-2"
            placeholder="Email giriniz."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control
            type="password"
            className="rounded-pill py-2 mb-3"
            placeholder="Şifre giriniz."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="light" className="rounded-pill" type="submit">
          Submit
        </Button>
      </Form>
      <span>
        Hesabınız yok mu? <NavLink to="/signup">Hemen oluşturun.</NavLink>
      </span>
    </div>
  );
};
export default LoginForm;
