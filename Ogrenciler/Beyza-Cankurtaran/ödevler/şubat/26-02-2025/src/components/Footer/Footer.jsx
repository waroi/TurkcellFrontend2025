import React from "react";

export default function Footer() {
  return (
    <>
      <section className="footer bg-dark py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 px-2 text-light">
              <h4 className="mb-2">Hakkımızda</h4>
              <p>
                Sihirli Dükkan 🪄, Harry Potter evreninin büyüleyici eşyalarını
                🧙‍♂️ hayranlarına sunan, sihir dolu bir e-ticaret platformudur
                ✨📦.
              </p>
            </div>
            <div className="col-lg-3 px-2 text-light">
              <h4 className="mb-2">Site Haritası</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none text-white">
                    Anasayfa
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="#aboutUs"
                    className="text-decoration-none text-white"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="#bestseller"
                    className="text-decoration-none text-white"
                  >
                    Çok Satanlar
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="#products"
                    className="text-decoration-none text-white"
                  >
                    Ürünler
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#faq" className="text-decoration-none text-white">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="#contactUs"
                    className="text-decoration-none text-white"
                  >
                    Bize Ulaşın
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 px-2 text-light">
              <h4 className="mb-2">Bizi Takip Edin</h4>
              <div className="icons">
                <a href="/" alt="instagram">
                  <img
                    src="https://img.icons8.com/?size=50&id=32323&format=png&color=000000"
                    alt=""
                  />
                </a>
                <a href="/" alt="twitter">
                  <img
                    src="https://img.icons8.com/?size=50&id=6Fsj3rv2DCmG&format=png&color=ffffff"
                    alt=""
                  />
                </a>
                <a href="/" alt="posta">
                  <img
                    src="https://img.icons8.com/?size=50&id=OumT4lIcOllS&format=png&color=000000"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <h6 className="text-light text-center mt-3">
            Created with{" "}
            <span>
              <img
                src="https://img.icons8.com/?size=20&id=59805&format=png&color=FF69B4"
                alt=""
              />
            </span>{" "}
            by Ece İrem Kılıç
          </h6>
        </div>
      </section>
    </>
  );
}
