import React from "react";
import { NavLink } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className={styles.footerTitle}>HHM</h5>
            <p className={styles.footerText}>
              Güncel haberler, döviz kurları ve daha fazlası için güvenilir
              kaynağınız. Her gün yenilenen içeriklerle sizlere en doğru
              bilgileri sunuyoruz.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className={styles.footerTitle}>Hızlı Erişim</h5>
            <ul className={styles.footerLinks}>
              <li>
                <NavLink to="/" className={styles.footerLink}>
                  Ana Sayfa
                </NavLink>
              </li>
              <li>
                <NavLink to="/news/general" className={styles.footerLink}>
                  Genel Haberler
                </NavLink>
              </li>
              <li>
                <NavLink to="/news/economy" className={styles.footerLink}>
                  Ekonomi
                </NavLink>
              </li>
              <li>
                <NavLink to="/news/sport" className={styles.footerLink}>
                  Spor
                </NavLink>
              </li>
              <li>
                <NavLink to="/news/technology" className={styles.footerLink}>
                  Teknoloji
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className={styles.footerTitle}>İletişim</h5>
            <address className={styles.footerText}>
              <p>
                <i className="bi bi-geo-alt-fill"></i> Türkiye
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> info@haberportali.com
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +90 212 123 45 67
              </p>
            </address>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="twitter">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} HHM. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
