import React from "react";

export default function Contact() {
  return (
    <>
      <section class="contact-us" id="contact-us">
        <div class="overlay">
          <div class="container py-4">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <form
                  action="#"
                  class="p-3 bg-white needs-validation"
                  novalidate
                >
                  <h2 class="h4 text-primary text-center mb-3">Bize Ulaşın</h2>
                  <div class="row form-group">
                    <div class="col-md-6 mb-2 mb-md-0">
                      <label class="text-black" for="fname">
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="fname"
                        class="form-control rounded-0"
                        required
                      />
                      <div class="invalid-feedback">Lütfen adınızı girin.</div>
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="lname">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        id="lname"
                        class="form-control rounded-0"
                        required
                      />
                      <div class="invalid-feedback">
                        Lütfen soyadınızı girin.
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12 mb-2">
                      <label class="text-black" for="email">
                        Mail Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="form-control rounded-0"
                        required
                      />
                      <div class="invalid-feedback">
                        Lütfen geçerli bir e-posta adresi girin.
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12 mb-2">
                      <label class="text-black" for="subject">
                        Konu
                      </label>
                      <input
                        type="text"
                        id="subject"
                        class="form-control rounded-0"
                        required
                      />
                      <div class="invalid-feedback">Lütfen konuyu girin.</div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12 mb-2">
                      <label class="text-black" for="message">
                        Mesaj
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        class="form-control rounded-0"
                        placeholder="Mesajınızı buraya yazabilirsiniz..."
                        required
                      ></textarea>
                      <div class="invalid-feedback">
                        Lütfen mesajınızı yazın.
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Gönder"
                        class="btn btn-primary mr-2 mb-2"
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
