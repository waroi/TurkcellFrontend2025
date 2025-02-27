import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5 text-center text-white">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">
              Copyright ©2025 All rights reserved | This website is made with by
              Ela, Hatice and Beyza.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
