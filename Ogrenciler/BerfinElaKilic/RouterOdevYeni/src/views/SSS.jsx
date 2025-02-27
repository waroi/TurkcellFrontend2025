import React from "react";

const SSS = () => {
  return (
    <main>
      <section className="search-seaction my-5">
        <div className="container">
          <div className="search-content">
            <h2 className="mb-4 text-secondary my-3">
              Sana Nasıl Yardımcı Olabiliriz?
            </h2>
            <form className="d-flex search-bar position-relative" role="search">
              <i className="fa-solid fa-magnifying-glass position-absolute text-secondary"></i>
              <input
                className="form-control me-5 text-info search-input"
                type="search"
                placeholder="Yardım almak istediğin konuyu ara..."
                aria-label="Search"
              />
              <button className="btn btn-secondary px-5 text-light" type="submit">
                Ara
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="sss">
        <div className="container my-5 py-5">
          <h2 className="text-center mb-5 text-secondary">Sıkça Sorulan Sorular</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse1"
                  aria-expanded="true"
                  aria-controls="faqCollapse1"
                >
                  Soru 1: Yeni hayatım ne zaman başlayacak?
                </button>
              </h2>
              <div
                id="faqCollapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="faqHeading1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yeni hayatınız, mevcut yaşam döngünüz sona erdiğinde devreye
                  girer. Reenkarnasyon süreci tamamlandığında, yeni hayatınızla
                  ilgili detaylar ve yönlendirmeler size aktarılacaktır.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse2"
                  aria-expanded="false"
                  aria-controls="faqCollapse2"
                >
                  Soru 2: Birden fazla hayat satın alabilir miyim?
                </button>
              </h2>
              <div
                id="faqCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Evet, birden fazla hayat satın alabilirsiniz. Bu, özellikle
                  birden fazla deneyim yaşamak isteyen ruhlar için popüler bir
                  seçenektir. Ancak, her hayat arasındaki karmik dengenizi
                  korumanız önemlidir.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse3"
                  aria-expanded="false"
                  aria-controls="faqCollapse3"
                >
                  Soru 3: Hayatımı iade edebilir miyim veya değiştirebilir
                  miyim?
                </button>
              </h2>
              <div
                id="faqCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Reenkarnasyonun doğası gereği, bir hayat satın alındıktan ve
                  başlandıktan sonra iade edilemez. Ancak, bazı durumlarda
                  hayatınızın yönünü değiştirmek için rehberlik hizmeti
                  alabilirsiniz.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse4"
                  aria-expanded="false"
                  aria-controls="faqCollapse4"
                >
                  Soru 4: Herhangi bir garanti veriyor musunuz?
                </button>
              </h2>
              <div
                id="faqCollapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Tabi ki... Ömür boyu garanti sağlıyoruz ve sakın korkmayın siz
                  öldükten sonra bizler sizi unutmuyor ve tüm işlemlerinizi siz
                  doğmadan hazırlıyoruz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SSS;
