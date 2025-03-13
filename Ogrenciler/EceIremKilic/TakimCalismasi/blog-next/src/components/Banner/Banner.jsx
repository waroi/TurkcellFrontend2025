import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div
      className={` py-5 ${styles.banner} d-flex align-items-center justify-content-center`}
    >
      <div className="container w-50">
        <div className=" display-2 fw-bold text-white text-center">
          Keşfet, yaşa, unutulmaz anılar biriktir! ✨🌍
        </div>
      </div>
    </div>
  );
};

export default Banner;
