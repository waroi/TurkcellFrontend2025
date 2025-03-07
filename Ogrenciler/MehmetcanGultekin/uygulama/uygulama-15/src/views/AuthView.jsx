import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router";
import "../App.css";
import { doc, setDoc } from "firebase/firestore";
const AuthView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [yayinevi, setYayinevi] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setEmail("");
    setPassword("");
    setAdminName("");
    setYayinevi("");
    navigate("/app");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignUp();
      console.log("✅ Kayıt başarılı!");
    } catch (signupError) {
      console.error("❌ Kayıt başarısız:", signupError.message);
      if (signupError.code === "auth/email-already-in-use") {
        console.log("📌 Giriş deneniyor:", email);
        await handleSignIn();
        console.log("✅ Giriş başarılı!");
      }
    }
  };
  return (
    <div className=" loginscreen w-100 d-flex align-items-center justify-content-center vh-100">
      <div className="container flex-column w-25 p-5 bg-brown text-white rounded-5">
        <h2 className="mb-5 text-center">Giriş Yap / Kayıt Ol</h2>
        <Form onSubmit={handleSubmit}>
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
          <Form.Group className="mb-3" controlId="formAdminName">
            <Form.Label>Admin Adı</Form.Label>
            <Form.Control
              type="text"
              className="rounded-pill py-2 mb-3"
              placeholder="Admin adınızı giriniz."
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formYayinevi">
            <Form.Label>Yayınevi</Form.Label>
            <Form.Control
              type="text"
              className="rounded-pill py-2 mb-5"
              placeholder="Yayınevi giriniz."
              value={yayinevi}
              onChange={(e) => setYayinevi(e.target.value)}
            />
          </Form.Group>
          <Button variant="light" className="rounded-pill" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default AuthView;