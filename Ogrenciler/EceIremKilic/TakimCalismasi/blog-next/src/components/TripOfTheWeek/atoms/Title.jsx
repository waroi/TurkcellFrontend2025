import React from "react";
import styles from "@/components/TripOfTheWeek/tripOfTheWeek.module.css";

const Title = ({ title }) => {
  return (
    <div>
      <h1
        className={`d-flex justify-content-center align-items-center ${styles.bannerTitle} text-white fw-bold`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
