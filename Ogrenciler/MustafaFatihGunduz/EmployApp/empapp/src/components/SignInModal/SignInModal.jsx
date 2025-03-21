import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useHandleAuth from "../../store/usehandleAuth";

function SignInModal({ show, handleClose }) {
  const [isCreating, setIsCreating] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { handleLogin, handleSignUp } = useHandleAuth();

  return isCreating ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Giriş Yap</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="userForm.ControlInput1">
            <Form.Label>Email adresi</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userForm.ControlTextarea1">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              type="password"
              placeholder="Şifreniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="link" onClick={() => setIsCreating(false)}>
            Kayıt Ol
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button
          variant="primary"
          onClick={async () => await handleLogin(email, password)}
        >
          Giriş Yap
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Giriş Yap</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="userForm.ControlInput1">
            <Form.Label>Email adresi</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userForm.ControlTextarea1">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              type="password"
              placeholder="Şifreniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userForm.ControlTextarea2">
            <Form.Label>Tekrar Şifre</Form.Label>
            <Form.Control
              type="password"
              placeholder="Tekrar Şifreniz"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="link" onClick={() => setIsCreating(true)}>
            Giriş yap
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button
          variant="primary"
          onClick={async () => await handleSignUp(email, password)}
        >
          Kayıt Ol
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
