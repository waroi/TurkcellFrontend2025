export default function FaqView() {
  return (
    <>
      <main class='main-section'>
        <header class='mt-20'>
          <div class='container-fluid p-5 text-white text-center'>
            <h1 class='fw-bold'>
              <i class='bi bi-question-circle'></i> SIKÇA SORULAN SORULAR
              (S.S.S)
            </h1>
          </div>
        </header>
        <div class='container'>
          <div class='bg-extra-dark-purple text-white card mb-10 p-10'>
            <div class='sss-inner row gy-4'>
              <div class='sss-image col-12 text-center'>
                <img
                  src='https://fossbytes.com/wp-content/uploads/2022/01/All-esports-teams-1024x576.jpg'
                  alt='E-sport Teams'
                  class='img-fluid'
                />
              </div>
              <div
                class=' accordion col-12 align-items-center'
                id='sssAcordion'
              >
                <div class='accordion-item mb-4'>
                  <h2 class='accordion-header '>
                    <button
                      class='accordion-button fw-bold'
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
                    class='accordion-collapse collapse show'
                    data-bs-parent='#sssAcordion'
                  >
                    <div class='accordion-body'>
                      Sipariş vermek için bir ürün seçin, ardından{' '}
                      <strong>Sepete Ekle</strong> butonuna tıklayın. Sepetinize
                      eklediğiniz ürünleri kontrol ettikten sonra ödeme
                      adımlarını tamamlayabilirsiniz.
                    </div>
                  </div>
                </div>
                <div class='accordion-item mb-4'>
                  <h2 class='accordion-header'>
                    <button
                      class='accordion-button collapsed fw-bold'
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
                    class='accordion-collapse collapse'
                    data-bs-parent='#sssAcordion'
                  >
                    <div class='accordion-body'>
                      Merak etmeyin, <strong>XANTARES</strong>'in PEEK'leri her
                      zaman yerindedir! Ama yine de olmadıysa damar kontrolü
                      yapın.
                    </div>
                  </div>
                </div>
                <div class='accordion-item mb-4'>
                  <h2 class='accordion-header'>
                    <button
                      class='accordion-button collapsed fw-bold'
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
                    class='accordion-collapse collapse'
                    data-bs-parent='#sssAcordion'
                  >
                    <div class='accordion-body'>
                      <strong>☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️ ☠️</strong>
                    </div>
                  </div>
                </div>
                <div class='accordion-item mb-4'>
                  <h2 class='accordion-header'>
                    <button
                      class='accordion-button collapsed fw-bold'
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
                    class='accordion-collapse collapse'
                    data-bs-parent='#sssAcordion'
                  >
                    <div class='accordion-body'>
                      Takım arkadaşınızı en yakın gözlükçüye yönlendirin!
                      Flash’lar sizin için değil, rakipler için atılıyor
                      olmalıydı.
                    </div>
                  </div>
                </div>
                <div class='accordion-item mb-4'>
                  <h2 class='accordion-header'>
                    <button
                      class='accordion-button collapsed fw-bold'
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
                    class='accordion-collapse collapse'
                    data-bs-parent='#sssAcordion'
                  >
                    <div class='accordion-body'>
                      Bize e-posta veya canlı destek hattından ulaşabilirsiniz.
                      <strong>info@pickemstore.com</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
