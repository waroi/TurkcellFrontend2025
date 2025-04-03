
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchAndStoreProducts } from "./firebaseService"; 

const ProductDetail = () => {
  const { query } = useRouter(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = () => {
      const storedProducts = localStorage.getItem("products");

      if (storedProducts) {
        const products = JSON.parse(storedProducts);
        const foundProduct = products.find((p) => p.id === query.id); 
        setProduct(foundProduct);
        setLoading(false);
      } else {

        fetchAndStoreProducts().then((fetchedProducts) => {
          const foundProduct = fetchedProducts.find((p) => p.id === query.id);
          setProduct(foundProduct);
          setLoading(false);
        });
      }
    };

    loadProduct();
  }, [query.id]);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Fiyat: {product.price}₺</p>
 
    </div>
  );
};

export default ProductDetail;
