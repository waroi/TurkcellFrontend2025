import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center text-md-start">
              <div className="logo mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
                <img src="./images/l-4.png" alt="logo left" height={50} />
                <h2 className="m-0 text-white d-inline">Wings</h2>
                <img src="./images/l-5.png" alt="logo right" height={50} />
              </div>
              <ul className="contact-info list-unstyled d-flex flex-wrap justify-content-around d-md-block pt-3">
                <li className="mb-2 ms-2">
                  <a href="#" className="text-decoration-none text-white">
                    <i className="fas fa-phone me-2 me-2 p-2 rounded-circle"></i>{" "}
                    +90 555 555 55 55
                  </a>
                </li>
                <li className="mb-2 ms-2">
                  <a href="#" className="text-decoration-none text-white">
                    <i className="fas fa-envelope me-2 me-2 p-2 rounded-circle"></i>
                    wings@.gmail.com
                  </a>
                </li>
                <li className="mb-2 ms-2">
                  <a href="#" className="text-decoration-none text-white">
                    <i className="fas fa-fax me-2 me-2 p-2 rounded-circle"></i>{" "}
                    +90 555 555 55 55
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-3 text-center text-md-start">
              <h6 className="text-white mb-3 fs-5">Sorularını Önemsiyoruz.</h6>
              <p className="text-white-50 mb-4 fw-light">
                Lütfen bizimle paylaş.
              </p>
              <form className="needs-validation" novalidate>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    required
                    placeholder="Mailinizi giriniz."
                  />
                  <div className="invalid-feedback">
                    Lütfen mailinizi kotnrol edin!
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Mesajınızı yazınız."
                  ></textarea>
                </div>
                <button className="btn btn-danger text-white" type="submit">
                  Gönder
                </button>
              </form>
            </div>
            <div className="col-lg-3 text-center text-md-start">
              <h6 className="text-white fs-5 mb-2">Sosyal Medyalarımız</h6>
              <div className="social-icons d-flex flex-wrap justify-content-center justify-content-md-start">
                <a
                  href="#"
                  className="text-decoration-none me-2 d-flex align-items-center justify-content-center p-2 rounded-circle"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="text-decoration-none me-2 d-flex align-items-center justify-content-center p-2 rounded-circle">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none me-2 d-flex align-items-center justify-content-center p-2 rounded-circle"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none me-2 d-flex align-items-center justify-content-center p-2 rounded-circle"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <h6 className="text-white fs-5 mb-2 mt-4">Uygulamalarımız</h6>
              <div className="apps d-flex flex-wrap justify-content-center justify-content-md-start">
                <a href="#" className="me-2 mb-2">
                  <img
                    src="./images/google-play.png"
                    alt=" google-play"
                    height={50}
                  />
                </a>
                <a href="#" className="mb-2">
                  <img
                    src="./images/app-store.avif"
                    alt="app-store"
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex footer-bottom justify-content-center align-items-center">
            <p className="m-0 text-white-50 text-center fw-light">
              © 2025 Bütün hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
