'use client';

import { useState } from 'react';
import styles from '@/styles/components/pages/BlogGrid.module.scss';
import Image from 'next/image';

const categories = ['View All', 'Learn & Earn', 'Metaverse', 'Energy', 'NFT', 'Gaming', 'Music'];

const cards = Array.from({ length: 8 }, (_, i) => ({
  title: 'Learn about UI8 coin and earn an All-Access Pass',
  author: 'Floyd Buckridge',
  date: 'Feb 03, 2021',
  tag: 'Learn & Earn',
  id: i + 1,
}));

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('View All');

  return (
    <section className={styles.blogWrapper}>
      <h1 className={styles.title}>Blog Grid</h1>

      <div className={styles.topBar}>
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.catBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <input className={styles.searchInput} type="text" placeholder="Search Post" />
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.thumbnail}>
              <Image src="/icons/learn.svg" alt="learn" width={360} height={220} />
            </div>
            <span className={styles.badge}>LEARN & EARN</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.cardMeta}>
              <span className={styles.author}><span className={styles.dot} /> {card.author}</span>
              <span className={styles.date}>{card.date}</span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.loadMore}>Load more</button>
    </section>
  );
};

export default BlogGrid;
