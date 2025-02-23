import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const SearchBar = ({ onSearch, setUsername }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    onSearch();
  };
  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="formUsername">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Kullanıcı adını girin"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ara
      </Button>
    </Form>
  );
};
export default SearchBar;
