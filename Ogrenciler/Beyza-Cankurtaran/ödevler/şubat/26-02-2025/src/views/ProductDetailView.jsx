import React from "react";
import { useEffect } from "react";
import Header from "../components/Header/header";
import ProductDetail from "../components/Product/ProductDetail";
import Footer from "../components/Footer/Footer";

const ProductDetailView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default ProductDetailView;
