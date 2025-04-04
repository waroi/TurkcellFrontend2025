"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData)); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Chic-Cart
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className="nav-link">Shop</Link>
            </li>

       
            {user ? (
              <>
                <li className="nav-item">
                  <Link href="/profile" className="nav-link">Profile</Link>
                </li>

                {user.role === 'admin' && (
                  <li className="nav-item">
                    <Link href="/admin" className="nav-link">Admin Panel</Link>
                  </li>
                )}

                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link href="/login" className="nav-link">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


