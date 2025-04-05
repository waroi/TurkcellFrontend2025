"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import useCartStore from "@/store/useCartStore";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const addToCart = useCartStore((state) => state.addToCart); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (categoryFilter) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(filtered);
  }, [categoryFilter, priceFilter, searchQuery, sortBy, products]);

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <>
      <div className="container py-4">
        <h3>Filtrele ve Sıralayın</h3>
   
      </div>

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>${product.price}</strong>
                      </p>
                      <button
                        onClick={() => handleAddToCart(product)} 
                        className="btn btn-primary"
                      >
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

