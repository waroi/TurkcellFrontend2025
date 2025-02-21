import Button from "react-bootstrap/Button";
function SearchButton({ setCategory, categoryInput }) {
  function set() {
    setCategory(categoryInput);
  }
  return (
    <Button variant="success" type="button" className="m-2" onClick={set}>
      Ara
    </Button>
  );
}

export default SearchButton;
