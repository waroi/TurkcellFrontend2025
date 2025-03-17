import React from "react";
import styles from "@/components/Footer/footer.module.css";

const Brand = ({ brandIcon }) => {
  return (
    <div>
      <i aria-hidden="true" className={`${styles.brands} ${brandIcon}`}></i>
    </div>
  );
};

export default Brand;
