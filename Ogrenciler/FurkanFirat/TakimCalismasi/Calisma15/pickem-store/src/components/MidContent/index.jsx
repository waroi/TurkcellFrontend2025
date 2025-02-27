import Header from "../Header";

function MidContent() {
  return (
    <section className="mid-content">
      <section className="stats section-header mb-10">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 align-items-center">
              <h2 className="fw-bold text-gold">1000+</h2>
              <p className="text-white-gold">Aktif Oyuncu</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold text-gold">500+</h2>
              <p className="text-white-gold">Başarılı İşlem</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold text-gold">50+</h2>
              <p className="text-white-gold">Takım</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold text-gold">10K+</h2>
              <p className="text-white-gold">Mutlu Müşteri</p>
            </div>
          </div>
        </div>
      </section>
      <section className="who-are-we container">
        <div className="bg-extra-dark-purple text-white card mb-10 p-5">
          <h2 className="mb-4 fw-bold">
            BİZ <span className="text-header-purple">KİMİZ?</span>
          </h2>
          <p>
            Pick'em Store, 2025 yılında CS:2 tutkunları tarafından kurulmuş,
            oyun dünyasının en büyük pazaryeri olmayı hedefleyen bir
            platformdur. Profesyonel espor oyuncularının, özel silahların ve
            ekipmanların alım-satımını güvenli ve şeffaf bir şekilde
            gerçekleştiriyoruz.
          </p>
        </div>
      </section>
      {/* Faq */}
      <section className="faq container">
        <div className="bg-extra-dark-purple text-white card mb-10 p-5">
          <h2 className="mb-4 fw-bold">
            <span className="text-header-purple">
              <i className="bi bi-question-circle pe-3"></i>
            </span>
            SIKÇA <span className="text-header-purple">SORULAN</span>
            SORULAR <span className="text-header-purple">(S.S.S)</span>
          </h2>
          <div className="sss-inner row g-0">
            <div className="sss-image col-md-6">
              <img
                src="https://fossbytes.com/wp-content/uploads/2022/01/All-esports-teams-1024x576.jpg"
                alt="E-sport Teams"
                className="img-fluid"
              />
            </div>
            <div
              className=" accordion col-md-6 align-items-center"
              id="sssAcordion"
            >
              <div className="accordion-item">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Pick'em Store'da nasıl sipariş verebilirim?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#sssAcordion"
                >
                  <div className="accordion-body">
                    Sipariş vermek için bir ürün seçin, ardından{" "}
                    <stron text-nowrapg>Mesaj Gönder</stron> butonuna tıklayın.
                    Sepetinize eklediğiniz ürünleri kontrol ettikten sonra ödeme
                    adımlarını tamamlayabilirsiniz.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Aldığım XANTARES adam vuramazsa ne yapabilirim?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sssAcordion"
                >
                  <div className="accordion-body">
                    Merak etmeyin, <strong>XANTARES</strong>'in PEEK'leri her
                    zaman yerindedir! Ama yine de olmadıysa damar kontrolü
                    yapın.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Hile satışınız var mı?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sssAcordion"
                >
                  <div className="accordion-body">
                    <strong>☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Takım arkadaşım sürekli flash atıyorsa ne yapmalıyım?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sssAcordion"
                >
                  <div className="accordion-body">
                    Takım arkadaşınızı en yakın gözlükçüye yönlendirin!
                    Flash’lar sizin için değil, rakipler için atılıyor
                    olmalıydı.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Destek almak için nasıl iletişim kurabilirim?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sssAcordion"
                >
                  <div className="accordion-body">
                    Bize e-posta veya canlı destek hattından ulaşabilirsiniz.
                    <strong>info@pickemstore.com</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Xantares Peek */}
      <section className="xantares-peek">
        <div className="section-header text-center mb-10">
          <h1 className="fs-36">
            {" "}
            DİKKAT <span className="text-header-purple">XANTARES</span>PEEK{" "}
            <span className="text-header-purple">ÇIKABİLİR</span>{" "}
            <i className="bi bi-exclamation-triangle"></i>
          </h1>
        </div>
        <div className="container text-center position-relative">
          <img src="/xantares-peek.png" alt="XANTARES" className="xantares" />
          <img
            src="https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/330x192"
            alt="csgo-case"
            className="box"
          />
        </div>
      </section>
      <Header text={"İLETİŞİM"} />
    </section>
  );
}

export default MidContent;
