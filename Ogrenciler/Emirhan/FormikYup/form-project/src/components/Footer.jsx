const Footer = () => {
  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4">
            <h3 className="footer-title">ZENCODE</h3>
            <p className="footer-description">
              Dünyanın en iyi iş başvurusu platformlarından biriyiz. Güçlü,
              güvenli ve kullanıcı dostu bir deneyim sunuyoruz.
            </p>
            <div className="social-icons d-flex gap-3 fs-4 ">
              <a href="#" className="social-icon">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook text-white"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin text-white"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="footer-section-title">Bağlantılar</h4>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sık Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4 className="footer-section-title">İletişim</h4>
            <p>Telefon: +90 123 456 789</p>
            <p>Email: info@zencode.com</p>
            <p>Adres: ZenCode, Çıkmaz Sokak, İstanbul, Türkiye</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; 2025 ZenCode - Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
