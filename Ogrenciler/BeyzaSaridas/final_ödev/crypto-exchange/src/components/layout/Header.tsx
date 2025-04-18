'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Clock, History, Menu, X, Wallet } from 'lucide-react';
import ThemeToggle from '../../components/ui/ThemeToggle';
import LanguageSelector from '../../components/ui/LanguageSelector';
import Button from '../../components/ui/Button';
import { combineClasses } from '../../lib/utils';
import { changePassword, logoutUser } from '../../lib/firebaseService';
import './Header.scss';

interface User {
  displayName: string;
  email: string;
}

const user: User | null = {
  displayName: 'Beyzs',
  email: 'beyzasaridas@gmail.com',
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const isLinkActive = (path: string) => pathname === path;

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log('Logout successful');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      setError(null);
      await changePassword(currentPassword, newPassword);
      alert('Şifre başarıyla değiştirildi!');
      setIsChangePasswordOpen(false);
    } catch (error: any) {
      setError(error.message || 'Şifre değiştirme başarısız oldu.');
    }
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
                  'header__nav-link',
                  isLinkActive('/market') ? 'header__nav-link--active' : ''
                )}
              >
                {t('market.title')}
              </Link>
              <Link
                href="/portfolio"
                className={combineClasses(
                  'header__nav-link',
                  isLinkActive('/portfolio') ? 'header__nav-link--active' : ''
                )}
              >
                {t('portfolio.title')}
              </Link>
              <Link
                href="/watchlist"
                className={combineClasses(
                  'header__nav-link',
                  isLinkActive('/watchlist') ? 'header__nav-link--active' : ''
                )}
              >
                {t('watchlist.title')}
              </Link>
              <Link
                href="/learn"
                className={combineClasses(
                  'header__nav-link',
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

                  <div className="header__actions-wallet-container">
                    <button
                      className="header__actions-wallet"
                      onClick={() => setIsWalletMenuOpen(!isWalletMenuOpen)}
                    >
                      <svg className="header__actions-wallet-icon" viewBox="0 0 24 24">
                        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                      <span>Wallet</span>
                    </button>
                    {isWalletMenuOpen && (
                      <div className="header__wallet-dropdown">
                        <Link href="/buy-crypto" className="header__wallet-dropdown-item">
                          {t('Buy-Crypto')}
                        </Link>
                        <Link href="/sell-crypto" className="header__wallet-dropdown-item">
                          {t('Sell-Crypto')}
                        </Link>
                      </div>
                    )}
                  </div>
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
                {isUserMenuOpen && (
                  <div className="header__dropdown">
                    <Link href="/user-profile" className="header__dropdown-item">
                      {t('Profile')}
                    </Link>
                    <Link href="/settings" className="header__dropdown-item">
                      {t('Settings')}
                    </Link>
                    <button
                      onClick={() => setIsChangePasswordOpen(true)}
                      className="header__dropdown-item"
                    >
                      {t('common.changePassword')}
                    </button>
                    <button onClick={handleLogout} className="header__dropdown-item">
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
                  <Button size="sm">{t('common.register')}</Button>
                </Link>
              </div>
            )}
            <button
              className="header__toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="header__toggle-icon" /> : <Menu className="header__toggle-icon" />}
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
                'header__mobile-item',
                isLinkActive('/market') ? 'header__mobile-item--active' : ''
              )}
            >
              {t('market.title')}
            </Link>
            <Link
              href="/portfolio"
              className={combineClasses(
                'header__mobile-item',
                isLinkActive('/portfolio') ? 'header__mobile-item--active' : ''
              )}
            >
              {t('portfolio.title')}
            </Link>
            <Link
              href="/watchlist"
              className={combineClasses(
                'header__mobile-item',
                isLinkActive('/watchlist') ? 'header__mobile-item--active' : ''
              )}
            >
              {t('watchlist.title')}
            </Link>
            <Link
              href="/learn"
              className={combineClasses(
                'header__mobile-item',
                isLinkActive('/learn') ? 'header__mobile-item--active' : ''
              )}
            >
              Learn
            </Link>
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
                  <div className="header__mobile-user-name">{user?.displayName || 'User'}</div>
                  <div className="header__mobile-user-email">{user?.email}</div>
                </div>
              </div>
              <div className="header__mobile-user-links">
                <Link href="/profile" className="header__mobile-user-link">
                  {t('common.profile')}
                </Link>
                <Link href="/settings" className="header__mobile-user-link">
                  {t('common.settings')}
                </Link>
                <Link href="/transactions" className="header__mobile-user-link">
                  Trade History
                </Link>
                <Link href="/buy-crypto" className="header__mobile-user-link">
                  {t('common.buyCrypto')}
                </Link>
                <Link href="/sell-crypto" className="header__mobile-user-link">
                  {t('common.sellCrypto')}
                </Link>
                <button
                  onClick={() => setIsChangePasswordOpen(true)}
                  className="header__mobile-user-link"
                >
                  {t('common.changePassword')}
                </button>
                <button onClick={handleLogout} className="header__mobile-user-link">
                  {t('common.logout')}
                </button>
              </div>
            </div>
          ) : (
            <div className="header__mobile-auth">
              <Link href="/login" className="header__mobile-auth-login">
                {t('common.login')}
              </Link>
              <Link href="/register" className="header__mobile-auth-register">
                {t('common.register')}
              </Link>
            </div>
          )}
        </div>
      )}
      {isChangePasswordOpen && (
        <div className="change-password-modal">
          <div className="change-password-modal__content">
            <h2>{t('common.changePassword')}</h2>
            <input
              type="password"
              placeholder="Mevcut Şifre"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Yeni Şifre"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {error && <p className="error-text">{error}</p>}
            <button onClick={handleChangePassword}>Şifreyi Değiştir</button>
            <button onClick={() => setIsChangePasswordOpen(false)}>İptal</button>
          </div>
        </div>

      )}
    </header>
  );
};

export default Header;