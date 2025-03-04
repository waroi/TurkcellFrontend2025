
const About = () => {
  return (
    <main>
      <section className="who-are-we-section py-5 bg-white">
        <div className="container">
          <div className="who-are-we">
            <h2 className="text-primary fs-2 fw-bold">Biz Kimiz?</h2>
            <div className="items text-info mt-5">
              <div
                className="d-flex justify-content-start align-items-start gap-3 mb-3"
              >
                <i className="fa-regular fa-clock fs-2 text-primary"></i>
                <p className="align-items-start justify-content-center fs-5">
                  1973 yılından bu yana misyonumuz, müşterilerimize ve iş
                  ortaklarımıza kusursuz bir e-ticaret deneyimi sunarak tüm
                  ülkede pozitif etki yaratmak.
                </p>
              </div>
              <div
                className="d-flex justify-content-start align-items-start gap-3 mb-3"
              >
                <i className="fa-solid fa-dumpster fs-2 text-primary"></i>
                <p className="align-items-start justify-content-center fs-5">
                  Yaklaşık 10 milyon müşterimizin güveni, bizi Türkiye'nin ve
                  dünyanın en sevilen e-ticaret platformlarından biri yaptı.
                </p>
              </div>
              <div
                className="d-flex justify-content-start align-items-start gap-3 mb-3"
              >
              <i className="fa-solid fa-face-grin-stars fs-2 text-primary"></i>
                <p className="align-items-end justify-content-center fs-5">
                  Toplumda pozitif etki yaratmak kültürümüzün en temel
                  taşlarından biri. İş ortaklarımızın dijitalleşmesini
                  sağlayarak, yerel üreticileri güçlendirerek, kadınların
                  dijital ekonomiye ve üretime katılımını savunarak pozitif
                  etkimizin sürdürülebilirliğini hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="degerler">
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4 px-5 ">
              <div className="card deger deger-1 d-flex flex-column align-items-center justify-content-center px-2 bg-primary text-light">
                <h4 className="fw-bold fs-3 pb-2">Müşterimiz için varız</h4>
                <p>
                  Bizim var olma nedenimiz müşterimiz! Her an, bütün
                  kararlarımızda önce müşterimizi düşünüyoruz. Müşterilerimizin
                  en iyi deneyimi yaşamaları için çabalıyoruz.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-5 ">
              <div className="card deger deger-2 d-flex flex-column align-items-center justify-content-center px-2 bg-secondary text-light">
                <h4 className="fw-bold fs-3 pb-2">Biz bir Ekibiz</h4>
                <p>
                  Başarının tek yolu ekip çalışması! Kendimizi asla takımın
                  önüne koymuyoruz. Ekip olarak aynı hedefe koşuyor, birbirimize
                  güveniyor ve destek oluyoruz.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-5 ">
              <div className="card deger deger-3 d-flex flex-column align-items-center justify-content-center px-2 bg-danger text-light">
                <h4 className="fw-bold fs-3 pb-2">Samimi ve Mütevazıyız</h4>
                <p>
                  Bizde ego, title ve hiyerarşi yok! Açık ve net iletişim
                  kuruyoruz. Birbirimize güveniyor, iyi dinliyor ve varsayım
                  yapmıyoruz. Bizim için sorumluluk almak ve işlerimizi sonuca
                  götürmek hiyerarşiden daha önemli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About