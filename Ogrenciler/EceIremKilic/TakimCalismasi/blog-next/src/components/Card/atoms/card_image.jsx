import React from "react";
import styles from "@/components/Card/card.module.css";

const CardImage = ({ img, title }) => {
  return (
    <div>
      <img
        src={img}
        className={`card-img-top object-fit-cover rounded-top-4 img-fluid ${styles.image}`}
        alt={title}
      />
    </div>
  );
};

export default CardImage;
