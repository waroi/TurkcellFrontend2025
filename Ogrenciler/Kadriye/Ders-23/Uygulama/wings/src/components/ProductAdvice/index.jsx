import React from "react";
import Card from "../Card";
import "./style.css";
const ProductAdvice = ({ wings }) => {
  if (!wings) {
    return <p>Yükleniyor</p>;
  }

  return (
    <section className="product-advice my-5">
      <div className="container">
        <h3 className="text-info fw-bold mb-2">İlginizi Çekebilecek Ürünler</h3>
        <div className="product-wrap p-2 overflow-x-scroll d-flex">
          {wings.map((wing) => {
            return (
              <div key={wing.id} className="mx-2">
                <Card wing={wing} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductAdvice;
