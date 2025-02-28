import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <section class="container mb-5">
          <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html" class="text-decoration-none text-black">
                  Ana Sayfa
                </a>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                İletişim
              </li>
            </ol>
          </nav>
          <div class="row">
            <form
              class="col-md-8 d-flex flex-column gap-3 needs-validation"
              novalidate
            >
              <h4 class="mb-4 fw-semibold my-5">İletişim Formu</h4>
              <div class="row g-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomName"
                    placeholder="İsim"
                    required
                  />
                  <div class="invalid-feedback">Lütfen adınızı giriniz.</div>
                </div>
                <div class="col-md-6">
                  <input
                    type="tel"
                    class="form-control"
                    id="validationCustomPhone"
                    placeholder="Telefon"
                    pattern="05[0-9]{9}"
                    required
                  />
                  <div class="invalid-feedback">
                    Lütfen geçerli bir telefon numarası giriniz.
                  </div>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="validationCustomEmail"
                    placeholder="E-mail"
                    required
                  />
                  <div class="invalid-feedback">
                    Lütfen geçerli bir e-posta adresi giriniz.
                  </div>
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomSubject"
                    placeholder="Konu"
                    required
                  />
                  <div class="invalid-feedback">Lütfen bir konu giriniz.</div>
                </div>
              </div>
              <div class="col-12 mb-4">
                <textarea
                  class="form-control contact-textarea"
                  id="validationCustomMessage"
                  rows="10"
                  placeholder="Mesaj"
                  required
                ></textarea>
                <div class="invalid-feedback">Lütfen bir mesaj giriniz.</div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Gönder
                </button>
              </div>
            </form>
            <div class="col-md-4 g-3">
              <h4 class="mb-4 fw-semibold my-5">Destek ve İletişim</h4>
              <address class="text-black d-flex flex-column gap-4">
                <div class="d-flex align-items-center gap-3">
                  <i class="fa-solid fa-phone fs-5"></i>
                  +90 555 555 55 55
                </div>
                <div class="d-flex align-items-center gap-3">
                  <i class="fa-solid fa-clock fs-5"></i>
                  Pazartesi-Cuma: 09:00-17:00
                </div>
                <div class="d-flex align-items-center gap-3">
                  <i class="fa-solid fa-envelope fs-5"></i>
                  korhanemirhann@gmail.com
                </div>
                <div class="d-flex align-items-center gap-3">
                  <i class="fa-solid fa-location-dot fs-5"></i>
                  Kazım Karabekir Mahallesi, Şehit Ali Gaffar Okkan Sokak, No:
                  12/A, Çamlıpark Evleri, Blok: B, Kat: 5, Daire: 18, Bağcılar
                  İlçesi, İstanbul, Türkiye, Posta Kodu: 34200
                </div>
              </address>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
