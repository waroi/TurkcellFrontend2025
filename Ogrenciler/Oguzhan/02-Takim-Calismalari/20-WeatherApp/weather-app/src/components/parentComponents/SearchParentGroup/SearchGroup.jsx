import styles from "./search.styles.module.css";
import Input from "./../../childComponents/SearchChildGroup/Input/Input";
import Button from "../../childComponents/SearchChildGroup/Button/Button";

const SearchParentGroup = ({ setCity, onClick, text }) => {
  return (
    <div className={styles.container}>
      <Input setCity={setCity} />

      <Button onClick={() => onClick()} text={text} />
    </div>
  );
};
export default SearchParentGroup;
