"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import useThemeStore from '@/store/useThemeStore';
import useAuthStore from '@/store/useAuthStore';  

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useThemeStore();
    const { user, setUser, logout } = useAuthStore(); 

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData)); 
        }
    }, [setUser]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        logout();  
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container">
                <Link href="/" className="navbar-brand">
                    Chic-Cart
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
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

                        <li className="nav-item">
                            <Link href="/cart" className="nav-link">🛍️ Sepetim</Link>
                        </li>

                        <li className="nav-item ms-3">
                            <button onClick={toggleTheme} className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'}`}>
                                {isDarkMode ? '☀️' : '🌙 '}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




