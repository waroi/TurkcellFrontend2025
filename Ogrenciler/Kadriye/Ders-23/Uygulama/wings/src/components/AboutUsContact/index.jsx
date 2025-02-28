import React from "react";

const AboutUsContact = () => {
  return (
    <section className="contact my-5">
      <div className="container">
        <h3 className="text-center fw-bold text-info mb-3 fs-2">
          İletişim Formu
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              className="row g-3 needs-validation rounded my-4 p-3"
              noValidate
            >
              <div className="col-md-6">
                <label for="validationName" className="form-label text-info">
                  Adınız
                </label>
                <input
                  type="text"
                  className="form-control border border-primary border-opacity-50"
                  id="validationName"
                  required
                />
                <div className="invalid-feedback">Lütfen adınızı yazınız.</div>
              </div>
              <div className="col-md-6">
                <label for="validationSurname" className="form-label text-info">
                  Soyadınız
                </label>
                <input
                  type="text"
                  className="form-control border border-primary border-opacity-50"
                  id="validationSurname"
                  required
                />
                <div className="invalid-feedback">
                  Lütfen soyadınızı yazınız.
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationMail" className="form-label text-info">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border border-primary border-opacity-50"
                  id="validationMail"
                  required
                />
                <div className="invalid-feedback">
                  Lütfen mailinizi giriniz.
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationCountry" className="form-label text-info">
                  Şehir
                </label>
                <input
                  type="text"
                  className="form-control border border-primary border-opacity-50"
                  id="validationCountry"
                  required
                />
                <div className="invalid-feedback">
                  Lütfen yaşadığınız şehri yazınız
                </div>
              </div>
              <div className="col-12">
                <label for="validationSubject" className="form-label text-info">
                  Konu
                </label>
                <input
                  type="text"
                  className="form-control border border-primary border-opacity-50"
                  id="validationSubject"
                  required
                />
                <div className="invalid-feedback">
                  Lütfen bahsetmek istediğiniz konuyu belirtiniz
                </div>
              </div>
              <div className="col-12">
                <label className="form-label text-info">Mesaj</label>
                <textarea
                  className="form-control border border-primary border-opacity-50"
                  rows="3"
                  placeholder="Lütfen mesajınızı yazınız"
                ></textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input border border-primary border-opacity-50"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="form-check-label text-info"
                    for="invalidCheck"
                  >
                    Koşulları kabul ediyorum.
                  </label>
                  <div className="invalid-feedback">
                    Koşulları kabul ediniz.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-secondary" type="submit">
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContact;
