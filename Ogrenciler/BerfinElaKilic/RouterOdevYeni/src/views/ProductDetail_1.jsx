import { NavLink } from "react-router";
import Photo from "/components/Photo";
const ProductDetail1 = () => {
  return (
    <main>
      <section class="product-detail">
        <div class="container my-5">
          <div class="row">
            <div class="col-md-12 col-12 col-lg-6">
              <img
                src="../images/prenses.webp"
                alt="Ürün Görseli"
                class="product-image img-fluid"
              />
            </div>
            <div class="col-md-12 col-12 col-lg-6">
              <div class="product-details">
                <div class="stars d-flex text-secondary mb-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h1 class="product-title">İngiltere Prensesi</h1>
                <p class="product-price text-primary fs-2">$100.000.000</p>
                <p class="product-description fs-5">
                  Merhaba gelin hep beraber İlgiltere Prensesini inceleyelim...
                  Bu yüzyılda paşalık mı krallık mı kaldı diyenlere, "Hayırdır
                  İngiltere Prensesi ile mi konuşuyorum?" tarzı alaylı biçimde
                  konuşan kişilere unutamayacağı dersi verin. Yanlış duymadınız
                  İngiltere prensesi olmak tek tıkla artık çok kolay. İngiltere
                  krallığının yüzyıllardır süregelen krallık tahtının sahibi
                  olacaksınız. Lüks yaşantının yanında soylu bir ailenin ferdi
                  olmak sizin de tüylerinizi ürpertiyordur mutlaka.
                </p>
                <button class="btn btn-primary btn-lg mt-3">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-danger py-5 ">
        <div
          id="carousel-users-indicator"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carousel-users-indicator"
              data-bs-slide-to="0"
              class="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel-users-indicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class=""
            ></button>
            <button
              type="button"
              data-bs-target="#carousel-users-indicator"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class=""
            ></button>
          </div>
          <div class="carousel-inner pb-5">
            <div class="carousel-item position-relative active">
              <div class="container text-center text-info">
                <div class="row">
                  <div class="col-8 m-auto">
                    <p class="my-3 fs-5">Mükemmel!</p>
                    <blockquote>
                      {" "}
                      <i>
                        "Hayatımı yeniden tasarlamak istediğimde bu siteyi
                        keşfettim ve hayatımın en doğru kararını verdim.
                        İngiltere Prensesi paketini seçtim ve bir sonraki
                        hayatımda adeta bir peri masalının içinde olacağımı
                        biliyorum. Profesyonel ve hızlı hizmet! Kesinlikle
                        tavsiye ederim."
                      </i>
                    </blockquote>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p
                      class="mt-3 fs-5
                      "
                    >
                      Ela Kılıç
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div div="" class="carousel-item">
              <div class="container text-center text-info">
                <div class="row">
                  <div class="col-8 m-auto">
                    <p class="my-3 fs-5">Hayallerimin Ötesinde..</p>
                    <blockquote>
                      {" "}
                      <i>
                        "CEO Hayatı paketini aldım ve bir sonraki hayatımda
                        dünyanın en güçlü insanlarından biri olmayı garanti
                        altına aldım. Detaylı açıklamalar ve güvenilir
                        hizmetleri sayesinde sürecin her aşamasında kendimi özel
                        hissettim. Herkese öneririm!"
                      </i>
                    </blockquote>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p class="mt-3 fs-5">Okan Beyaz</p>
                  </div>
                </div>
              </div>
            </div>
            <div div="" class="carousel-item">
              <div class="container text-center text-info">
                <div class="row">
                  <div class="col-8 m-auto">
                    <p class="my-3 fs-5">Harika!</p>
                    <blockquote>
                      {" "}
                      <i>
                        "Sanatçı Hayatı paketine bayıldım! Sanatçı olarak bir
                        sonraki hayatımda dünyayı güzelleştireceğim fikri beni
                        çok heyecanlandırdı. Her şey tam da hayal ettiğim gibi
                        ilerledi. İlgili müşteri hizmetleri de ayrı bir artı.
                        Teşekkürler!"
                      </i>
                    </blockquote>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p class="mt-3 fs-5">Avesta Kılıç</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail1;
