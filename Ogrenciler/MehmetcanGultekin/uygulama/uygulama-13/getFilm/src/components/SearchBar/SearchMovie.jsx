import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchMovie = ({ onSearch, setMovieName, movieName }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieName(inputValue);
  };
  useEffect(() => {
    if (movieName) {
      onSearch();
    }
  }, [movieName]);
  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="text"
        placeholder="Enter movie name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="ms-2" type="submit">
        Search
      </Button>
    </Form>
  );
};
export default SearchMovie;
