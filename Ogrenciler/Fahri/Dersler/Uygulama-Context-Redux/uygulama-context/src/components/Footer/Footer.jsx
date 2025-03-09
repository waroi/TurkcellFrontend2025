const Footer = () => {
  return (
    <footer className="mt-5 position-absolute bottom-0 end-0 start-0 w-100">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Book Collector</h3>
          <p>
            Kitaplarınızı paylaşabileceğiniz ve keşfedebileceğiniz bir platform
            sunuyoruz.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Tüm Hakları Saklıdır. Made with ❤️ by Kadriye, Zeynep &
          Fahri
        </p>
        <p>
          <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
