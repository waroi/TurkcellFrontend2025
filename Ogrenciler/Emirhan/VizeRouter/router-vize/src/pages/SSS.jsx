import React from "react";

const SSS = () => {
  return (
    <div>
      <main>
        <section class="container">
          <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html" class="text-decoration-none text-black">
                  Ana Sayfa
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Sık Sorulan Sorular
              </li>
            </ol>
          </nav>
          <h4 class="mb-4 fw-semibold my-5">Sık Sorulan Sorular</h4>
          <div class="accordion mb-5" id="shopAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Bu ürünler gerçekten satılıyor mu?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet, eğlence amaçlı üretilen konsept ürünlerimizi satışa
                  sunuyoruz. Amaç tamamen mizah ve yaratıcı düşünceyi
                  desteklemek!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Sipariş verdiğim ürün gerçekten bana ulaşacak mı?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Tabii ki! Ürünlerimizi hızlı ve güvenilir bir şekilde size
                  ulaştırmak için çalışıyoruz. Mizahi olsa da hizmetimiz
                  ciddidir.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  İade ve değişim yapabilir miyim?
                </button>
              </h2>
              <div
                id="collapse3"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Elbette! Ürünlerimizle ilgili herhangi bir sorun yaşarsanız 14
                  gün içinde iade veya değişim talep edebilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Bu ürünleri hediye olarak gönderebilir miyim?
                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Kesinlikle! Sevdiklerinizi güldürmek ve yaratıcı hediyelerle
                  şaşırtmak için ürünlerimiz harika bir seçenek. Sipariş
                  sırasında “hediye paketi” seçeneğini işaretleyebilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Ürünlerinizin gerçek hayatta işlevi var mı?
                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Bazı ürünlerimiz sadece mizah amacı taşırken, bazıları günlük
                  hayatta kullanabileceğiniz işlevlere de sahip. Ürün
                  açıklamalarını dikkatlice okuyarak bilgi alabilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  Yurtdışına gönderim yapıyor musunuz?
                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet, belirli ülkeler için uluslararası gönderim yapıyoruz.
                  Sipariş sırasında adres bilgilerinizi girdiğinizde uygunluk
                  durumunu görebilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  Ürünler özel tasarım mı?
                </button>
              </h2>
              <div
                id="collapse7"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet, ürünlerimizin büyük bir kısmı özel olarak
                  tasarlanmıştır. Amacımız, eğlenceyi ve yaratıcılığı bir araya
                  getiren benzersiz ürünler sunmaktır.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  Siparişim ne kadar sürede elime ulaşır?
                </button>
              </h2>
              <div
                id="collapse8"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Türkiye içi teslimatlar genellikle 2-5 iş günü içinde
                  tamamlanır. Yurtdışı gönderimlerde teslimat süresi adresinize
                  bağlı olarak değişebilir.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                >
                  Ürünlerin mizahi içeriği herkese uygun mu?
                </button>
              </h2>
              <div
                id="collapse9"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet, ürünlerimizi geniş bir kitleye hitap edecek şekilde
                  tasarlıyoruz. Ancak bazı ürünler belirli bir espri anlayışı
                  gerektirebilir. Ürün açıklamalarımızda bu tür detaylara yer
                  veriyoruz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded="false"
                  aria-controls="collapse10"
                >
                  Toplu siparişlerde indirim yapıyor musunuz?
                </button>
              </h2>
              <div
                id="collapse10"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet! Toplu siparişlerde özel indirim seçeneklerimiz mevcut.
                  Detaylar için bizimle iletişime geçebilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="false"
                  aria-controls="collapse11"
                >
                  Ürünlerinizi nerede üretiyorsunuz?
                </button>
              </h2>
              <div
                id="collapse11"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Ürünlerimiz yerel tasarımcılar ve atölyeler tarafından büyük
                  bir özenle hazırlanıyor. Kalite bizim için öncelikli!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded="false"
                  aria-controls="collapse12"
                >
                  Mizahi ürünler dışında başka kategoriler var mı?
                </button>
              </h2>
              <div
                id="collapse12"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Şimdilik sadece mizah ve eğlenceye yönelik ürünler sunuyoruz.
                  Ancak gelecekte farklı kategoriler eklemeyi planlıyoruz.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded="false"
                  aria-controls="collapse13"
                >
                  Ödeme yöntemleriniz neler?
                </button>
              </h2>
              <div
                id="collapse13"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme
                  seçeneklerimiz mevcuttur. Ödemeleriniz güvenli bir şekilde
                  işlenir.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse14"
                  aria-expanded="false"
                  aria-controls="collapse14"
                >
                  Kendi tasarımlarımızı size gönderip ürün yaptırabilir miyiz?
                </button>
              </h2>
              <div
                id="collapse14"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Evet, özel tasarım siparişleri alıyoruz! Mizahi fikirlerinizi
                  hayata geçirmek için bize ulaşabilirsiniz.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse15"
                  aria-expanded="false"
                  aria-controls="collapse15"
                >
                  Ürünlerle ilgili yorum bırakabilir miyim?
                </button>
              </h2>
              <div
                id="collapse15"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Kesinlikle! Yorumlarınız bizim için çok değerli. Ürün
                  sayfalarından deneyimlerinizi paylaşabilirsiniz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse16"
                  aria-expanded="false"
                  aria-controls="collapse16"
                >
                  Ürünleriniz stokta tükenirse ne yapmalıyız?
                </button>
              </h2>
              <div
                id="collapse16"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Bazı ürünler sınırlı sayıda üretiliyor. Stoklar tükenirse
                  talep formu doldurabilirsiniz; talep doğrultusunda tekrar
                  üretim yapabiliriz.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button shadow-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse17"
                  aria-expanded="false"
                  aria-controls="collapse17"
                >
                  Neden sizi tercih etmeliyim?
                </button>
              </h2>
              <div
                id="collapse17"
                class="accordion-collapse collapse"
                data-bs-parent="#shopAccordion"
              >
                <div class="accordion-body">
                  Çünkü biz sadece ürün satmıyoruz, insanlara eğlence ve neşe
                  taşıyoruz. Alışverişinize biraz mizah katmak istiyorsanız
                  doğru yerdesiniz!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SSS;
