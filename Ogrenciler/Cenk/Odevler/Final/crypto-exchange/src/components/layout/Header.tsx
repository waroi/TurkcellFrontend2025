'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/layout/Header.module.scss';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <Image src="/icons/logo.svg" alt="Logo" width={28} height={28} />
          <span className={styles.logoText}>Rocket</span>
        </Link>

        <div className={styles.menuWrapper}>
          <Link href="/" className={styles.navItem}>
            Homepage <span className={styles.dropIcon}>▼</span>
          </Link>
          <Link href="/buy-crypto" className={styles.navItem}>
            Buy Crypto
          </Link>
          <Link href="/markets" className={styles.navItem}>
            Markets
          </Link>
          <div className={styles.navItem}>Exchange</div>
          <div className={styles.navItem}>Spot</div>
          <div className={styles.navItem}>
            BITUSDT <span>💧</span>
          </div>
          <Link href="/pages" className={styles.navItem}>
  Pages <span className={styles.dropIcon}>▼</span>
</Link>

        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.navItem}>
          Assets <span className={styles.dropIcon}>▼</span>
        </div>
        <div className={styles.navItem}>
          Orders & Trades <span className={styles.dropIcon}>▼</span>
        </div>
        <div className={styles.navItem}>
          EN/USD <span className={styles.dropIcon}>▼</span>
        </div>

        <LanguageSwitcher />
        <ThemeToggle />

        <button className={styles.iconBtn}>
          <Image src="/icons/bell.svg" alt="Notifications" width={18} height={18} />
        </button>

        {user ? (
          <>
            <Link href="/profile" className={styles.authLink}>Profile</Link>
            <Link href="/profile" className={styles.authLink}>Profile</Link>
<Link href="/wallet" className={styles.authLink}>Wallet</Link>

            <button className={styles.logoutBtn} onClick={() => signOut(auth)}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.authLink}>Login</Link>
            <Link href="/register" className={styles.authBtn}>Register</Link>
          </>
        )}

        <Image
          src="/icons/user.png"
          alt="User Avatar"
          className={styles.avatar}
          width={32}
          height={32}
        />
      </div>

      <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
        <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
      </button>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.navItem}>
            Homepage <span className={styles.dropIcon}>▼</span>
          </Link>
          <Link href="/buy-crypto" className={styles.navItem}>
            Buy Crypto
          </Link>
          <Link href="/markets" className={styles.navItem}>
            Markets
          </Link>
          <div className={styles.navItem}>Exchange</div>
          <div className={styles.navItem}>Spot</div>
          <div className={styles.navItem}>
            BITUSDT <span>💧</span>
          </div>
          <Link href="/pages" className={styles.navItem}>
  Pages <span className={styles.dropIcon}>▼</span>
</Link>


          <div className={styles.navItem}>
            Assets <span className={styles.dropIcon}>▼</span>
          </div>
          <div className={styles.navItem}>
            Orders & Trades <span className={styles.dropIcon}>▼</span>
          </div>
          <div className={styles.navItem}>
            EN/USD <span className={styles.dropIcon}>▼</span>
          </div>

          {user ? (
            <>
              <span className={styles.userEmail}>{user.email}</span>
              <button className={styles.logoutBtn} onClick={() => signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.authLink}>Login</Link>
              <Link href="/register" className={styles.authBtn}>Register</Link>
            </>
          )}

          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;