import Footer from "../src/components/Footer";

export default function AboutView() {
  return <>


<main className="main-section">
       
        <header className="mt-20">
            <div className="container-fluid py-5 text-white text-center">
                <h1 className="fw-bold"><i className="bi bi-info-circle"></i> HAKKIMIZDA</h1>
                <p className="lead">CS:2 Dünyasının Özel Alışveriş Platformu</p>
            </div>
        </header>
        <section className="mission-vision container">
            <div className="row mb-10 g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm bg-extra-dark-purple">
                        <div className="card-body p-4 text-white">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-bullseye text-secondary me-3"></i>
                                <h3 className="card-title mb-0 fw-bold">Misyonumuz</h3>
                            </div>
                            <p className="card-text">CS:2 tutkunlarına özel, benzersiz bir alışveriş deneyimi sunarak espor
                                dünyasının en değerli oyuncularını, silahlarını ve ekipmanlarını erişilebilir kılmak.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm bg-extra-dark-purple">
                        <div className="card-body p-4 text-white">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-eye text-secondary me-3"></i>
                                <h3 className="card-title mb-0 fw-bold">Vizyonumuz</h3>
                            </div>
                            <p className="card-text">Espor ekosisteminde lider platform olarak, oyuncular ve taraftarlar
                                arasında köprü kurmak ve CS:2 topluluğunu güçlendirmek.</p>
                        </div>
                    </div>
                </div>
            </div>

           
            <section className="stats card section-header mb-10">
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

          
            <section className="who-are-we bg-extra-dark-purple text-white card mb-10 p-5">
                <h2 className="mb-4 fw-bold">BİZ <span className="text-header-purple">KİMİZ?</span></h2>
                <p>Pick'em Store, 2025 yılında CS:2 tutkunları tarafından kurulmuş, oyun dünyasının
                    en
                    büyük pazaryeri olmayı hedefleyen bir platformdur. Profesyonel espor oyuncularının, özel
                    silahların ve ekipmanların alım-satımını güvenli ve şeffaf bir şekilde gerçekleştiriyoruz.
                </p>
            </section>

         
            <section className="bottom-cards row g-4 mb-10">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm bg-extra-dark-purple">
                        <div className="card-body text-center p-4">
                            <i className="bi bi-shield-check text-secondary fs-28 mb-3"></i>
                            <h4 className="card-title fw-bold text-white">Güvenli <span
                                    className="text-header-purple">Alışveriş</span>
                            </h4>
                            <p className="card-text text-white">%100 güvenli ödeme sistemi ve garantili teslimat ile
                                hizmetinizdeyiz.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm bg-extra-dark-purple ">
                        <div className="card-body text-center p-4">
                            <i className="bi bi-trophy text-secondary fs-28 mb-3"></i>
                            <h4 className="card-title fw-bold text-white">Pro <span
                                    className="text-header-purple">Oyuncular</span></h4>
                            <p className="card-text text-white">Dünyanın en iyi CS:2 oyuncularına erişim imkanı
                                sunuyoruz.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm bg-extra-dark-purple ">
                        <div className="card-body text-center p-4">
                            <i className="bi bi-headset text-secondary fs-28 mb-3"></i>
                            <h4 className="card-title fw-bold text-white">7/24 <span
                                    className="text-header-purple">Destek</span></h4>
                            <p className="card-text text-white">Uzman müşteri hizmetleri ekibimiz her zaman yanınızda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </main>
    <Footer/>
  </>;
}
