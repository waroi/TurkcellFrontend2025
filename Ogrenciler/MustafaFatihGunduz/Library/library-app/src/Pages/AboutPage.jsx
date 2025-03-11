import React from "react";

const LibraryAbout = () => {
  return (
    <div className="about-container">
      <h1>Hakkımızda</h1>
      <p className="text">
        Kitapseverler için kurulmuş olan <strong>[Kütüphane Adı]</strong>,
        bilgiye erişimi kolaylaştırmayı ve okuma alışkanlığını yaymayı amaçlayan
        bir platformdur.
      </p>

      <h2>Misyonumuz</h2>
      <p>Daha fazla insanı kitaplarla buluşturmak için buradayız!</p>

      <h2>Hizmetlerimiz</h2>
      <div className="services">
        <div className="service-card">📚 Geniş Kitap Koleksiyonu</div>
        <div className="service-card">💻 Dijital Kütüphane</div>
        <div className="service-card">📖 Okuma Alanları</div>
      </div>

      <h2 className="mt-4">İletişim</h2>
      <div className="contact-info">
        <p>📍 Adres: Konya/Meram</p>
        <p>📞 Telefon: +90 850 486 12 33 </p>
        <p>
          📧 E-Posta:{" "}
          <a href="mailto:[E-posta Adresi]">mustafatihgunduz@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default LibraryAbout;
