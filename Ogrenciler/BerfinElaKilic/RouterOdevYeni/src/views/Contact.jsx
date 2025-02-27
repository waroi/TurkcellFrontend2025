const Contact = () => {
  return (
    <main>
      <section className="search-section mt-5">
        <div className="container">
          <div className="search-content text-center">
            <h2 className="mb-4 text-secondary">
              Sana Nasıl Yardımcı Olabiliriz?
            </h2>
            <form className="d-flex search-bar position-relative">
              <i className="fa-solid fa-magnifying-glass position-absolute text-secondary"></i>
              <input
                className="form-control me-5 text-info search-input"
                type="search"
                placeholder="Yardım almak istediğin konuyu ara..."
                aria-label="Search"
              />
              <button
                className="btn btn-secondary px-5 text-light"
                type="submit"
              >
                Ara
              </button>
            </form>
          </div>
        </div>
      </section>
      <section
        className="contact-us overlay w-100 position-relative"
        id="contact"
      >
        <div className="container">
          <div className="mb-5 text-center pt-5">
            <h2 className="section-title text-white position-relative">
              Contact Us
            </h2>
          </div>
          <div className="row justify-content-center position-relative">
            <div className="col-lg-7 mb-5">
              <form
                action="#"
                className="p-5 needs-validation bg-light text-info"
                noValidate
              >
                <h2 className="h4 text-secondary mb-5">İletişim Formu</h2>
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0 pb-3">
                    <label className="text-black" htmlFor="fname">
                      İsim
                    </label>
                    <input
                      type="text"
                      id="fname"
                      className="form-control rounded-0"
                      required
                    />
                    <div className="valid-feedback">Çok iyi!</div>
                    <div className="invalid-feedback">
                      Lütfen isminizi girin.
                    </div>
                  </div>
                  <div className="col-md-6 pb-3">
                    <label className="text-black" htmlFor="lname">
                      Soyisim
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control rounded-0"
                      required
                    />
                    <div className="valid-feedback">Çok iyi!</div>
                    <div className="invalid-feedback">
                      Lütfen soyisminizi girin.
                    </div>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12 pb-3">
                    <label className="text-black" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control rounded-0"
                      required
                    />
                    <div className="valid-feedback">Çok iyi!</div>
                    <div className="invalid-feedback">
                      Lütfen geçerli mail adresi girin.
                    </div>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12 pb-3">
                    <label className="text-black" htmlFor="subject">
                      Konu
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      className="form-control rounded-0"
                      required
                    />
                    <div className="valid-feedback">Çok iyi!</div>
                    <div className="invalid-feedback">Lütfen konuyu girin.</div>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12 pb-3">
                    <label className="text-black pb-2" htmlFor="message">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control rounded-0"
                      required
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                    ></textarea>
                    <div className="valid-feedback">Çok iyi!</div>
                    <div className="invalid-feedback">
                      Lütfen mesajınızı yazın.
                    </div>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-secondary text-light mr-2 mb-2 rounded-pill px-3 py-2 fs-6"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
