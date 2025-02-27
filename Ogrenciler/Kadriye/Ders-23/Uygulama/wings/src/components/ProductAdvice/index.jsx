import React from "react";

const ProductAdvice = ({ wings }) => {
  return (
    <section className="product-advice my-5">
      <div className="container">
        <h3 className="text-info fw-bold mb-2">İlginizi Çekebilecek Ürünler</h3>
        <div className="product-wrap p-2 overflow-scroll d-flex">
          {wings.map((wing) => {
            return (
              <div key={wing.id}>
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
