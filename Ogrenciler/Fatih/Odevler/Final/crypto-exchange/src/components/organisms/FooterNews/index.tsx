"use client";

import FooterContactInfo from "../../molecules/FooterContactInfo";
import FooterLinks from "../../molecules/FooterLinks";
import FooterNewsletter from "../../molecules/FooterNewslatter";
import styles from "./FooterNews.module.css";

const FooterNews = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <FooterContactInfo />
        <div className={`${styles.column} ${styles.divider}`}>
          <FooterLinks />
        </div>
        <div className={styles.column}>
          <FooterNewsletter />
        </div>
      </div>
      <div className={`${styles.copyright} d-flex text-center mb-4`}>
        © 2022 Free For World People
      </div>
    </footer>
  );
};

export default FooterNews;
