import logoLeft from "../../../public/images/l-3.png";
import logoRight from "../../../public/images/l-2.png";
import { NavLink } from "react-router";
const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger sticky-top top-0 py-0">
        <div className="container align-items-center">
          <a
            className="navbar-brand d-flex align-items-center text-white text-uppercase p-0"
            href="./index.html"
          >
            <img src={logoLeft} alt="logo left" height={50} />

            <h2 className="m-0">Wings</h2>
            <img src={logoRight} alt="logo right" height={50} />
          </a>
          <button
            className="navbar-toggler py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end h-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item position-relative">
                <NavLink
                  to="/"
                  className="nav-link active text-white text-uppercase h-100 py-3"
                >
                  <i className="fa-solid fa-house me-1"></i> Anasayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-link text-white text-uppercase py-3"
                >
                  <i className="fa-regular fa-address-card me-1"></i>
                  Hakkımızda
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white text-uppercase py-3"
                  href="#products"
                >
                  <i className="fa-solid fa-list me-1"></i>
                  Ürünler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase py-3">
                  <i className="fas fa-heart me-1"></i> Favorilerim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase py-3">
                  <i className="fas fa-basket-shopping me-1"></i> Sepet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase py-3">
                  <i className="fas fa-user me-1"></i> Profil
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-info h-100 rounded-0"
                  data-bs-toggle="modal"
                  data-bs-target="#SSSModal"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=6651&format=png&color=ffffff"
                    alt="SSS image"
                    height={50}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="SSSModal"
        tabIndex="-1"
        aria-labelledby="SSSModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h1 className="modal-title text-info" id="SSSModalLabel">
                Sıkça Sorulan Sorular
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="accordion" id="accordionSSS">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. Kanatlar nasıl çalışır?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      Kanatlar, satın alındıktan sonra size özel bir entegrasyon
                      süreciyle birleşir. Bu işlem tamamen acısızdır ve kısa
                      sürer. Kanatlar, vücut kaslarınızla senkronize çalışarak
                      uçma yeteneği sağlar.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Uçmaya hemen başlayabilir miyim?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      İlk defa uçacak kullanıcılarımız için bir eğitim rehberi
                      ve başlangıç ipuçları sunuyoruz. Kanatlarınızı test
                      ederken güvenli bir alanda pratik yapmanızı öneriyoruz.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. Kanatlar dayanıklı mı?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      Evet, kanatlar son teknoloji malzemelerden üretilmiştir.
                      Hava koşullarına dayanıklıdır ve uzun ömürlüdür. Ancak,
                      bakım kılavuzundaki talimatları takip etmeniz önerilir.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. Kanatların boyutu kişiye özel mi?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      Evet, kanatlar vücut ölçülerinize ve uçuş ihtiyaçlarınıza
                      göre tasarlanır. Sipariş sırasında gerekli bilgileri
                      girmeniz yeterlidir.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      5. Kanatlarla ne kadar yük taşıyabilirim?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      Kanatlarınızın taşıma kapasitesi, seçtiğiniz model ve
                      tasarıma göre değişir. Standart kanat modellerimiz 10-15
                      kg ek yük taşıyabilir.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed text-info fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      6. Kanatlar güvenli mi?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionSSS"
                  >
                    <div className="accordion-body">
                      Evet, kanatlarımız güvenlik testlerinden geçmiştir. Ancak
                      uçarken çevre koşullarını dikkate almanız ve güvenlik
                      kurallarına uymanız önemlidir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
