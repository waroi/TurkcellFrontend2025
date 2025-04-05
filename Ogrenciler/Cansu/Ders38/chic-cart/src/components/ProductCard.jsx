"use client";
import useCartStore from "@/store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card p-3 h-100">
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <p><strong>{product.price} ₺</strong></p>
      <button
        onClick={() => addToCart(product)}
        className="btn btn-success w-100 mt-auto"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;

