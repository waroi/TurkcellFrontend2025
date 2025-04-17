'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Clock, History, Menu, X } from 'lucide-react';
import ThemeToggle from '../../components/ui/ThemeToggle';
import LanguageSelector from '../../components/ui/LanguageSelector';
import Button from '../../components/ui/Button';
import { combineClasses } from '../../lib/utils';
import './Header.scss';

interface User {
  displayName: string;
  email: string;
}

const user: User | null = {
  displayName: 'Beyza Sarıdaş',
  email: 'saridas.beyzaa@gmail.com',
};
const Header: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  const isLinkActive = (path: string) => pathname === path;
  
  const handleLogout = async () => {

    console.log('Logout');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div className="header__logo">
              <svg className="header__logo-icon" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <Link href="/" className="header__logo-text">
                Rocket
              </Link>
            </div>

            <nav className="header__nav">
              <Link 
                href="/market" 
                className={combineClasses(
                  "header__nav-link",
                  isLinkActive('/market') ? 'header__nav-link--active' : ''
                )}
              >
                {t('market.title')}
              </Link>
              <Link 
                href="/portfolio" 
                className={combineClasses(
                  "header__nav-link",
                  isLinkActive('/portfolio') ? 'header__nav-link--active' : ''
                )}
              >
                {t('portfolio.title')}
              </Link>
              <Link 
                href="/watchlist" 
                className={combineClasses(
                  "header__nav-link",
                  isLinkActive('/watchlist') ? 'header__nav-link--active' : ''
                )}
              >
                {t('watchlist.title')}
              </Link>
              <Link 
                href="/learn" 
                className={combineClasses(
                  "header__nav-link",
                  isLinkActive('/learn') ? 'header__nav-link--active' : ''
                )}
              >
                Learn
              </Link>
            </nav>
          </div>
          
          <div className="header__right">
            <div className="header__actions">

              <div className="header__actions-time">
                <Clock size={16} className="header__actions-time-icon" />
                <span>{formatTime(currentTime)}</span>
              </div>

              <ThemeToggle />

              <LanguageSelector />
              
              {user && (
                <>

                  <Link href="/transactions" className="header__actions-item">
                    <History className="header__actions-item-icon" />
                    <span className="sr-only">Trade History</span>
                  </Link>

                  <Link href="/buy-crypto" className="header__actions-wallet">
                    <svg className="header__actions-wallet-icon" viewBox="0 0 24 24">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    <span>{t('common.wallet')}</span>
                  </Link>
                </>
              )}
            </div>

            {user ? (
              <div className="header__user">
                <div className="header__user-info">
                  <div className="header__user-name">{user?.displayName || 'User'}</div>
                  <div className="header__user-email">{user?.email}</div>
                </div>
                <button 
                  className="header__user-button"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <img 
                    className="header__user-avatar" 
                    src={`https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=random`} 
                    alt="User avatar" 
                  />
                  <svg className="header__user-dropdown" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="header__dropdown">
                    <Link href="/profile" className="header__dropdown-item">
                      {t('common.profile')}
                    </Link>
                    <Link href="/settings" className="header__dropdown-item">
                      {t('common.settings')}
                    </Link>
                    <Link href="/change-password" className="header__dropdown-item">
                      {t('common.changePassword')}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="header__dropdown-item"
                    >
                      {t('common.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="header__auth">
                <Link href="/login" className="header__auth-login">
                  {t('common.login')}
                </Link>
                <Link href="/register">
                  <Button size="sm">
                    {t('common.register')}
                  </Button>
                </Link>
              </div>
            )}

            <button 
              className="header__toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="header__toggle-icon" />
              ) : (
                <Menu className="header__toggle-icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="header__mobile">
          <div className="header__mobile-links">
            <Link 
              href="/market" 
              className={combineClasses(
                "header__mobile-item",
                isLinkActive('/market') ? 'header__mobile-item--active' : ''
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('market.title')}
            </Link>
            <Link 
              href="/portfolio" 
              className={combineClasses(
                "header__mobile-item",
                isLinkActive('/portfolio') ? 'header__mobile-item--active' : ''
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('portfolio.title')}
            </Link>
            <Link 
              href="/watchlist" 
              className={combineClasses(
                "header__mobile-item",
                isLinkActive('/watchlist') ? 'header__mobile-item--active' : ''
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('watchlist.title')}
            </Link>
            <Link 
              href="/learn" 
              className={combineClasses(
                "header__mobile-item",
                isLinkActive('/learn') ? 'header__mobile-item--active' : ''
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Learn
            </Link>
            {user && (
              <>
                <Link 
                  href="/buy-crypto" 
                  className={combineClasses(
                    "header__mobile-item",
                    isLinkActive('/buy-crypto') ? 'header__mobile-item--active' : ''
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('buySell.buyTitle')}
                </Link>
                <Link 
                  href="/sell-crypto" 
                  className={combineClasses(
                    "header__mobile-item",
                    isLinkActive('/sell-crypto') ? 'header__mobile-item--active' : ''
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('buySell.sellTitle')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Options */}
          <div className="header__mobile-options">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          
          {user ? (
            <div className="header__mobile-user">
              <div className="header__mobile-user-info">
                <img 
                  className="header__mobile-user-avatar" 
                  src={`https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=random`}
                  alt="User avatar" 
                />
                <div>
                  <div className="header__mobile-user-name">{user.displayName || 'User'}</div>
                  <div className="header__mobile-user-email">{user.email}</div>
                </div>
              </div>
              <div className="header__mobile-user-links">
                <Link 
                  href="/profile" 
                  className="header__mobile-user-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('common.profile')}
                </Link>
                <Link 
                  href="/settings" 
                  className="header__mobile-user-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('common.settings')}
                </Link>
                <Link 
                  href="/change-password" 
                  className="header__mobile-user-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('common.changePassword')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="header__mobile-user-link"
                >
                  {t('common.logout')}
                </button>
              </div>
            </div>
          ) : (
            <div className="header__mobile-auth">
              <Link 
                href="/login" 
                className="header__mobile-auth-login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.login')}
              </Link>
              <Link 
                href="/register" 
                className="header__mobile-auth-register"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.register')}
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;