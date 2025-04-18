import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row mb-4">
        <div className="col-lg-4 mb-4">
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link"><img
            src="/images/logo.png"
            alt="Crypto Planet Logo"
            width={40}
            height={40}
            className="me-2"
          />
          Rocket
        </a></li>
              <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere culpa quaerat quidem nulla beatae tempore unde, accusantium obcaecati necessitatibus eveniet!</p></li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4">
            <h5 className="mb-3">Exchange</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Exchange Home</a></li>
              <li><a href="#" className="footer-link">Margin Trading</a></li>
              <li><a href="#" className="footer-link">Derivatives Trading</a></li>
              <li><a href="#" className="footer-link">Supercharger</a></li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Request Form</a></li>
              <li><a href="#" className="footer-link">Contact Support</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Security</a></li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">News</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4">
            <h5 className="mb-3">Newsletter</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary" type="button">Send</button>
            </div>
          </div>
        </div>
        <div className="row align-items-center pt-4 border-top">
          <div className="col-md-6">
            <p className="mb-md-0">© 2024 Crypto Planet. All rights reserved</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-md-end">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Youtube size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};