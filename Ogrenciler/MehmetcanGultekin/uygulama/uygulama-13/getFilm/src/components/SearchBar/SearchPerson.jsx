import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchPerson = ({ onSearch, setPersonName, personName }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonName(inputValue);
  };
  useEffect(() => {
    if (personName) {
      onSearch();
    }
  }, [personName]);
  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="text"
        placeholder="Enter movie name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="ms-2" type="submit">
        Filter
      </Button>
    </Form>
  );
};
export default SearchPerson;
