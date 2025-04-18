'use client';

import styles from '@/styles/components/sections/LearnAndEarn.module.scss';
import Image from 'next/image';

const cards = [
  {
    title: 'What is a Blockchain?',
    desc: 'Learn about blockchain technology and how it powers cryptocurrencies.',
    image: '/icons/learn.svg',
  },
  {
    title: 'How to Buy Bitcoin',
    desc: 'Step-by-step guide on buying your first Bitcoin safely.',
    image: '/icons/learn.svg',
  },
  {
    title: 'Crypto Wallets',
    desc: 'Discover different types of crypto wallets and their benefits.',
    image: '/icons/learn.svg',
  },
];

const LearnAndEarn = () => {
  return (
    <section className={styles.learnSection}>
      <h2>Learn and Earn</h2>
      <p className={styles.subtitle}>Explore and earn crypto while learning about blockchain and crypto assets.</p>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className={styles.img}
              />
            </div>
            <span className={styles.label}>LEARN & EARN</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnAndEarn;
