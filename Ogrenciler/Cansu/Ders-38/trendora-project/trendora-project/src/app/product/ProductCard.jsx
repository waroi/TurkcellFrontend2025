import React from "react";
import useCart from "../hooks/useCart"; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>Sepete Ekle</button>
    </div>
  );
};

export default ProductCard;
``
