import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthStore } from "../store";
import { NavLink, useNavigate } from "react-router";

const SignUpForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [yayinevi, setYayinevi] = useState("");
  const { addUserInfo, userInfo } = useAuthStore();

  useEffect(() => {
    if (userInfo.password !== "") {
      handleSubmit();
    }
  }, [userInfo]);

  const handleStates = (e) => {
    e.preventDefault();
    const userInfo = { email, password, yayinevi, adminName };
    addUserInfo(userInfo);
  };
  return (
    <div className="container flex-column w-50 p-5 bg-brown text-white rounded-5">
      <h2 className="mb-5 text-center">Giriş Yap / Kayıt Ol</h2>
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
      <span>
        Zaten hesabınız var mı?{" "}
        <NavLink to="/login">Burdan giriş yapın.</NavLink>
      </span>
    </div>
  );
};
export default SignUpForm;
