import Image from "next/image";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = () => {
  return (
    <div className="text-center mt-4">
      <button className={`${styles.bg} rounded-pill px-4`}>
        <Image src="/global/load.svg" width={15} height={15} alt="Load" />
        <span className={`${styles.text} ps-1`}>Load more</span>
      </button>
    </div>
  );
};

export default LoadMoreButton;
