"use client"; 

import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore'; 
import '../styles/main.scss';
import { useEffect, useState } from 'react';

export default function Home() {
  const user = useAuthStore((state) => state.user);  
  const router = useRouter(); 

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); 
      const data = await response.json();
      setFeaturedProducts(data.slice(0, 3)); 
    } catch (error) {
      console.error('Öne çıkan ürünler alınırken bir hata oluştu:', error);
    }
  };

  const fetchPopularProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); 
      const data = await response.json();
      setPopularProducts(data.slice(3, 6)); 
    } catch (error) {
      console.error('Popüler ürünler alınırken bir hata oluştu:', error);
    }
  };

  const fetchNewArrivals = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); 
      const data = await response.json();
      setNewArrivals(data.slice(6, 9)); 
    } catch (error) {
      console.error('Yeni gelen ürünler alınırken bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchProducts(),
        fetchPopularProducts(),
        fetchNewArrivals()
      ]);
      setIsLoading(false);
    };
    
    loadProducts();
  }, []);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fa${i < rating ? 's' : 'r'} fa-star text-warning`} />
      );
    }
    return stars;
  };

  const handleAddToCart = (product) => {
    if (!user) {
      router.push('/login');
      return;
    }
  
    console.log('Adding to cart:', product);
  };

  if (isLoading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-3">Ürünler yükleniyor...</p>
      </div>
    );
  }

  return (
    <>
      <section className="hero bg-primary text-white text-center py-5" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="display-3 font-weight-bold">
            {user ? `Hoş Geldin, ${user?.name || user?.displayName || 'Kullanıcı'}!` : 'Chic Cart\'a Hoş Geldiniz!'}
          </h1>
          <p className="lead mb-4">En yeni moda, elektronik ürünleri keşfedin ve fırsatları kaçırmayın!</p>
          {user ? (
            <a href="/shop" className="btn btn-light btn-lg">Alışverişe Başla</a>
          ) : (
            <div>
              <a href="/login" className="btn btn-light btn-lg me-3">Giriş Yap</a>
              <a href="/register" className="btn btn-outline-light btn-lg">Kayıt Ol</a>
            </div>
          )}
        </div>
      </section>

      <section className="products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Yeni Gelen Ürünler</h2>
          <div className="row">
            {newArrivals.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-light rounded h-100">
                  <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="price h5 mb-0">{product.price} ₺</span>
                        <span className="product-rating">
                          {renderStars(Math.round(product.rating.rate))}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className={`btn ${user ? 'btn-primary' : 'btn-outline-primary'} w-100`}
                      >
                        {user ? 'Sepete Ekle' : 'Giriş Yapın'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Popüler Ürünler</h2>
          <div className="row">
            {popularProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-light rounded h-100">
                  <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="price h5 mb-0">{product.price} ₺</span>
                        <span className="product-rating">
                          {renderStars(Math.round(product.rating.rate))}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className={`btn ${user ? 'btn-primary' : 'btn-outline-primary'} w-100`}
                      >
                        {user ? 'Sepete Ekle' : 'Giriş Yapın'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Öne Çıkan Ürünler</h2>
          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-light rounded h-100">
                  <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="price h5 mb-0">{product.price} ₺</span>
                        <span className="product-rating">
                          {renderStars(Math.round(product.rating.rate))}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className={`btn ${user ? 'btn-primary' : 'btn-outline-primary'} w-100`}
                      >
                        {user ? 'Sepete Ekle' : 'Giriş Yapın'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter py-5 bg-secondary text-white text-center">
        <div className="container">
          <h2>Bültenimize Katılın</h2>
          <p className="lead">Yeni ürünler ve özel teklifler hakkında bilgi almak için abone olun!</p>
          <form className="form-inline justify-content-center">
            <input type="email" className="form-control mb-2 mr-sm-2" placeholder="E-posta adresinizi girin" />
            <button type="submit" className="btn btn-light mb-2">Abone Ol</button>
          </form>
        </div>
      </section>
    </>
  );
}









