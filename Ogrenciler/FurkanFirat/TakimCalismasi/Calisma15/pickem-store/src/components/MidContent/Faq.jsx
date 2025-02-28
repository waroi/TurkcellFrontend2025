export default function Faq() {
  return (
    <section className='faq container'>
      <div className='bg-extra-dark-purple text-white card mb-10 p-5'>
        <h2 className='mb-4 fw-bold'>
          <span className='text-header-purple'>
            <i className='bi bi-question-circle pe-3'></i>
          </span>
          SIKÇA <span className='text-header-purple'>SORULAN</span>
          SORULAR <span className='text-header-purple'>(S.S.S)</span>
        </h2>
        <div className='sss-inner row g-0'>
          <div className='sss-image col-md-6'>
            <img
              src='https://fossbytes.com/wp-content/uploads/2022/01/All-esports-teams-1024x576.jpg'
              alt='E-sport Teams'
              className='img-fluid'
            />
          </div>
          <div
            className=' accordion col-md-6 align-items-center'
            id='sssAcordion'
          >
            <div className='accordion-item'>
              <h2 className='accordion-header '>
                <button
                  className='accordion-button fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  Pick'em Store'da nasıl sipariş verebilirim?
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                data-bs-parent='#sssAcordion'
              >
                <div className='accordion-body'>
                  Sipariş vermek için bir ürün seçin, ardından{' '}
                  <stron text-nowrapg>Mesaj Gönder</stron> butonuna tıklayın.
                  Sepetinize eklediğiniz ürünleri kontrol ettikten sonra ödeme
                  adımlarını tamamlayabilirsiniz.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  Aldığım XANTARES adam vuramazsa ne yapabilirim?
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                data-bs-parent='#sssAcordion'
              >
                <div className='accordion-body'>
                  Merak etmeyin, <strong>XANTARES</strong>'in PEEK'leri her
                  zaman yerindedir! Ama yine de olmadıysa damar kontrolü yapın.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                >
                  Hile satışınız var mı?
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                data-bs-parent='#sssAcordion'
              >
                <div className='accordion-body'>
                  <strong>☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️</strong>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFour'
                  aria-expanded='false'
                  aria-controls='collapseFour'
                >
                  Takım arkadaşım sürekli flash atıyorsa ne yapmalıyım?
                </button>
              </h2>
              <div
                id='collapseFour'
                className='accordion-collapse collapse'
                data-bs-parent='#sssAcordion'
              >
                <div className='accordion-body'>
                  Takım arkadaşınızı en yakın gözlükçüye yönlendirin! Flash’lar
                  sizin için değil, rakipler için atılıyor olmalıydı.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFive'
                  aria-expanded='false'
                  aria-controls='collapseFive'
                >
                  Destek almak için nasıl iletişim kurabilirim?
                </button>
              </h2>
              <div
                id='collapseFive'
                className='accordion-collapse collapse'
                data-bs-parent='#sssAcordion'
              >
                <div className='accordion-body'>
                  Bize e-posta veya canlı destek hattından ulaşabilirsiniz.
                  <strong>info@pickemstore.com</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
