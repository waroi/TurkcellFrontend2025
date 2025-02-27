import React from "react";

const DetailContent = ({ wing }) => {
  return (
    <section className="product-details py-5">
      <div className="container">
        <h3 className="mb-3 text-info fw-bold">Ürün Detayları</h3>
        <div
          className="accordion position-relative"
          id="accordionProductDetail"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Performans Özellikleri
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionProductDetail"
            >
              <div className="accordion-body">
                <ul className="list-unstyled fw-medium">
                  <li className="text-secondary d-flex flex-wrap align-items-center mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Uçuş Kapasitesi:
                    </h6>
                    {wing.performance_features.flight_capacity}
                  </li>
                  <li className="text-secondary d-flex flex-wrap align-items-center mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Taşıma Kapasitesi:
                    </h6>
                    {wing.performance_features.load_capacity}
                  </li>
                  <li className="text-secondary d-flex align-items-top mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Uçuş Süresi:
                    </h6>
                    {wing.performance_features.flight_duration}
                  </li>
                  <li className="text-secondary d-flex align-items-center mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">Hız:</h6>
                    {wing.performance_features.speed}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Teknolojik Özellikler
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionProductDetail"
            >
              <div className="accordion-body">
                <ul className="list-unstyled fw-medium">
                  <li className="text-secondary d-flex flex-wrap align-items-center mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Hava Akımı Yönetimi:
                    </h6>
                    {wing.technological_features.airflow_management}
                  </li>
                  <li className="text-secondary d-flex flex-wrap align-items-center mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Estetik:
                    </h6>
                    {wing.technological_features.aesthetic}
                  </li>
                  <li className="text-secondary d-flex flex-wrap align-items-top mb-2">
                    <h6 className="text-info fw-semibold mb-0 me-2">
                      Bakım Gereksinimi:
                    </h6>
                    {wing.technological_features.maintenance}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold text-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Özel Notlar!
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionProductDetail"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li className="text-secondary d-flex align-items-center mb-2">
                    <h6 className="text-info mb-0 me-2">
                      İlk uçuşta bir eğitmen eşliğinde deneme yapılması tavsiye
                      edilir.
                    </h6>
                  </li>
                  <li className="text-secondary d-flex align-items-center mb-2">
                    <h6 className="text-info mb-0 me-2">
                      Kanatlar, gökyüzünde maksimum konfor ve kontrol sağlamak
                      üzere geliştirilmiştir.
                    </h6>
                  </li>
                  <li className="text-secondary d-flex align-items-top mb-2">
                    <h6 className="text-info mb-0 me-2">
                      Belirtilen sınırlamalar dışarısında kullanmayaınız!
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
