import React from "react";
import styles from "./tripOfTheWeek.module.css";
import Title from "./atoms/Title";
import Subtitle from "./atoms/Subtitle";

const TripOfTheWeek = () => {
  return (
    <div className="py-5">
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.bannerWrapper}`}
      >
        <Title title={"TRIP OF THE WEEK"} />
        <Subtitle subtitle={"The Story Behind DESCRIPTION"} />
      </div>
    </div>
  );
};

export default TripOfTheWeek;
