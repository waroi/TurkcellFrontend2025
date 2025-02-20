import styles from "./search.styles.module.css";
import Input from "./../../childComponents/SearchChildGroup/Input/Input";
import Button from "../../childComponents/SearchChildGroup/Button/Button";

const SearchParentGroup = ({ setCity, onClick }) => {
  return (
    <div className={styles.container}>
      <Input setCity={setCity} />
      <Button onClick={() => onClick()} />
    </div>
  );
};
export default SearchParentGroup;
