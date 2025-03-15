import React from "react";
import styles from "./notFound.module.css";

const NotFound = ({ text }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.bgColor}`}
    >
      <p className="display-6 fs-4 fw-bold">{text}</p>
    </div>
  );
};

export default NotFound;
