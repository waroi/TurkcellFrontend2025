"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import useCartStore from "@/store/useCartStore";
import useAuthStore from "@/store/useAuthStore";

export default function NewArrivals() {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState({});


  const fetchNewArrivals = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const slicedData = data.slice(0, 3); 
      setProducts(slicedData);
      setLoading(false);
    } catch (error) {
      console.error("Öne çıkan ürünler alınırken bir hata oluştu:", error);
      setError("Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  const handleAddToCart = async (product) => {
    if (!isAuthenticated()) {
      toast.info("Ürünü sepete eklemek için lütfen giriş yapın", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      router.push("/login");
      return;
    }

    try {
      setAddingToCart((prev) => ({ ...prev, [product.id]: true }));
      await addToCart(product);
      toast.success(`${product.name} sepete eklendi`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Ürün sepete eklenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setAddingToCart((prev) => ({ ...prev, [product.id]: false }));
    }
  };

  const handleAddToWishlist = (product) => {
    if (!isAuthenticated()) {
      toast.info("Ürünü favorilere eklemek için lütfen giriş yapın", {
        position: "top-right",
        autoClose: 3000,
      });
      router.push("/login");
      return;
    }

    toast.success(`${product.name} favorilere eklendi`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Hata!</h4>
          <p>{error}</p>
          <hr />
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
            <i className="fas fa-sync-alt me-2"></i>Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="card shadow-sm mb-4 overflow-hidden">
        <div className="position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-relative p-5 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              <i className="fas fa-star me-2"></i>Çok Satanlar
            </h1>
            <p className="lead mb-4">En yeni ürünlerimizi keşfedin ve trendleri yakından takip edin!</p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/shop" className="btn btn-primary btn-lg">
                <i className="fas fa-shopping-bag me-2"></i>Tüm Ürünler
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
        {products.map((product) => (
          <div className="col d-flex justify-content-center" key={product.id}>
            <ProductCard
              product={product}
              addingToCart={addingToCart[product.id]}
              onAddToCart={() => handleAddToCart(product)}
              onAddToWishlist={() => handleAddToWishlist(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


