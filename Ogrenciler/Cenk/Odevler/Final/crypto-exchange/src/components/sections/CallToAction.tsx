'use client';
import styles from '@/styles/components/sections/CallToAction.module.scss';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.wrapper}>
        <div>
          <h2>Earn up to $25 worth of crypto</h2>
          <p>
            Discover How Specific Cryptocurrencies Work — And Get A Bit Of Each Crypto To Try Out For Yourself.
          </p>
        </div>
        <button className={styles.ctaBtn}>Create Account</button>
      </div>
    </section>
  );
};

export default CallToAction;
