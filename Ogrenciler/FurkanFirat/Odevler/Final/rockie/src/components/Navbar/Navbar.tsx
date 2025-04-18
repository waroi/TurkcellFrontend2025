'use client';

import { useTheme } from '@/context/ThemeContext';
import Logo from '@/components/Navbar/Logo';
import Avatar from '@/components/Navbar/Avatar';
import WalletButton from '@/components/Navbar/WalletButton';
import ThemeToggleIcon from '@/components/Navbar/ThemeToggleIcon';
import NotificationIcon from '@/components/Navbar/NotificationIcon';
import NavDropdown from '@/components/Navbar/NavDropdown';
import NavItem from '@/components/Navbar/NavItem';
import Link from 'next/link';
import LanguageToggleIcon from './LanguageToogleIcon';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { theme } = useTheme();
  const { logout, isLoggedIn } = useAuth();
  const t = useTranslations('Navbar');

  return (
    <nav
      className={`navbar navbar-expand-xxl sticky-top ${
        theme === 'light' ? 'bg-surface-main' : 'bg-dark'
      }`}
      data-bs-theme={theme}
    >
      <div className='container-fluid'>
        <Logo />

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarMobileContent'
          aria-controls='navbarMobileContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarMobileContent'>
          {isLoggedIn && (
            <div className='d-block d-xxl-none w-100 my-4'>
              <div className='d-flex flex-column gap-8 align-items-center'>
                <Link href='/profile'>
                  <Avatar />
                </Link>
                <Link href='/wallet'>
                  <WalletButton />
                </Link>
              </div>
            </div>
          )}

          <ul className='navbar-nav me-auto'>
            <NavDropdown label='Homepage' />
            <NavItem label='Market' />
            <NavItem label='Watchlist' />
            <NavItem label='Portfolio' />
          </ul>

          <ul className='navbar-nav ms-auto'>
            {isLoggedIn ? (
              <>
                <NavDropdown label='Assets' />
                <NavDropdown label='Orders & Trades' />

                <div className='d-flex gap-8'>
                  <li className='nav-item d-flex align-items-center'>
                    <LanguageToggleIcon />
                  </li>
                  <li className='nav-item d-flex align-items-center'>
                    <ThemeToggleIcon />
                  </li>
                  <li className='nav-item d-flex align-items-center'>
                    <NotificationIcon />
                  </li>
                  <li className='nav-item d-none d-xxl-flex align-items-center'>
                    <Link href='/wallet'>
                      <WalletButton />
                    </Link>
                  </li>
                  <li className='nav-item d-none d-xxl-flex align-items-center'>
                    <Link href='/profile'>
                      <Avatar />
                    </Link>
                  </li>
                  <li className='nav-item d-flex align-items-center'>
                    <button
                      onClick={logout}
                      className='btn btn-outline-secondary d-flex align-items-center'
                    >
                      <i className='bi bi-box-arrow-right'></i>
                    </button>
                  </li>{' '}
                </div>
              </>
            ) : (
              <div className='d-flex flex-column flex-sm-row gap-8'>
                <div className='d-flex gap-8'>
                  <li className='nav-item'>
                    <ThemeToggleIcon />
                  </li>
                  <li className='nav-item'>
                    <LanguageToggleIcon />
                  </li>
                </div>
                <Link href='/login' className='btn btn-outline-primary px-24'>
                  {t('Login')}
                </Link>
                <Link href='/register' className='btn btn-primary px-24'>
                  {t('Register')}
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
