import React from "react";
import styles from "@/components/TripOfTheWeek/tripOfTheWeek.module.css";

const Subtitle = ({ subtitle }) => {
  return (
    <div>
      <h6
        className={`d-flex justify-content-center align-items-center text-white ${styles.bannerDescription}`}
      >
        {subtitle}
      </h6>
    </div>
  );
};

export default Subtitle;
