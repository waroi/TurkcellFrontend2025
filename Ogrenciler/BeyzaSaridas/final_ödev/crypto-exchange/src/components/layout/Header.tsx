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
import { changePassword, logoutUser, getCurrentUserProfile } from '../../lib/firebaseService'; // Firebase servisleri
import './Header.scss';

interface User {
  displayName: string;
  email: string;
}

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
  const [user, setUser] = useState<{ displayName: string; email: string } | null>(null);

  // Kullanıcı bilgilerini yükleme
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        if (userProfile && userProfile.displayName && userProfile.email) {
          setUser({
            displayName: userProfile.displayName,
            email: userProfile.email,
          });
        } else {
          setUser({
            displayName: 'Unknown User',
            email: 'Unknown Email',
          });
        }
      } catch (error) {
        console.error('Kullanıcı bilgileri alınamadı:', error);
      }
    };
    fetchUserProfile();
  }, []);

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
      setUser(null); // Kullanıcı bilgilerini temizle
      console.log('Logout successful');
      window.location.href = '/login'; // Login sayfasına yönlendirme
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
      setCurrentPassword('');
      setNewPassword('');
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
                Crypto Planet
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
                </>
              )}
            </div>
            {user ? (
              <div className="header__user">
                <button
                  className="header__user-button"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <img
                    className="header__user-avatar"
                    src={`https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=random`}
                    alt="User avatar"
                  />
                </button>
                {isUserMenuOpen && (
                  <div className="header__dropdown">
                    <Link href="/user-profile" className="header__dropdown-item">
                      {t('common.profile')}
                    </Link>
                    <Link href="/settings" className="header__dropdown-item">
                      {t('common.settings')}
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
          </div>
        </div>
      </div>
      {/* Change Password Modal */}
      {isChangePasswordOpen && (
        <div className="change-password-modal">
          <div className="change-password-modal__content">
            <h2>{t('common.changePassword')}</h2>
            {error && <p className="change-password-modal__error">{error}</p>}
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
            <button onClick={handleChangePassword}>Kaydet</button>
            <button onClick={() => setIsChangePasswordOpen(false)}>İptal</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;