import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer-news text-dark py-4">
      <div className="container text-center">


        <p className="mb-0 overflow-hidden">
          <NavLink to="/" className="text-dark text-decoration-none link fw-bold">
            Bi Başvuru
          </NavLink>
        </p>
      </div>
    </footer>
  )
}

export default Footer;




