'use client';
import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={`navbar navbar-expand-lg py-3 ${theme === 'light' ? 'navbar-light bg-white' : 'navbar-dark bg-black'}`}>
      <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Crypto Planet Logo"
            width={32}
            height={32}
            className="me-2"
          />
          Rocket
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="/market" className="nav-link">
                Market
              </a>
            </li>
            <li className="nav-item">
              <a href="/watchlist" className="nav-link">
                Watchlist
              </a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center text-secondary" style={{ fontSize: '0.9rem' }}>
              <span className="me-2">EN</span>
              <span className="mx-2">|</span>
              <div className="d-flex align-items-center cursor-pointer">
                TR
              </div>
            </div>
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <a href="/profile" className="btn btn-outline-primary btn-sm px-4">
                  Profile
                </a>
                <button onClick={logout} className="btn btn-outline-danger btn-sm px-4">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/auth/login" className="btn btn-primary btn-sm px-4">
                  Login
                </a>
                <a href="/auth/register" className="btn btn-primary btn-sm px-4">
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;