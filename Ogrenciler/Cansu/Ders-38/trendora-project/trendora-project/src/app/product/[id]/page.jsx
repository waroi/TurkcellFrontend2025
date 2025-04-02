"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 

import { getProducts } from "@/firebase/firestore";

const ProductDetail = () => {
  const { query } = useRouter(); 
  const [product, setProduct] = useState(null); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    if (!query.id) return; 

    const fetchProduct = async () => {
      try {
 
        const products = await getProducts();
        const foundProduct = products.find((prod) => prod.id === query.id); 

        if (foundProduct) {
          setProduct(foundProduct); 
        } else {
          setError("Ürün bulunamadı.");
        }
      } catch (err) {
        setError("Bir hata oluştu: " + err.message);
      }
    };

    fetchProduct();
  }, [query.id]); 

  if (error) return <p>{error}</p>; 
  if (!product) return <p>Yükleniyor...</p>; 

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Fiyat: {product.price}</p>
    
    </div>
  );
};

export default ProductDetail;

