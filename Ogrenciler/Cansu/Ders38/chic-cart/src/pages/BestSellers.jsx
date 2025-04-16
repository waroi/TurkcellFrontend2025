import React, { useState, useEffect } from "react";
import { getBestSellers } from "@/api/products"; // API fonksiyonu
import ProductCard from "@/components/ProductCard"; // Ürün kartı bileşeni

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true); 
        const bestSellers = await getBestSellers();
        setProducts(bestSellers); 
      } catch (err) {
        setError("Ürünler yüklenirken bir hata oluştu."); 
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchBestSellers(); 
  }, []);

  return (
    <div className="best-sellers">
      <h1>Çok Satanlar</h1>


      {loading ? (
        <div>Yükleniyor...</div>
      ) : error ? (
   
        <div>{error}</div>
      ) : (
        <div className="product-grid">
       
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
