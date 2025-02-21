import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "../atoms/Button";
import EditModal from "../EditModal";

function NavBar({ handleAddPost }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand className="fw-bold fs-5" href="#home">
            BLOGG
          </Navbar.Brand>
          <Button variant="btn-primary" onClick={() => handleShow()}>
            Blog Ekle
          </Button>
        </Container>
      </Navbar>
      <EditModal
        show={show}
        handleClose={handleClose}
        handleAddPost={handleAddPost}
      />
    </>
  );
}

export default NavBar;
