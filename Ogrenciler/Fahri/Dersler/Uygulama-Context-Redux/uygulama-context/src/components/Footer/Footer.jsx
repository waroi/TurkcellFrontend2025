import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Book Collector</h3>
          <p>
            Kitaplarınızı paylaşabileceğiniz ve keşfedebileceğiniz bir platform
            sunuyoruz.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Tüm Hakları Saklıdır. Made with ❤️ by Kadriye, Zeynep &
          Fahri
        </p>
        <p>
          <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
