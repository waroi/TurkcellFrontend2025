'use client';
import styles from '@/styles/components/sections/Hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>Buy & Sell Digital Assets In The Rocket</h1>
        <p>
          Coin rocket is the easiest, safest, and fastest way to buy & sell
          crypto asset exchange.
        </p>
        <button className={styles.cta}>Get started now</button>

        <div className={styles.partners}>
          <span>Our Partners</span>
          <div className={styles.logos}>
            <Image src="/icons/profitwell.svg" alt="ProfitWell" width={80} height={20} />
            <Image src="/icons/shipbob.svg" alt="ShipBob" width={80} height={20} />
            <Image src="/icons/subbly.svg" alt="Subbly" width={80} height={20} />
            <Image src="/icons/demio.svg" alt="Demio" width={80} height={20} />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/hero-illustration.svg"
          alt="Illustration"
          width={500}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
