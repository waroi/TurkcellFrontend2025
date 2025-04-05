import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row">

         
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Chic-Cart</h5>
            <p>
              Chic-Cart; moda, elektronik, ev yaşamı ve daha fazlasını bulabileceğiniz modern bir alışveriş platformudur. Güvenli alışveriş, hızlı kargo ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Kategoriler</h5>
            <ul className="list-unstyled">
              <li><a href="/shop" className="text-white text-decoration-none">Ürünler</a></li>
              <li><a href="/about" className="text-white text-decoration-none">Hakkımızda</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">İletişim</a></li>
              <li><a href="/faq" className="text-white text-decoration-none">S.S.S</a></li>
            </ul>
          </div>


          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">İletişim</h5>
            <p><i className="fas fa-envelope me-2"></i> destek@chiccart.com</p>
            <p><i className="fas fa-phone me-2"></i> +90 212 345 67 89</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> İstanbul, Türkiye</p>
            <p>
              <a href="https://facebook.com" target="_blank" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </p>
          </div>

       
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Ödeme Yöntemleri</h5>
            <p>Güvenli ödeme seçeneklerimizle alışveriş yapabilirsiniz:</p>
            <ul className="list-unstyled">
              <li><i className="fas fa-credit-card me-2"></i> Visa, Mastercard</li>
              <li><i className="fas fa-university me-2"></i> Havale / EFT</li>
              <li><i className="fas fa-box me-2"></i> Kapıda Ödeme</li>
              <li><i className="fas fa-mobile-alt me-2"></i> BKM Express</li>
            </ul>
            
          </div>

        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6 text-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Chic-Cart | Tüm hakları saklıdır.</p>
          </div>
          <div className="col-md-6 text-end">
            <a href="/privacy-policy" className="text-white me-3">Gizlilik Politikası</a>
            <a href="/termsofservice" className="text-white">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
