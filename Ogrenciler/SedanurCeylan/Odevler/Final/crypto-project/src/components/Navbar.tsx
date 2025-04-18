'use client';

import { useEffect, useState, startTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { logoutUser } from '@/lib/fireauth';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const [nickname, setNickname] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;

    startTransition(() => {
      router.push(segments.join('/'));
    });
  };


  const isActive = (path: string) =>
    pathname === path ? 'text-primary fw-semibold' : '';

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(docRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setNickname(data.nickname || data.email);
        }
      } else {
        setNickname(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 px-4 fixed-top">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <strong>Rocket</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-100" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} href="/">
                {t('nav_homepage')}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {t('nav_buy')}
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/buy">{t('buy_cripto')}</Link></li>
                <li><Link className="dropdown-item" href="/sell">{t('sell_cripto')}</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/market')}`} href="/market">
                {t('nav_market')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/spot')}`} href="/coming-soon">
                {t('nav_exchange')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/spot')}`} href="/coming-soon">
                {t('nav_spot')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-1 ${isActive('/home')}`} href="/coming-soon">
                {t('nav_bit')}
                <Image src="/bit.svg" alt="bit" width={10} height={10} />
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {t('nav_pages')}
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/about">About</Link></li>
                <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>

          <div className="user-section d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end gap-2 w-100 mt-3 mt-lg-0">

            <div className="btn-group" role="group">
              <button
                onClick={() => changeLanguage('en')}
                className={`btn btn-sm ${currentLocale === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('tr')}
                className={`btn btn-sm ${currentLocale === 'tr' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                TR
              </button>
            </div>

            <div className="dropdown d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {t('nav_assets')}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Assets</a></li>
              </ul>
            </div>

            <div className="dropdown d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {t('nav_order')}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Orders</a></li>
              </ul>
            </div>

            <div className="dropdown d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                EN/USD
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">TR/TRY</a></li>
              </ul>
            </div>

            <Link href="/favorites" className="btn btn-link p-1" title="Favoriler">
              <i className="fas fa-star text-warning"></i>
            </Link>

            <button className="btn btn-outline-dark rounded-pill px-3 d-none d-lg-block">
              {t('nav_wallet')}
            </button>

            <div className="dropdown">
              <a className="d-flex align-items-center nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                <Image
                  src="/avatar.jpg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                {user ? (
                  <>
                    <li>
                      <span className="dropdown-item-text fw-semibold text-primary text-center">
                        {nickname || 'Kullanıcı'}
                      </span>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link className="dropdown-item" href="/profile">
                        <i className="fas fa-user me-2"></i>
                        {t('profile')}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={async () => {
                          await logoutUser();
                          router.push('/login');
                        }}
                        className="dropdown-item text-danger"
                      >
                        <i className="fas fa-sign-out-alt me-2"></i>
                        {t('logout')}
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link className="dropdown-item text-primary fw-semibold" href="/login">
                      {t('login')}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
