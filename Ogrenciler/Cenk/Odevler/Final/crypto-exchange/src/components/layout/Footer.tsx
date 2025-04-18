'use client';
import styles from '@/styles/components/layout/Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image src="/icons/logo.svg" alt="Rocket Logo" width={32} height={32} />
            <span className={styles.logoText}>Rocket</span>
          </div>
          <p className={styles.talk}>Let’s talk! 👋</p>
          <p className={styles.contact}>+98 902 353 2926</p>
          <p className={styles.contact}>Sinahosseini379@Gmail.Com</p>
          <p className={styles.copy}>Copyright © 2022 Free For World People</p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>PRODUCTS</h4>
            <ul>
              <li>Spot</li>
              <li>Inverse Perpetual</li>
              <li>USDT Perpetual</li>
              <li>Exchange</li>
              <li>Launchpad</li>
              <li>Binance Pay</li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>Buy Crypto</li>
              <li>Markets</li>
              <li>Tranding Fee</li>
              <li>Affiliate Program</li>
              <li>Referral Program</li>
              <li>API</li>
            </ul>
          </div>

          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>Bybit Learn</li>
              <li>Help Center</li>
              <li>User Feedback</li>
              <li>Submit A Request</li>
              <li>API Documentation</li>
              <li>Trading Rules</li>
            </ul>
          </div>

          <div>
            <h4>ABOUT US</h4>
            <ul>
              <li>About Bybit</li>
              <li>Authenticity Check</li>
              <li>Careers</li>
              <li>Business Contacts</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © 2022 Free For World People</p>
        <div className={styles.socials}>
          <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} />
          <Image src="/icons/twitter.svg" alt="Twitter" width={18} height={18} />
          <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
