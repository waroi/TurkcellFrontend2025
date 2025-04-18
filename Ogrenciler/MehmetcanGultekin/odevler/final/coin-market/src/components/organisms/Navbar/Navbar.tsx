'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '../../atoms/Logo/Logo';
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle';
import styles from './Navbar.module.scss';
import { logoutUser, isUserLoggedIn } from '@/lib/authService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      setIsProfileDropdownOpen(false);
      setIsLoggedIn(false);
      router.push('/');
    } else {
      console.error('Logout failed:', result.error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`p-4 h-100 d-flex justify-content-between align-items-center`}>
        <div className={`${styles.logoContainer} d-flex align-items-center gap-2`}>
          <Logo width={24} height={24} />
          <span className={styles.brandName}>Rocket</span>
        </div>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.active : ''} `}>
          <div className={`${styles.navLinks} d-flex justify-content-space-between`}>
            <div >
              <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
                Homepage
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
            </div>
            <Link href="/buy-crypto" className={`${styles.navLink} ${pathname === '/buy-crypto' ? styles.active : ''}`}>
              Buy Crypto
            </Link>
            <Link href="/markets" className={`${styles.navLink} ${pathname === '/markets' ? styles.active : ''}`}>
              Markets
            </Link>
            <Link href="/exchange" className={`${styles.navLink} ${pathname === '/exchange' ? styles.active : ''}`}>
              Exchange
            </Link>
            <Link href="/spot" className={`${styles.navLink} ${pathname === '/spot' ? styles.active : ''}`}>
              Spot
            </Link>
            <Link href="/bitusd" className={`${styles.navLink} ${pathname === '/bitusd' ? styles.active : ''}`}>
              BITUSD
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.7593 3.20154C7.6927 3.13681 7.59924 3.10739 7.50779 3.12243C7.41617 3.13741 7.33705 3.19493 7.29455 3.27747C7.14838 3.56144 6.96271 3.82239 6.74428 4.05308C6.76605 3.88644 6.77701 3.7188 6.77701 3.55072C6.77701 3.2282 6.73379 2.8963 6.6485 2.56413C6.36807 1.4731 5.63271 0.550422 4.63105 0.0327073C4.54385 -0.0123512 4.43994 -0.0107692 4.35414 0.0369261C4.26834 0.0846409 4.21215 0.172121 4.20445 0.269973C4.12637 1.26146 3.61566 2.16349 2.80252 2.74536C2.79176 2.75312 2.78107 2.76097 2.77039 2.76878C2.74826 2.78497 2.7274 2.80029 2.70791 2.81314C2.70486 2.81517 2.70184 2.81724 2.69887 2.81937C2.18746 3.18552 1.76549 3.67361 1.47852 4.23101C1.18691 4.79798 1.03906 5.4064 1.03906 6.03931C1.03906 6.36173 1.08229 6.69362 1.16754 7.02585C1.61744 8.77697 3.1933 9.99997 4.99975 9.99997C7.18356 9.99997 8.9602 8.22322 8.9602 6.03931C8.9602 4.96236 8.53371 3.95454 7.7593 3.20154Z" fill="#3772FF"/>
              </svg>
            </Link>
            <div className={styles.navDropdown}>
              <Link href="/pages" className={`${styles.navLink} ${pathname.startsWith('/pages') ? styles.active : ''}`}>
                Pages
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          <div className={` d-flex align-items-center`}>
            <div>
              <button className={styles.actionButton}>
                Assets
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            
            <div className={styles.actionDropdown}>
              <button className={styles.actionButton}>
                Orders & Trades
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            
            <div className={styles.actionDropdown}>
              <button className={styles.actionButton}>
                <span>EN/USD</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            
            <ThemeToggle />
            
            <button className={styles.iconButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            
            <button className={styles.walletButton}>
              <span>Wallet</span>
            </button>
            
            <div className={styles.profileDropdownContainer} ref={dropdownRef}>
              <button 
                className={styles.avatarPlaceholder} 
                onClick={toggleProfileDropdown}
                aria-label="Profile menu"
              ></button>
              
              {isProfileDropdownOpen && (
                <div className={styles.profileDropdown}>
                  {isLoggedIn ? (
                    <>
                      <Link href="/pages/profile" className={styles.dropdownItem}>Profile</Link>
                      
                      <button 
                        className={styles.dropdownLogoutButton} 
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/pages/login" className={styles.dropdownItem}>Login</Link>
                      <Link href="/pages/register" className={styles.dropdownItem}>Register</Link>
                    </>
                  )}
                </div>
              )}
            </div>
            
          </div>
        </div>
        
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;