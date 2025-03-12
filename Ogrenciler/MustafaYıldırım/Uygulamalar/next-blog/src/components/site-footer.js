import Link from "next/link";

const SiteFooter = () => {
  const roters = [
    {
      href: "/",
      label: "Anasayfa",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/about",
      label: "Hakkımızda",
    },
    {
      href: "/contact",
      label: "İletişim",
    },
  ];
  return (
    <footer className="pt-4 pb-4 w-100 bg-light" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <h5>MELAM</h5>
            <p>
              Güncel konular, derinlemesine analizler ve ilgi çekici hikâyelerle
              dolu blog yazılarımızı keşfedin. Yeni fikirler edinmek, farklı
              bakış açıları kazanmak ve bilgi dağarcığınızı genişletmek için
              hemen okumaya başlayın!
            </p>
          </div>

          <div className="col-md-4 align-items-center d-flex flex-column">
            <h5>Hızlı Erişim</h5>
            <ul className="list-unstyled ">
              {roters.map((route) => (
                <li className="nav-item" key={route.href}>
                  <Link
                    key={route.href}
                    href={route.href}
                    className="nav-link active"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 align-items-center d-flex flex-column">
            <h5>İletişim</h5>
            <address>
              <p>
              <i class="bi bi-geo-alt-fill"></i> Türkiye
              </p>
              <p>
              <i class="bi bi-envelope"></i> info@melam.com
              </p>
              <p>
                <i className="bi bi-phone "></i> +90 212 123 45 67
              </p>
            </address>
            <div>
              <a
                href="#"
                className="text-dark text-decoration-none me-3"
                aria-label="facebook"
              >
                <i className="bi bi-facebook "></i>
              </a>
              <a
                href="#"
                className="text-dark text-decoration-none me-3"
                aria-label="twitter"
              >
                <i className="bi bi-twitter "></i>
              </a>
              <a
                href="#"
                className="text-dark text-decoration-none me-3"
                aria-label="instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-dark text-decoration-none"
                aria-label="linkedin"
              >
                <i className="bi bi-linkedin "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 MELAM. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
