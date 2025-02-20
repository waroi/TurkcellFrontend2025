import styles from "./input.styles.module.css";
const Input = ({ setCity }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Şehir giriniz"
      onChange={(e) => {
        setCity(e.target.value);
      }}
    />
  );
};

export default Input;
