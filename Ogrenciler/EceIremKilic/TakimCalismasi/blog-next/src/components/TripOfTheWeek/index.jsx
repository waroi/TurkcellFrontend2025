import React from "react";
import styles from "./tripOfTheWeek.module.css";

const TripOfTheWeek = () => {
  return (
    <div className="py-5">
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.bannerWrapper}`}
      >
        <h1
          className={`d-flex justify-content-center align-items-center ${styles.bannerTitle}`}
        >
          TRIP OF THE WEEK
        </h1>
        <div
          className={`d-flex justify-content-center align-items-center text-white ${styles.bannerDescription}`}
        >
          The Story Behind DESCRIPTION
        </div>
      </div>
    </div>
  );
};

export default TripOfTheWeek;
