import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-us" id="contactUs">
        <div className="overlay">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form
                  action="#"
                  className="p-3 bg-white needs-validation"
                  novalidate
                >
                  <h2 className="h4 text-primary text-center mb-3">
                    Bize Ulaşın
                  </h2>
                  <div className="row form-group">
                    <div className="col-md-6 mb-2 mb-md-0">
                      <label className="text-black" for="fname">
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="fname"
                        className="form-control rounded-0"
                        required
                      />
                      <div className="invalid-feedback">
                        Lütfen adınızı girin.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black" for="lname">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        id="lname"
                        className="form-control rounded-0"
                        required
                      />
                      <div className="invalid-feedback">
                        Lütfen soyadınızı girin.
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12 mb-2">
                      <label className="text-black" for="email">
                        Mail Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control rounded-0"
                        required
                      />
                      <div className="invalid-feedback">
                        Lütfen geçerli bir e-posta adresi girin.
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12 mb-2">
                      <label className="text-black" for="subject">
                        Konu
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control rounded-0"
                        required
                      />
                      <div className="invalid-feedback">
                        Lütfen konuyu girin.
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12 mb-2">
                      <label className="text-black" for="message">
                        Mesaj
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        className="form-control rounded-0"
                        placeholder="Mesajınızı buraya yazabilirsiniz..."
                        required
                      ></textarea>
                      <div className="invalid-feedback">
                        Lütfen mesajınızı yazın.
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        value="Gönder"
                        className="btn btn-primary mr-2 mb-2"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
