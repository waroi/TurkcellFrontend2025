import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer-news text-dark py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; 2025 Konnichwa News Japan - All rights reserved.</p>

        <div className="social-links mb-3">
          <a className="text-dark me-3">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="text-dark me-3">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a className="text-dark">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <p className="mb-0">
          <NavLink to="/" className="text-dark me-3">About US</NavLink>
          <NavLink to="/" className="text-dark me-3">
            Privacy Policy </NavLink>
          <NavLink to="/" className="text-dark">Contact US</NavLink>
        </p>

        <p className="mt-4 mb-0">
          <strong>
            Popular Categories:</strong>
          <br />
          <NavLink to="/" className="text-dark me-3">Business</NavLink>
          <NavLink to="/" className="text-dark me-3">Software</NavLink>
          <NavLink to="/" className="text-dark">Travel</NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;




