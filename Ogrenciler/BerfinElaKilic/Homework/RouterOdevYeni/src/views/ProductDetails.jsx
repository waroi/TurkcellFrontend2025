import {useParams} from 'react-router';
import products from '../data.json'

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.products.find((p) =>p.id === id);

  return (
    <main>
    <section className="product-detail">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-12 col-lg-6">
            <img
              src={product.image.src}
              alt={product.image.alt}
              className="product-image img-fluid"
            />
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
              <h1 className="product-title">{product.title}</h1>
              <p className="product-price text-primary fs-2">{product.price}</p>
              <p className="product-description fs-5">
                {product.description}
              </p>
              <button className="btn btn-primary btn-lg mt-3">Sepete Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-danger py-5 ">
      <div
        id="carousel-users-indicator"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carousel-users-indicator"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel-users-indicator"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#carousel-users-indicator"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner pb-5">
          <div className="carousel-item position-relative active">
            <div className="container text-center text-info">
              <div className="row">
                <div className="col-8 m-auto">
                  <p className="my-3 fs-5">Mükemmel!</p>
                  <blockquote>
                    {" "}
                    <i>
                      "Hayatımı yeniden tasarlamak istediğimde bu siteyi
                      keşfettim ve hayatımın en doğru kararını verdim.
                      İngiltere Prensesi paketini seçtim ve bir sonraki
                      hayatımda adeta bir peri masalının içinde olacağımı
                      biliyorum. Profesyonel ve hızlı hizmet! Kesinlikle
                      tavsiye ederim."
                    </i>
                  </blockquote>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <p
                    className="mt-3 fs-5
                    "
                  >
                    Ela Kılıç
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div div="" className="carousel-item">
            <div className="container text-center text-info">
              <div className="row">
                <div className="col-8 m-auto">
                  <p className="my-3 fs-5">Hayallerimin Ötesinde..</p>
                  <blockquote>
                    {" "}
                    <i>
                      "CEO Hayatı paketini aldım ve bir sonraki hayatımda
                      dünyanın en güçlü insanlarından biri olmayı garanti
                      altına aldım. Detaylı açıklamalar ve güvenilir
                      hizmetleri sayesinde sürecin her aşamasında kendimi özel
                      hissettim. Herkese öneririm!"
                    </i>
                  </blockquote>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
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
                  <blockquote>
                    {" "}
                    <i>
                      "Sanatçı Hayatı paketine bayıldım! Sanatçı olarak bir
                      sonraki hayatımda dünyayı güzelleştireceğim fikri beni
                      çok heyecanlandırdı. Her şey tam da hayal ettiğim gibi
                      ilerledi. İlgili müşteri hizmetleri de ayrı bir artı.
                      Teşekkürler!"
                    </i>
                  </blockquote>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
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

export default ProductDetails