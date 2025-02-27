import React from "react";

function Form() {
  return (
    <>
      <section className="contact-us container-fluid py-10 text-white">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <form
            className="contact-us-form needs-validation col-10 col-sm-8 col-xxl-6 p-5 bg-extra-dark-purple rounded shadow"
            noValidate
          >
            <h4 className="mb-4 p-2">
              İLETİŞİM <span className="text-header-purple">FORMU</span>{" "}
            </h4>
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6 p-2">
                <label htmlFor="firstName">Ad</label>
                <input
                  className="col-12 form-control text-white"
                  type="text"
                  id="firstName"
                  required
                />
                <div className="valid-feedback">İyi görünüyor!</div>
                <div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
              </div>
              <div className="col-md-6 col-12 p-2">
                <label htmlFor="lastName">Soyad</label>
                <input
                  className="col-12 form-control"
                  type="text"
                  id="lastName"
                  required
                />
                <div className="valid-feedback">İyi görünüyor!</div>
                <div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
              </div>
            </div>
            <div className="col-md-12 col-12 p-2">
              <label htmlFor="email">Email</label>
              <input
                className="col-12 form-control"
                type="email"
                id="email"
                required
              />
              <div className="valid-feedback">İyi görünüyor!</div>
              <div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
            </div>
            <div className="col-md-12 col-12 p-2">
              <label htmlFor="subject">Konu</label>
              <input
                className="col-12 form-control"
                type="subject"
                id="subject"
                required
              />
              <div className="valid-feedback">İyi görünüyor!</div>
              <div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
            </div>
            <div className="col-md-12 col-12 p-2">
              <label htmlFor="txtMessage">Mesaj</label>
              <textarea
                name="message"
                cols="30"
                rows="7"
                className="col-12 form-control"
                type="text"
                id="txtMessage"
                placeholder="Mesajınızı buraya yazın..."
                required
              ></textarea>
              <div className="valid-feedback">İyi görünüyor!</div>
              <div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
            </div>
            <div className="col-12 p-2">
              <button
                className="py-2 px-3 btn btn-primary text-white"
                type="submit"
              >
                Mesaj Gönder
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
