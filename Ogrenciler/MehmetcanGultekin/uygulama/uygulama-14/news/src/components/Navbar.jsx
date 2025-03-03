import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router";

const NavbarNews = () => {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <Navbar expand="lg">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/haberler/" className="outfit">
              Haber Portalı
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarNews;
