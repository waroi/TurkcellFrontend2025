import React from "react";

const FooterContact = () => {
  return (
    <div className="col-md-4 align-items-center d-flex flex-column">
      <h5>İletişim</h5>
      <address>
        <p>
          <i className="bi bi-geo-alt-fill"></i> Türkiye
        </p>
        <p>
          <i className="bi bi-envelope"></i> info@melam.com
        </p>
        <p>
          <i className="bi bi-phone "></i> +90 212 123 45 67
        </p>
      </address>
      <div>
        <a
          href="#"
          className="text-dark text-decoration-none me-3"
          aria-label="facebook"
        >
          <i className="bi bi-facebook "></i>
        </a>
        <a
          href="#"
          className="text-dark text-decoration-none me-3"
          aria-label="twitter"
        >
          <i className="bi bi-twitter "></i>
        </a>
        <a
          href="#"
          className="text-dark text-decoration-none me-3"
          aria-label="instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="#"
          className="text-dark text-decoration-none"
          aria-label="linkedin"
        >
          <i className="bi bi-linkedin "></i>
        </a>
      </div>
    </div>
  );
};

export default FooterContact;
