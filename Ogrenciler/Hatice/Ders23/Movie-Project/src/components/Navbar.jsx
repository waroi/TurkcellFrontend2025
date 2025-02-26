import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="light" className="mb-4 navbar-section sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold fs-3">
          HdFilmCehennemi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white fw-bold" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#filmler">Filmler</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#oyuncular">Oyuncular</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
