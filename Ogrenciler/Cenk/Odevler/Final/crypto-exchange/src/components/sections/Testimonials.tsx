'use client';
import Image from 'next/image';
import styles from '@/styles/components/sections/Testimonials.module.scss';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.left}>
        <h2>Our Customers Love What We Do</h2>
        <h4>Transform Your Idea Into Reality With Finsweet</h4>
        <p>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout.
        </p>
        <div className={styles.avatars}>
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src="/icons/avatar.svg"
              alt="avatar"
              width={36}
              height={36}
            />
          ))}
          <a href="#" className={styles.reviewLink}>30+ Customer Reviews</a>
        </div>
      </div>

      <div className={styles.right}>
        <Image src="/icons/quote.svg" alt="quote" width={24} height={24} />
        <blockquote>
          “Great course I really enjoyed it and the course was way easy to learn
          with very good explanations of the code, I could easily understand and
          develop applications with the knowledge gathered during the course.”
        </blockquote>
        <div className={styles.customer}>
          <div className={styles.info}>
            <Image src="/icons/avatar.svg" alt="Johnny" width={40} height={40} />
            <div>
              <strong>Johnny Andro</strong>
              <span>Director, Company</span>
            </div>
          </div>
          <Image src="/icons/company-logo.svg" alt="Company Logo" width={80} height={16} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
