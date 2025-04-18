"use client";

import styles from "./Home.module.css";

const HomeHeader = () => {
  return (
    <div className="mb-4 bg-success">
      <h2 className={styles.title}>Welcome back, Fatih 👋</h2>
      <p className="text-muted">Herdes your portfolio overview today.</p>
    </div>
  );
};

export default HomeHeader;
