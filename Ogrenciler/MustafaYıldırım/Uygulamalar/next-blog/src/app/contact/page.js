const Contact = () => {
  return (
    <>
      <div className="bg-white">
        {/* Header */}
        <header className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="display-4 fw-bold mb-3">Bize Ulaşın</h1>
                <p className="lead text-muted">
                  Sorularınız, geri bildirimleriniz mi var veya bizimle çalışmak
                  mı istiyorsunuz? Sizden haber almak isteriz!
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Contact Form & Info */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <h2 className="h3 fw-bold mb-4">Bize mesaj gonder</h2>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        required
                      >
                        <option value="">Bir konu seçin</option>
                        <option value="General Inquiry">Genel Sorgu</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Partnership">Partnerlik</option>
                        <option value="Guest Post">Misafir Yazısı</option>
                        <option value="Other">Diger</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Mesajın
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-dark">
                        Mesaj Gönder <i className="bi bi-send ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-5">
                <h2 className="h3 fw-bold mb-4">İletişim Bilgileri</h2>

                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0 text-dark fs-4">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h3 className="h5 fw-bold mb-1">
                          Bize e-posta gönderin
                        </h3>
                        <p className="mb-0">
                          <a
                            href="mailto:info@melam.com"
                            className="text-decoration-none text-muted"
                          >
                            info@melam.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0 text-dark fs-4">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h3 className="h5 fw-bold mb-1">Bizi arayın</h3>
                        <p className="mb-0">
                          <a
                            href="tel:+1234567890"
                            className="text-decoration-none text-muted"
                          >
                            +90 (212) 123 45 67
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0 text-dark fs-4">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h3 className="h5 fw-bold mb-1">Bizi ziyaret edin</h3>
                        <p className="text-muted mb-0">
                          Aydınevler, 34854
                          <br />
                          Maltepe/İstanbul
                          <br />
                          Turkiye
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <h2 className="h3 fw-bold mb-3">Konumumuz</h2>
                <p className="text-muted">
                  Istanbul'un teknoloji bölgesinin kalbinde yer alıyoruz.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="ratio ratio-21x9 rounded overflow-hidden shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.1923287917125!2d29.113385383242893!3d40.95536534884566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac68ac20c7763%3A0xf62be475c4c59cb6!2zVHVya2NlbGwgS8O8w6fDvGt5YWzEsSBQbGF6YSBHZW5lbCBNw7xkw7xybMO8aw!5e0!3m2!1str!2str!4v1741776101902!5m2!1str!2str"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
