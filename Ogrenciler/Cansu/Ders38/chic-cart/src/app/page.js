"use client"; 

import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore'; 
import Footer from '@/components/Footer';
import '../styles/main.scss';
import { useEffect, useState } from 'react';


export default function Home() {
  const user = useAuthStore((state) => state.user);  
  const router = useRouter(); 

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  
  
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
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (err) {
      console.error("User data parse error:", err);
    }
  }, []);
  
  
  useEffect(() => {
    if (!user) {
      router.push('/login'); 
    } else {
      fetchProducts(); 
      fetchPopularProducts(); 
      fetchNewArrivals(); 
    }
  }, [user, router]);

 
  if (!user) {
    return <p>Yükleniyor...</p>;  
  }


  const getUserReviews = (productId) => {
    const reviews = [
      { user: 'Ahmet', comment: 'Harika ürün, kesinlikle tavsiye ederim!', rating: 5 },
      { user: 'Ayşe', comment: 'Fiyatına göre oldukça iyi, fakat biraz küçük.', rating: 4 },
      { user: 'Mehmet', comment: 'Beklediğimi bulamadım, hayal kırıklığı.', rating: 2 },
    ];
    return reviews;
  };

  return (
    <>
  
      <section className="hero bg-primary text-white text-center py-5" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="display-3 font-weight-bold">Hoş Geldin, {user?.name || user?.displayName || 'Kullanıcı'}!</h1>
          <p className="lead mb-4">Discover the latest trends in fashion, electronics, and more. Shop now and enjoy the best deals!</p>
          <a href="/shop" className="btn btn-light btn-lg shadow-lg animate__animated animate__fadeInUp">Shop Now</a>
        </div>
      </section>

      <section className="great-deals py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Great Deals This Week</h2>
          <div className="row">
            {newArrivals.length === 0 ? (
              <p className="text-center">Yeni gelen ürünler yükleniyor...</p>
            ) : (
              newArrivals.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card shadow-lg border-light rounded animate__animated animate__fadeInUp">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="price">${product.price}</span>
                        <span className="rating">
                          <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                          {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                      </div>
                      <a href="#" className="btn btn-primary mt-3 w-100">Add to Cart</a>
                    </div>
          
                    <div className="card-footer">
                      <h6 className="mb-2">User Reviews</h6>
                      {getUserReviews(product.id).map((review, index) => (
                        <div key={index} className="review">
                          <p><strong>{review.user}:</strong> {review.comment}</p>
                          <div>
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <i key={i} className="fas fa-star" style={{ color: '#FFD700' }}></i>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

   
      <section className="popular-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Popular Products</h2>
          <div className="row">
            {popularProducts.length === 0 ? (
              <p className="text-center">Popüler ürünler yükleniyor...</p>
            ) : (
              popularProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card shadow-lg border-light rounded animate__animated animate__fadeInUp">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="price">${product.price}</span>
                        <span className="rating">
                          <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                          {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                      </div>
                      <a href="#" className="btn btn-primary mt-3 w-100">Add to Cart</a>
                    </div>
               
                    <div className="card-footer">
                      <h6 className="mb-2">User Reviews</h6>
                      {getUserReviews(product.id).map((review, index) => (
                        <div key={index} className="review">
                          <p><strong>{review.user}:</strong> {review.comment}</p>
                          <div>
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <i key={i} className="fas fa-star" style={{ color: '#FFD700' }}></i>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    
      <section className="featured-products py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {featuredProducts.length === 0 ? (
              <p className="text-center">Öne çıkan ürünler yükleniyor...</p>
            ) : (
              featuredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card shadow-lg border-light rounded animate__animated animate__fadeInUp">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="price">${product.price}</span>
                        <span className="rating">
                          <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                          {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                      </div>
                      <a href="#" className="btn btn-primary mt-3 w-100">Add to Cart</a>
                    </div>
               
                    <div className="card-footer">
                      <h6 className="mb-2">User Reviews</h6>
                      {getUserReviews(product.id).map((review, index) => (
                        <div key={index} className="review">
                          <p><strong>{review.user}:</strong> {review.comment}</p>
                          <div>
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <i key={i} className="fas fa-star" style={{ color: '#FFD700' }}></i>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>


      <section className="newsletter py-5 bg-secondary text-white text-center">
        <div className="container">
          <h2>Join Our Newsletter</h2>
          <p className="lead">Get the latest updates on new products and exclusive offers!</p>
          <form className="form-inline justify-content-center">
            <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Enter your email" />
            <button type="submit" className="btn btn-light mb-2">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}






