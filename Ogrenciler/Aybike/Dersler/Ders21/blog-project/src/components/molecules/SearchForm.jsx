import Form from "react-bootstrap/Form";
import { SearchInput } from "../atoms/input";
import { SearchButton } from "../atoms/button";
import { useState } from "react";
function SearchForm({ setCategory }) {
  const [category_input, setCategoryInput] = useState("");
  return (
    <Form className="d-flex">
      <Form.Group className="d-flex justify-items-center">
        <SearchInput setCategory={setCategoryInput}></SearchInput>
      </Form.Group>
      <SearchButton
        setCategory={setCategory}
        categoryInput={category_input}
      ></SearchButton>
    </Form>
  );
}

export default SearchForm;
