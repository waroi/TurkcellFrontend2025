'use client';
import React, { useState } from 'react';
import '../../styles/main.scss'; 



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    setFormStatus('Mesajınız başarıyla gönderildi!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
  
      <section className="hero-section bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">İletişim</h1>
          <p className="lead">Bizimle iletişime geçmek çok kolay! Aşağıdaki formu doldurun veya direkt olarak bizimle iletişime geçin.</p>
        </div>
      </section>

 
      <section className="contact-info py-5">
        <div className="container text-center">
          <h2 className="mb-4">Bize Ulaşın</h2>
          <p>Email: <a href="mailto:info@chic-cart.com">info@chic-cart.com</a></p>
          <p>Telefon: +90 123 456 78 90</p>
          <p>Adres: Chic-Cart, Moda Caddesi, İstanbul, Türkiye</p>
        </div>
      </section>

 
      <section className="contact-form py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Bize Mesaj Gönderin</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Adınız</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email Adresiniz</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="message" className="form-label">Mesajınız</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">Gönder</button>
              </div>
            </div>
          </form>

          {formStatus && <div className="alert alert-success mt-4 text-center">{formStatus}</div>}
        </div>
      </section>

    </div>
  );
};

export default Contact;
