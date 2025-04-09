"use client";
import useCartStore from "@/store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card p-3 h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>{product.price} ₺</strong></p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-success mt-auto w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



