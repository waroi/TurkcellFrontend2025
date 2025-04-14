'use client';
import React, { useState } from 'react';
import '../../styles/main.scss'; 
import faqData from '@/data/faqData';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <section className="hero-section bg-info text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Sıkça Sorulan Sorular</h1>
          <p className="lead">Chic-Cart hakkında merak ettiklerinizi aşağıda bulabilirsiniz.</p>
        </div>
      </section>

      <section className="search-section py-4 bg-light">
        <div className="container">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Bir soru arayın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="faq-section py-5">
        <div className="container">
          {filteredFaqs.length > 0 ? (
            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button d-flex justify-content-between align-items-center ${
                        activeIndex === index ? '' : 'collapsed'
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={activeIndex === index}
                      aria-controls={`collapse${index}`}
                      onClick={() => handleToggle(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">Aradığınız soruya ait bir içerik bulunamadı.</p>
          )}
        </div>
      </section>

  
    </div>
  );
};

export default FAQ;

