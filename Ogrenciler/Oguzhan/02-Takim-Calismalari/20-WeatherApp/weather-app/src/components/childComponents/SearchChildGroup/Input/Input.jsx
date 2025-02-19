import styles from "./input.styles.module.css";
const Input = ({ setCity }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Şehir giriniz"
      onChange={(e) => {
        console.log("Gelen değer:", e.target.value);
        setCity(e.target.value);
      }}
    />
  );
};

export default Input;
