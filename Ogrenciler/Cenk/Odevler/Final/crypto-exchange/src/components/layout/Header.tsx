'use client';
import Image from 'next/image';
import styles from '@/styles/components/layout/Header.module.scss';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
<<<<<<< Updated upstream
import { useState } from 'react';
=======
>>>>>>> Stashed changes

const navLeftItems = [
  { label: 'Homepage', dropdown: true },
  { label: 'Buy Crypto' },
  { label: 'Markets' },
  { label: 'Exchange' },
  { label: 'Spot' },
  { label: 'BITUSDT', icon: true },
  { label: 'Pages', dropdown: true },
];

const navRightItems = [
  { label: 'Assets', dropdown: true },
  { label: 'Orders & Trades', dropdown: true },
  { label: 'EN/USD', dropdown: true },
];

const Header = () => {
<<<<<<< Updated upstream
  const [mobileOpen, setMobileOpen] = useState(false);

=======
>>>>>>> Stashed changes
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src="/icons/logo.svg" alt="Logo" width={28} height={28} />
          <span className={styles.logoText}>Rocket</span>
        </div>
        <div className={styles.menuWrapper}>
          {navLeftItems.map((item, i) => (
            <div key={i} className={styles.navItem}>
              {item.label}
              {item.icon && <span>💧</span>}
              {item.dropdown && <span className={styles.dropIcon}>▼</span>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        {navRightItems.map((item, i) => (
          <div key={i} className={styles.navItem}>
            {item.label}
            {item.dropdown && <span className={styles.dropIcon}>▼</span>}
          </div>
        ))}

        <LanguageSwitcher />
        <ThemeToggle />
        <button className={styles.iconBtn}>
          <Image src="/icons/bell.svg" alt="Notifications" width={18} height={18} />
        </button>
        <button className={styles.walletBtn}>Wallet</button>
        <Image
          src="/icons/user.png"
          alt="User Avatar"
          className={styles.avatar}
          width={32}
          height={32}
        />
      </div>
<<<<<<< Updated upstream

      <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
        <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
      </button>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLeftItems.map((item, i) => (
            <div key={i} className={styles.navItem}>
              {item.label}
              {item.icon && <span>💧</span>}
              {item.dropdown && <span className={styles.dropIcon}>▼</span>}
            </div>
          ))}
          {navRightItems.map((item, i) => (
            <div key={i} className={styles.navItem}>
              {item.label}
              {item.dropdown && <span className={styles.dropIcon}>▼</span>}
            </div>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      )}
=======
>>>>>>> Stashed changes
    </header>
  );
};

<<<<<<< Updated upstream
export default Header;
=======
export default Header;
>>>>>>> Stashed changes
