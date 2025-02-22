import Form from "react-bootstrap/Form";

export function SearchInput({ setCategory }) {
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
export function InfoInput({
  placeholder = "",
  type = "text",
  value = "",
  as = "input",
  row = 1,
  onchangeFunction,
}) {
  function handleChange(e) {
    onchangeFunction(e.target.value);
  }
  return (
    <Form.Control
      className="info-input my-2 w-100"
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      as={as}
      rows={row}
    />
  );
}
