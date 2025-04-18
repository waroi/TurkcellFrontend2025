'use client';
import Image from 'next/image';
import styles from '@/styles/components/sections/About.module.scss';

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/icons/about-graphic.png" alt="About graphic" width={716} height={540} />
        </div>
        <div className={styles.content}>
          <h2>What Is Rockie</h2>
          <p>
            Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade,
            Futures Trade, P2P, Staking, Mining, and margin.
          </p>
          <p>
            You can also buy and sell BTC, ETH, XRP, OKB and many more. Start exploring now to see real-time prices and easy trades.
          </p>
          <button className={styles.exploreBtn}>Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
