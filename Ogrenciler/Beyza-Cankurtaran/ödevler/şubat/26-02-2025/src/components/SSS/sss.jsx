import React from 'react'

const sss = () => {
  return (<>
    <section class="faq bg-light" id="faq">
    <div class="container py-4 mx-auto">
      <h2 class="text-center mb-2">Sıkça Sorulan Sorular</h2>
      <div class="row faq-content">
        <div class="col-lg-5 col-md-7 col-sm-12 p-2 mb-2 bg-warning crs-wrap">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://img.freepik.com/free-photo/education-day-scene-fantasy-style-aesthetic_23-2151040233.jpg?t=st=1737483166~exp=1737486766~hmac=29dd8555751b0d2734168bc762b12e81bcd70c692ea9b025806c8efae19b72af&w=740"
                  class="d-block w-100" alt="Hogwarts Manzaraları"/>
              </div>
              <div class="carousel-item">
                <img src="https://i.pinimg.com/736x/20/08/36/200836e34eab2e2c21ddab9493db10eb.jpg" class="d-block w-100"
                  alt="Harry, Ron ve Hermione"/>
              </div>
              <div class="carousel-item">
                <img src="https://i.pinimg.com/736x/25/a3/ee/25a3ee13a91fc9547a2f83bdb2fccd2d.jpg" class="d-block w-100"
                  alt="Hogwarts Express'in Kalktığı Peron Dokuz Üç Çeyrek"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-12 questions px-3">
          <div class="q1 py-1">
            <h5 class="text-primary">Hangi şehirlere gönderim sağlıyorsunuz?</h5>
            <p class="text-dark">Türkiye'nin bütün şehirlerine anlaşmalı kargo firmalarımızla hizmet vermekteyiz.</p>
          </div>
          <div class="q1 py-1">
            <h5 class="text-primary">Kapıda ödeme var mı?</h5>
            <p class="text-dark">Maalesef kapıda ödeme alamıyoruz, ancak tüm bankaların kredi ve banka kartlarını
              kullanarak güvenle alışveriş yapabilirsiniz.</p>
          </div>
          <div class="q1 py-1">
            <h5 class="text-primary">Siparişimi nasıl takip edebilirim?</h5>
            <p class="text-dark">Siparişinizi takip etmek için "Hesabım" bölümüne giriş yapabilir ve "Siparişlerim"
              sekmesine tıklayabilirsiniz. Ayrıca, siparişiniz kargoya verildiğinde size bir takip numarası
              gönderilecektir.</p>
          </div>
          <div class="q1 py-1">
            <h5 class="text-primary">İade ve değişim politikası nedir?</h5>
            <p class="text-dark">Ürünlerinizi, teslim aldığınız tarihten itibaren 14 gün içinde iade veya değişim için
              gönderebilirsiniz.</p>
          </div>
          <div class="q1 py-1">
            <h5 class="text-primary">Kargo ücreti ne kadar?</h5>
            <p class="text-dark">500 Galleon ve üzeri siparişler için kargo ücretsizdir, bu tutarın altındaki
              siparişlerde 5 Galleon kargo ücreti uygulanır.</p>
          </div>
          <div class="q1 py-1">
            <h5 class="text-primary">Müşteri hizmetlerine nasıl ulaşabilirim?</h5>
            <p class="text-dark">Müşteri hizmetlerimize hafta içi 09:00 - 18:00 saatleri arasında 0850 524 4748 numaralı
              telefondan veya destek@sihirlidukkan.com adresine e-posta göndererek ulaşabilirsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
}

export default sss