"use client";
import { useEffect, useState } from "react";
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
        console.error("Ürünler yüklenirken bir hata oluştu:", error);
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

  const getRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Rastgele 1-5 arasında bir yıldız puanı
  };

  // Yorumları simüle et
  const getProductComments = () => {
    return [
      { name: "Ayşe", comment: "Harika ürün, çok beğendim! Kesinlikle tavsiye ederim." },
      { name: "Ahmet", comment: "Fiyat/performans oranı çok iyi, ürün gayet kaliteli." },
      { name: "Mehmet", comment: "Beklediğimden çok daha kaliteli, her yönüyle harika!" },
    ];
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <>
      <div className="container py-4">
        <h3>Filtrele ve Sıralayın</h3>

        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label">Kategori</label>
          <select
            id="categoryFilter"
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Tümü</option>
            <option value="electronics">Elektronik</option>
            <option value="jewelery">Takı</option>
            <option value="men's clothing">Erkek Giyim</option>
            <option value="women's clothing">Kadın Giyim</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="priceFilter" className="form-label">Fiyat Aralığı</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1000"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([0, e.target.value])}
          />
          <span>{priceFilter[0]} - {priceFilter[1]} ₺</span>
        </div>

        <div className="mb-3">
          <label htmlFor="searchQuery" className="form-label">Arama</label>
          <input
            type="text"
            className="form-control"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ürün adı ile ara"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sortBy" className="form-label">Sıralama</label>
          <select
            id="sortBy"
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Varsayılan</option>
            <option value="price-asc">Fiyat (Artan)</option>
            <option value="price-desc">Fiyat (Azalan)</option>
            <option value="name-asc">İsim (A-Z)</option>
            <option value="name-desc">İsim (Z-A)</option>
          </select>
        </div>
      </div>

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Öne Çıkan Ürünler</h2>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const rating = getRandomRating(); // Her ürün için rastgele yıldız puanı
                const comments = getProductComments(); // Ürün yorumlarını al

                return (
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
                        <div className="d-flex align-items-center">
                          <div className="stars">
                            {[...Array(5)].map((_, index) => (
                              <i
                                key={index}
                                className={`fa fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
                              />
                            ))}
                          </div>
                          <span className="ms-2">{rating} Yıldız</span>
                        </div>
                        <p className="card-text">
                          <strong>{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</strong>
                        </p>
                        <button
                          onClick={() => handleAddToCart(product)} 
                          className="btn btn-primary"
                        >
                          Sepete Ekle
                        </button>

                        {/* Yorumlar */}
                        <div className="product-comments mt-3">
                          <h6>Yorumlar:</h6>
                          <ul className="list-unstyled">
                            {comments.map((comment, index) => (
                              <li key={index}>
                                <strong>{comment.name}:</strong> {comment.comment}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Ürün bulunamadı.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}



