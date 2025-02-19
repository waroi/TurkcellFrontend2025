import styles from "./button.styles.module.css";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        Gir
      </button>
    </>
  );
};

export default Button;
