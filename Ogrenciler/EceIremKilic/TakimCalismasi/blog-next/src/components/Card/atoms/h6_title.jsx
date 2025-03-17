import React from "react";
import styles from "@/components/Card/card.module.css";

const H6 = ({ child }) => {
  return (
    <div>
      <h6
        className={`card-author badge ${styles.bgGreen} text-dark  rounded-pill px-3 py-1`}
      >
        {child}
      </h6>
    </div>
  );
};

export default H6;
