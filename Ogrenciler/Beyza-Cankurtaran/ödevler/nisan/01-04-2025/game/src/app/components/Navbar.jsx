"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onLoginClick, onSignupClick }) {
  const { user, logout } = useAuth() || { user: null, logout: () => {} };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand text-primary fw-bold">
          Bahoot
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            {user ? (
              <>
                <Link href="/dashboard" className="btn btn-outline-primary me-2">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onLoginClick()}
                  className="btn btn-outline-primary me-2"
                >
                  Login
                </button>
                <button
                  onClick={() => onSignupClick()}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}