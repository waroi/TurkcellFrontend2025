import React from "react";

const SSS = () => {
  return (
    <>
      <section className="faq bg-light" id="faq">
        <div className="container py-4 mx-auto">
          <h2 className="text-center mb-2">Sıkça Sorulan Sorular</h2>
          <div className="row faq-content">
            <div className="col-lg-5 col-md-7 col-sm-12 p-2 mb-2 bg-warning crs-wrap">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://img.freepik.com/free-photo/education-day-scene-fantasy-style-aesthetic_23-2151040233.jpg?t=st=1737483166~exp=1737486766~hmac=29dd8555751b0d2734168bc762b12e81bcd70c692ea9b025806c8efae19b72af&w=740"
                      className="d-block w-100"
                      alt="Hogwarts Manzaraları"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.pinimg.com/736x/20/08/36/200836e34eab2e2c21ddab9493db10eb.jpg"
                      className="d-block w-100"
                      alt="Harry, Ron ve Hermione"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.pinimg.com/736x/25/a3/ee/25a3ee13a91fc9547a2f83bdb2fccd2d.jpg"
                      className="d-block w-100"
                      alt="Hogwarts Express'in Kalktığı Peron Dokuz Üç Çeyrek"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 questions px-3">
              <div className="q1 py-1">
                <h5 className="text-primary">
                  Hangi şehirlere gönderim sağlıyorsunuz?
                </h5>
                <p className="text-dark">
                  Türkiye'nin bütün şehirlerine anlaşmalı kargo firmalarımızla
                  hizmet vermekteyiz.
                </p>
              </div>
              <div className="q1 py-1">
                <h5 className="text-primary">Kapıda ödeme var mı?</h5>
                <p className="text-dark">
                  Maalesef kapıda ödeme alamıyoruz, ancak tüm bankaların kredi
                  ve banka kartlarını kullanarak güvenle alışveriş
                  yapabilirsiniz.
                </p>
              </div>
              <div className="q1 py-1">
                <h5 className="text-primary">
                  Siparişimi nasıl takip edebilirim?
                </h5>
                <p className="text-dark">
                  Siparişinizi takip etmek için "Hesabım" bölümüne giriş
                  yapabilir ve "Siparişlerim" sekmesine tıklayabilirsiniz.
                  Ayrıca, siparişiniz kargoya verildiğinde size bir takip
                  numarası gönderilecektir.
                </p>
              </div>
              <div className="q1 py-1">
                <h5 className="text-primary">
                  İade ve değişim politikası nedir?
                </h5>
                <p className="text-dark">
                  Ürünlerinizi, teslim aldığınız tarihten itibaren 14 gün içinde
                  iade veya değişim için gönderebilirsiniz.
                </p>
              </div>
              <div className="q1 py-1">
                <h5 className="text-primary">Kargo ücreti ne kadar?</h5>
                <p className="text-dark">
                  500 Galleon ve üzeri siparişler için kargo ücretsizdir, bu
                  tutarın altındaki siparişlerde 5 Galleon kargo ücreti
                  uygulanır.
                </p>
              </div>
              <div className="q1 py-1">
                <h5 className="text-primary">
                  Müşteri hizmetlerine nasıl ulaşabilirim?
                </h5>
                <p className="text-dark">
                  Müşteri hizmetlerimize hafta içi 09:00 - 18:00 saatleri
                  arasında 0850 524 4748 numaralı telefondan veya
                  destek@sihirlidukkan.com adresine e-posta göndererek
                  ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SSS;
