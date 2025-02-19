import styles from "./button.styles.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        Ara
      </button>
    </>
  );
};

export default Button;
