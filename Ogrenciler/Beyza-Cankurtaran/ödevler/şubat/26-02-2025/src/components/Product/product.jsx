import React from "react";
import products from "../../data/data.json";
import { Link } from "react-router";

const Product = ({ getirProduct, setSelector }) => {
  const categories = [
    ...new Set(products.map((product) => product.category[0].name)),
  ];

  return (
    <section className="products bg-light" id="products">
      <div className="container py-4">
        <h2 className="text-center my-2">Ürünler</h2>
        <div className="categories mb-2 d-flex justify-content-between flex-wrap">
          <button
            type="button"
            className="btn btn-outline-primary mb-1"
            onClick={() => setSelector(null)}
          >
            Tüm Ürünler
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-outline-primary mb-1"
              onClick={() => {
                setSelector(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {getirProduct().map((product, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-2" key={index}>
              <div className="card">
                <img
                  src={product.urunPhotos[0].path}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text d-flex justify-content-between">
                    {product.newPrice}
                    <span>
                      5
                      <img
                        src="https://img.icons8.com/?size=24&id=60003&format=png&color=f2a723"
                        alt=""
                      />
                    </span>
                  </p>
                  <div className="btn-group d-flex mx-auto" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-warning rounded-start-pill"
                    >
                      <img
                        src="https://img.icons8.com/?size=25&id=P6ZYIof6BwLW&format=png&color=400106"
                        alt=""
                      />
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      <Link to={`/urunDetay/${product.id}`}>
                        <img
                          src="https://img.icons8.com/?size=25&id=132&format=png&color=400106"
                          alt=""
                        />
                      </Link>
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      <img
                        src="https://img.icons8.com/?size=25&id=QqQ9t0fbQ4Yw&format=png&color=400106"
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning rounded-end-pill"
                    >
                      <img
                        src="https://img.icons8.com/?size=25&id=87&format=png&color=400106"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
