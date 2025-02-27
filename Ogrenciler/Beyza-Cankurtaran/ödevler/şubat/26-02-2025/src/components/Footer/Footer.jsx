import React from "react";

export default function Footer() {
  return (
    <>
      <section class="footer bg-dark py-3">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-4 px-2 text-light">
              <h4 class="mb-2">Hakkımızda</h4>
              <p>
                Sihirli Dükkan 🪄, Harry Potter evreninin büyüleyici eşyalarını
                🧙‍♂️ hayranlarına sunan, sihir dolu bir e-ticaret platformudur
                ✨📦.
              </p>
            </div>
            <div class="col-lg-3 px-2 text-light">
              <h4 class="mb-2">Site Haritası</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a href="#" class="text-decoration-none text-white">
                    Anasayfa
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#about-us" class="text-decoration-none text-white">
                    Hakkımızda
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#bestseller" class="text-decoration-none text-white">
                    Çok Satanlar
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#products" class="text-decoration-none text-white">
                    Ürünler
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#faq" class="text-decoration-none text-white">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#contact-us" class="text-decoration-none text-white">
                    Bize Ulaşın
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 px-2 text-light">
              <h4 class="mb-2">Bizi Takip Edin</h4>
              <div class="icons">
                <a href="">
                  <img
                    src="https://img.icons8.com/?size=50&id=32323&format=png&color=000000"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.icons8.com/?size=50&id=6Fsj3rv2DCmG&format=png&color=ffffff"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.icons8.com/?size=50&id=OumT4lIcOllS&format=png&color=000000"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <h6 class="text-light text-center mt-3">
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
