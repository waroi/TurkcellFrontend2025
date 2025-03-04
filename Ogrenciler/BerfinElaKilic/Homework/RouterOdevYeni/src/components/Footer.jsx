import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-light mt-5 py-5">
      <div className="container">
        <div className="row g-4">
          <div className="social-media col-12 col-lg-4 col-md-4">
            <h3 className="text-uppercase fs-3 mb-4 fw-bold">Sosyal Medya</h3>
            <div className="social d-flex align-items-center gap-4">
              <div className="instagram d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="twitter d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="linkedin d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="github d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
          <div className="pages col-12 col-lg-4 col-md-4">
            <h3 className="text-uppercase fs-3 mb-4 fw-bold">Sayfalar</h3>
            <p>
              <NavLink className="text-light" to="/">
                Anasayfa
              </NavLink>
            </p>
            <p>
              <NavLink className="text-light" to="/about">
                Hakkımızda
              </NavLink>
            </p>
            <p>
              <NavLink className="text-light" to="/SSS">
                Sıkça Sorulan Sorular
              </NavLink>
            </p>
            <p>
              <NavLink className="text-light" to="/contact">
                İletişim
              </NavLink>
            </p>
          </div>
          <div className="iletisim col-12 col-lg-4 col-md-4">
            <h3 className="text-uppercase fs-3 mb-4 fw-bold">İletişim</h3>
            <p>
              <i className="fa-solid fa-location-dot"></i> Diyarbakır, Türkiye
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> berfinela877@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 0531-280-6221
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
