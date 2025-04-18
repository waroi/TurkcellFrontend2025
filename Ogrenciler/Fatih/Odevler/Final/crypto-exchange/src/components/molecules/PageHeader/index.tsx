import React from "react";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className={styles.titleContainer}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
