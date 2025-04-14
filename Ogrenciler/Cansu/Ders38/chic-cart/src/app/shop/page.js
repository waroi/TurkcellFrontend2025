"use client";
import React, { useState, useEffect } from 'react';
import useCartStore from "@/store/useCartStore";
import useFavoritesStore from "@/store/useFavoritesStore";
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Shop() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [addingToCart, setAddingToCart] = useState({});
  const [productQuantities, setProductQuantities] = useState({});

  const addToCart = useCartStore((state) => state.addToCart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, selectedCategory, priceRange, searchQuery, sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      

      const initialQuantities = {};
      data.forEach(product => {
        initialQuantities[product.id] = 1;
      });
      setProductQuantities(initialQuantities);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];

  
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

 
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

 
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }


    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setProductQuantities(prev => ({
      ...prev,
      [productId]: newQuantity
    }));
  };

  const handleAddToCart = async (product) => {
    if (!isAuthenticated()) {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
        router.push('/login');
      }, 2000);
      return;
    }
    
    try {
      setAddingToCart(prev => ({ ...prev, [product.id]: true }));
      
     
      const quantity = productQuantities[product.id] || 1;
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      toast.success(`${quantity} adet ${product.title} sepete eklendi!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Ürün sepete eklenirken bir hata oluştu.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }
  };

  const handleToggleFavorite = (product) => {
    if (!isAuthenticated()) {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
        router.push('/login');
      }, 2000);
      return;
    }

    if (favorites.some(fav => fav.id === product.id)) {
      removeFromFavorites(product.id);
      toast.success(`${product.title} favorilerden çıkarıldı`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      addToFavorites(product);
      toast.success(`${product.title} favorilere eklendi`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const categories = [...new Set(products.map(product => product.category))];

  if (loading) return (
    <div className="container py-5">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-3">Ürünler yükleniyor...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="container py-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Hata!</h4>
        <p>{error}</p>
        <hr />
        <p className="mb-0">Lütfen daha sonra tekrar deneyin.</p>
      </div>
    </div>
  );

  return (
    <div className="container py-4">
      {showLoginMessage && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          Lütfen sepete ürün eklemek için giriş yapın.
          <button type="button" className="btn-close" onClick={() => setShowLoginMessage(false)}></button>
        </div>
      )}

      <div className="row">
 
        <div className="col-lg-3 col-md-4">
          <div className="card mb-4 shadow-sm sticky-top" style={{ top: '20px' }}>
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Filtreler</h5>
            </div>
            <div className="card-body">
        
              <div className="mb-3">
                <label className="form-label fw-bold">Kategori</label>
                <select 
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Tüm Kategoriler</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Fiyat Aralığı</label>
                <div className="d-flex gap-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  />
                </div>
              </div>

         
              <div className="mb-3">
                <label className="form-label fw-bold">Arama</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ürün ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

         
              <div className="mb-3">
                <label className="form-label fw-bold">Sıralama</label>
                <select 
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Varsayılan</option>
                  <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                  <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
                  <option value="name-asc">İsim (A-Z)</option>
                  <option value="name-desc">İsim (Z-A)</option>
                </select>
              </div>
              
           
              <button 
                className="btn btn-outline-primary w-100"
                onClick={() => {
                  setSelectedCategory('');
                  setPriceRange({ min: 0, max: 1000 });
                  setSearchQuery('');
                  setSortBy('default');
                }}
              >
                <i className="fas fa-filter me-2"></i>Filtreleri Temizle
              </button>
            </div>
          </div>
        </div>


        <div className="col-lg-9 col-md-8">
          {filteredProducts.length === 0 ? (
            <div className="alert alert-info">
              <h4 className="alert-heading">Ürün Bulunamadı</h4>
              <p>Arama kriterlerinize uygun ürün bulunamadı. Lütfen filtrelerinizi değiştirerek tekrar deneyin.</p>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="col">
                  <div className="card h-100 shadow-sm hover-shadow">
                    <div className="position-relative">
                      <div className="p-4 d-flex align-items-center justify-content-center" style={{ height: '300px', backgroundColor: '#f8f9fa' }}>
                        <img
                          src={product.image}
                          className="img-fluid"
                          alt={product.title}
                          style={{ maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 p-2">
                        <button 
                          className={`btn btn-sm ${favorites.some(fav => fav.id === product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                          onClick={() => handleToggleFavorite(product)}
                        >
                          <i className={`fas ${favorites.some(fav => fav.id === product.id) ? 'fa-heart' : 'fa-heart'}`}></i>
                        </button>
                      </div>
                      {product.price < 50 && (
                        <div className="position-absolute top-0 start-0 p-2">
                          <span className="badge bg-danger">İndirim</span>
                        </div>
                      )}
                    </div>
                    <div className="card-body d-flex flex-column p-4">
                      <h5 className="card-title mb-2" title={product.title}>
                        {product.title}
                      </h5>
                      <p className="card-text flex-grow-1 mb-3" style={{ fontSize: '1rem', lineHeight: '1.5', height: '3em', overflow: 'hidden' }}>
                        {product.description}
                      </p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <span className="h4 mb-0 text-primary fw-bold">{product.price.toFixed(2)} ₺</span>
                            {productQuantities[product.id] > 1 && (
                              <span className="ms-2 text-muted">
                                Toplam: {(product.price * productQuantities[product.id]).toFixed(2)} ₺
                              </span>
                            )}
                          </div>
                          <span className="badge bg-success">Stokta</span>
                        </div>
                        
                     
                        <div className="d-flex align-items-center mb-3">
                          <label className="form-label me-2 mb-0">Adet:</label>
                          <div className="input-group input-group-sm" style={{ width: '120px' }}>
                            <button 
                              className="btn btn-outline-primary" 
                              type="button"
                              onClick={() => handleQuantityChange(product.id, productQuantities[product.id] - 1)}
                              disabled={productQuantities[product.id] <= 1}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={productQuantities[product.id] || 1}
                              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                              min="1"
                            />
                            <button 
                              className="btn btn-outline-primary" 
                              type="button"
                              onClick={() => handleQuantityChange(product.id, productQuantities[product.id] + 1)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => handleAddToCart(product)}
                          disabled={addingToCart[product.id]}
                        >
                          {addingToCart[product.id] ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Ekleniyor...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-shopping-cart me-2"></i>
                              Sepete Ekle
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



