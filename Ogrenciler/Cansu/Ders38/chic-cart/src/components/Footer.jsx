import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Chic-Cart</h5>
            <p>Your go-to online store for fashion, electronics, and more!</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/shop" className="text-white">Shop</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/faq" className="text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@chiccart.com</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Follow us:</p>
            <p>
              <a href="#" className="text-white me-3">Facebook</a>
              <a href="#" className="text-white me-3">Instagram</a>
              <a href="#" className="text-white">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
