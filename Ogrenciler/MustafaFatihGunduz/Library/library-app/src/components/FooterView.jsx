function Footer() {
  return (
    <footer className="pt-4 pb-4 w-100 mt-5 " id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Kitap Dünyası</h5>
            <p>
              Kitaplar, eğitim materyalleri ve daha fazlası! En yeni kitapları
              keşfedin ve okuma alışkanlıklarınızı geliştirin.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Hızlı Erişim</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/" className=" text-decoration-none">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/books" className=" text-decoration-none">
                  Kitaplar
                </a>
              </li>
              <li>
                <a href="/pricing" className="  text-decoration-none">
                  Fiyatlar
                </a>
              </li>
              <li>
                <a href="/authors" className=" text-decoration-none">
                  Yazarlar
                </a>
              </li>
              <li>
                <a href="/contact" className=" text-decoration-none">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>İletişim</h5>
            <address>
              <p>
                <i className="fa-solid fa-location-dot "></i> Türkiye
              </p>
              <p>
                <i className="fa-solid fa-envelope "></i>
                info@kitapdunyasi.com
              </p>
              <p>
                <i className="fa-solid fa-phone "></i> +90 212 123 45 67
              </p>
            </address>
            <div>
              <a
                href="#"
                className="text-white text-decoration-none me-3"
                aria-label="facebook"
              >
                <i className="fa-brands fa-facebook-f "></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none me-3"
                aria-label="twitter"
              >
                <i className="fa-brands fa-twitter "></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none me-3"
                aria-label="instagram"
              >
                <i className="fa-brands fa-instagram "></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none"
                aria-label="linkedin"
              >
                <i className="fa-brands fa-linkedin-in "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; 2025 Kitap Dünyası. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
