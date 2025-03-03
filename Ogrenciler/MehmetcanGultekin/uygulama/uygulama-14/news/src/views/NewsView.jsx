import React from "react";
import {Outlet, NavLink} from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NewsView = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-light py-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="w-100 justify-content-between category-font">
              <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
              <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
              <NavLink to="/haberler/magazin">Magazin Haberleri</NavLink>
              <NavLink to="/haberler/teknoloji">Teknoloji Haberleri</NavLink>
              <NavLink to="/haberler/global">Global Haberler</NavLink>
              <NavLink to="/haberler/saglik">Sağlık Haberleri</NavLink>
              <NavLink to="/haberler/eglence">Eğlence Haberleri</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NewsView;
