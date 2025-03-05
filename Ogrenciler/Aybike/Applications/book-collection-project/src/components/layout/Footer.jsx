import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="library-news py-4 shadow-lg">
      <div className="container text-center">
        <p className="mb-1 text-dark">&copy; 2025 BookNest Library. - All rights reserved.</p>

        <div className="social-links mb-3">
          <a className="text-dark me-3" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="text-dark me-3" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a className="text-dark" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <p className="mb-0 text-dark">
          <NavLink to="/" className="text-dark me-3">About US</NavLink>
          <NavLink to="/" className="text-dark me-3">Privacy Policy</NavLink>
          <NavLink to="/" className="text-dark">Contact US</NavLink>
        </p>

        <p className="mt-4 mb-0 text-dark">
          <strong>Popular Categories:</strong><br />
          <NavLink to="/" className="text-dark me-3">Classic</NavLink>
          <NavLink to="/" className="text-dark me-3">Science-Fiction</NavLink>
          <NavLink to="/" className="text-dark">Action</NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

