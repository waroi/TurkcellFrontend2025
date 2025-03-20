import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
import { Modal, Button, Form } from "react-bootstrap";

function SignInModal({ show, handleClose }) {
  return (
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
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userForm.ControlTextarea1">
            <Form.Label>Şifre</Form.Label>
            <Form.Control type="password" placeholder="Şifreniz" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Giriş Yap
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
