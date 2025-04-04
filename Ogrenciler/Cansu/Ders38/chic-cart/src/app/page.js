"use client"; 

import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/main.scss';
import { useEffect } from 'react';

export default function Home() {
  const user = useAuthStore((state) => state.user);  
  const router = useRouter(); 


  useEffect(() => {
    if (!user) {
      router.push('/login'); 
    }
  }, [user, router]);  


  if (!user) {
    return <p>Yükleniyor...</p>;  
  }

  return (
    <>
      <Navbar />

      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
       
          <h1>Hoş geldin, {user?.name || user?.displayName || 'Kullanıcı'}!</h1> 
          <p>Your one-stop online shop for the latest fashion trends, electronics, and more.</p>
          <a href="/shop" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </section>

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/product1.jpg" className="card-img-top" alt="Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">A great product that you will love.</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/product2.jpg" className="card-img-top" alt="Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">Stylish and high-quality product for everyday use.</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/product3.jpg" className="card-img-top" alt="Product 3" />
                <div className="card-body">
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">Trendy and affordable, this is a must-have!</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}




