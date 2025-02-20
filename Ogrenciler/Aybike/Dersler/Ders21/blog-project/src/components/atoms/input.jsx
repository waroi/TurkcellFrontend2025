import Form from "react-bootstrap/Form";

function SearchInput({ setCategory }) {
  function set(e) {
    setCategory(e.target.value);
  }
  return (
    <Form.Control
      className="search-input my-2 w-100"
      type="search"
      placeholder="Kategori Yazınız"
      aria-label="Search"
      onChange={set}
    />
  );
}

export default SearchInput;
