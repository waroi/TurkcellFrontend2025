'use client';
import Image from 'next/image';
import styles from '@/styles/components/sections/DownloadApp.module.scss';

const DownloadApp = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Free Your Money & Invest<br />With Confident</h2>
          <p>
            With Cryptor Trade, you can be sure your trading skills are matched
          </p>

          <ul className={styles.features}>
            <li>
              <Image src="/icons/check.svg" alt="check" width={20} height={20} />
              <div>
                <strong>Buy, Sell, And Trade On The Go</strong>
                <p>Manage Your Holdings From Your Mobile Device</p>
              </div>
            </li>
            <li>
              <Image src="/icons/check.svg" alt="check" width={20} height={20} />
              <div>
                <strong>Take Control Of Your Wealth</strong>
                <p>Rest Assured You (And Only You) Have Access To Your Funds</p>
              </div>
            </li>
          </ul>

          <div className={styles.storeButtons}>
            <Image src="/icons/google-play.svg" alt="Google Play" width={130} height={40} />
            <Image src="/icons/app-store.svg" alt="App Store" width={130} height={40} />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.label}>Scan To Download</div>
          <Image src="/icons/download-phone.svg" alt="Phone" width={300} height={400} />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
