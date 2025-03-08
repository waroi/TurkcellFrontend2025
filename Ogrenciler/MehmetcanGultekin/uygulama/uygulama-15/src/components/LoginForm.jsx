import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router";
import "../App.css";
import { useAuthStore } from "../store";

const LoginForm = ({ handleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [yayinevi, setYayinevi] = useState("");
  const { addUserInfo, userInfo } = useAuthStore();

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.password !== "") {
      handleSignIn();
    }
  }, [userInfo]);

  const handleStates = (e) => {
    e.preventDefault();
    const userInfo = { email, password, yayinevi, adminName };
    addUserInfo(userInfo);
  };

  return (
    <div className="flex-column w-50 p-5 bg-brown text-white rounded-5">
      <h2 className="mb-5 text-center">Giriş Yap </h2>
      <Form onSubmit={(e) => handleStates(e)}>
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
