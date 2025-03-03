import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Haber Portalı. Tüm hakları saklıdır.
        </p>
        {/* <div className="footer-links">
          <a href="#" className="footer-link">
            Hakkımızda
          </a>
          <a href="#" className="footer-link">
            İletişim
          </a>
          <a href="#" className="footer-link">
            Gizlilik Politikası
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
