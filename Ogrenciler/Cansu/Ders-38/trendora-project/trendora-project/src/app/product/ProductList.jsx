"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/firebase/firestore";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts(); 
        setProducts(productsData); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts(); 
  }, []); 

  if (error) return <p>{error}</p>; 
  if (products.length === 0) return <p>Yükleniyor...</p>; 

  return (
    <div>
      <h2>Ürünler</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={`/product/${product.id}`} className="btn btn-primary">
                  Detayları Gör
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

