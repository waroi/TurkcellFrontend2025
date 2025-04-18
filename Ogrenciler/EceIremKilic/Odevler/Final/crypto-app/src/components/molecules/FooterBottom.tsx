"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@/contexts/ThemeContext";

const FooterBottom = () => {
  const { theme } = useTheme();
  return (
    <div className={`footer-bottom bg-${theme}`}>
      <Container>
        <div className="d-flex justify-content-between py-4">
          <p className="mb-0">Copyright © 2025 Free For Earth’s people</p>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="me-4" />
            <FontAwesomeIcon icon={faTwitter} className="me-4" />
            <FontAwesomeIcon icon={faInstagram} className="me-4" />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
