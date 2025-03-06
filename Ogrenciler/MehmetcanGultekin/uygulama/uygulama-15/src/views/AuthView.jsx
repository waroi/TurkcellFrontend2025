import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router";

const AuthView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setEmail("");
    setPassword("");
    navigate("/app");
  };

  const handleSignUp = async () => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setEmail("");
    setPassword("");
    navigate("/app");
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
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthView;
