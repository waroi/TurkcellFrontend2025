
const ProductDetail2 = () => {
  return (
    <main>
        <section className="product-detail">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-12 col-12 col-lg-6">
                <img src="/src/assets/CEO.webp" alt="Ürün Görseli" className="product-image img-fluid"/>
              </div>
              <div className="col-md-12 col-12 col-lg-6">
                <div className="product-details">
                  <div className="stars d-flex text-secondary mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h1 className="product-title">Başarılı bir CEO</h1>
                  <p className="product-price text-primary fs-2">$60.000.000</p>
                  <p className="product-description fs-5">
                    Merhaba gelin hep beraber başarılı bir CEO'nun hayatını inceleyelim... 
                    Sabah kalkıp güzel bir doğa yürüyüşü yaptıktan sonra asistanlarınızı arayıp günün 
                    programını öğrenip eşsiz giyim tercihleri ile modaya yön verin. Önemli toplantılar 
                    sonrası iş dünyasının ileri gelenleri ile oynanacak golf’ün hissettireceği hazzı düşünün
                    bu gerçekten harika olmalı. Spor sonrası İtalyan şefimizin (Danilo) özel menüsünün keyfini 
                    çıkarırken yurtdışından özel olarak getirilen mayalı üzüm suyunu içmek lezzetli ve iştah 
                    açıcı olmalı. Gün sonunda son model aracınızla eve gittikten sonra uzak doğunun kalbinden gelen 
                    masörün size günün tüm yorgunluğunu atacak bir masaj yapması gerçekten kulağa harika geliyor.
                  </p>
                  <button className="btn btn-primary btn-lg mt-3">Sepete Ekle</button>
                </div>
              </div>
            </div>
            </div>
        </section>
        <section className="bg-danger py-5 ">
          <div id="carousel-users-indicator" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators ">
              <button type="button" data-bs-target="#carousel-users-indicator" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-target="#carousel-users-indicator" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
              <button type="button" data-bs-target="#carousel-users-indicator" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner pb-5">
              <div className="carousel-item position-relative active">
                <div className="container text-center text-info">
                  <div className="row">
                    <div className="col-8 m-auto">
                      <p className="my-3 fs-5">Mükemmel!</p>
                      <blockquote> <i >
                        "Hayatımı yeniden tasarlamak istediğimde bu siteyi keşfettim ve hayatımın en doğru kararını verdim. İngiltere Prensesi paketini seçtim ve bir sonraki hayatımda adeta bir peri masalının içinde olacağımı biliyorum. Profesyonel ve hızlı hizmet! Kesinlikle tavsiye ederim."
                        </i></blockquote>
                      <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                      <p className="mt-3 fs-5
                      ">Ela Kılıç</p>
                    </div>
                  </div>
                </div>
              </div>
              <div div="" className="carousel-item">
                <div className="container text-center text-info">
                  <div className="row">
                    <div className="col-8 m-auto">
                      <p className="my-3 fs-5">Hayallerimin Ötesinde..</p>
                      <blockquote> <i >
                        "CEO Hayatı paketini aldım ve bir sonraki hayatımda dünyanın en güçlü insanlarından biri olmayı garanti altına aldım. Detaylı açıklamalar ve güvenilir hizmetleri sayesinde sürecin her aşamasında kendimi özel hissettim. Herkese öneririm!"
                        </i></blockquote>
                      <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                      <p className="mt-3 fs-5">Okan Beyaz</p>
                    </div>
                  </div>
                </div>
              </div>
              <div div="" className="carousel-item">
                <div className="container text-center text-info">
                  <div className="row">
                    <div className="col-8 m-auto">
                      <p className="my-3 fs-5">Harika!</p>
                      <blockquote> <i >
                        "Sanatçı Hayatı paketine bayıldım! Sanatçı olarak bir sonraki hayatımda dünyayı güzelleştireceğim fikri beni çok heyecanlandırdı. Her şey tam da hayal ettiğim gibi ilerledi. İlgili müşteri hizmetleri de ayrı bir artı. Teşekkürler!"
                        </i></blockquote>
                      <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                      <p className="mt-3 fs-5">Avesta Kılıç</p>
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </section>
        
      </main>
  )
}

export default ProductDetail2