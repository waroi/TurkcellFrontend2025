export default function Contact() {
  return (
    <>
      <div className="container my-5" id="Contact">
        <h2 className="text-center mb-4">Bize Ulaşın</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4>Contact Form</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Contact Information</h4>
              <address>
                <p>
                  <strong>Address: </strong>Istanbul, Türkiye
                </p>
                <p>
                  <strong>Phone: </strong>
                  <a
                    href="tel:+905325320532"
                    className="text-decoration-none text-body"
                  >
                    +90 532 532 0532
                  </a>
                </p>
                <p>
                  <strong>Email: </strong>
                  <a
                    href="mailto:turkcellsatis@hs03.kep.tr"
                    className="text-decoration-none text-body"
                  >
                    turkcellsatis@hs03.kep.tr
                  </a>
                </p>
              </address>

              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.193571428105!2d29.112446978752494!3d40.95533812432217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac68ac20c7763%3A0xf62be475c4c59cb6!2zVHVya2NlbGwgS8O8w6fDvGt5YWzEsSBQbGF6YSBHZW5lbCBNw7xkw7xybMO8aw!5e0!3m2!1str!2str!4v1740146261107!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
