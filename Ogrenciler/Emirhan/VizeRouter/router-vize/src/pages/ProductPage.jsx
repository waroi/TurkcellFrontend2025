import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    try {
      const url = "http://localhost:3000/products";
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main>
        <section className="container">
          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a
                  href="../index.html"
                  className="text-decoration-none text-black"
                >
                  Ana Sayfa
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a
                  href="./shop.html"
                  className="text-decoration-none text-black"
                >
                  Mağaza
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.title}
              </li>
            </ol>
          </nav>
          <div className="card my-5 border-0">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={product?.img}
                  className="rounded product-img"
                  alt="Product Image"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body d-flex flex-column justify-content-between h-100 pb-0 ps-0 ps-md-5">
                  <h5 className="card-title fs-3">{product?.title}</h5>
                  <p className="card-text fs-3 fw-bold">${product?.price}</p>
                  <p className="card-text">{product?.description}</p>
                  <p className="card-text fs-6 fw-normal m-0 text-body-tertiary">
                    Stokta var
                  </p>

                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#cartModal"
                      className="btn btn-primary w-50 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>Sepete Ekle</span>
                    </button>
                    <div
                      className="modal fade"
                      id="cartModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Sepete eklendi!
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            Ürün başarılı bir şekilde sepete eklendi. Alışverişe
                            devam edebilir veya ürünleri satın alabilirsiniz.
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Kapat
                            </button>
                            <button type="button" className="btn btn-primary">
                              Sepete git
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-light w-50 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-tag"></i>
                      <span>Hemen Satın Al</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mb-4 fw-bolder">Ürün Özellikleri</h3>
          <div className="list-group list-group-flush mb-5">
            <div className="list-group-item px-0 py-3" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Hızlı Karar Mekanizması</h5>
              </div>
              <p className="mb-1">
                Karne döneminde saniyeler içinde sınırdaki öğrenciyi geçirme
                kararı alır.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Empati Yeteneği Gelişmiş</h5>
              </div>
              <p className="mb-1">
                Öğrencilerin zorluklarını anlama konusunda üstün bir sezgiye
                sahiptir.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Not Esnekliği</h5>
              </div>
              <p className="mb-1">
                49.5 gibi rakamları 50’ye yuvarlama konusunda usta.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Motivasyon Ustası</h5>
              </div>
              <p className="mb-1">
                Ders sonu konuşmalarıyla öğrencilere moral verir, özgüveni
                artırır.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">İkinci Şans Verme Garantisi</h5>
              </div>
              <p className="mb-1">
                Her öğrencinin hata yapma hakkını savunur ve bu hakları tanır.{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
