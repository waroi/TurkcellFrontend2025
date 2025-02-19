import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function WeatherForm({ handleSearchButtonClick }) {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    handleSearchButtonClick(searchValue, endDate, startDate);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex ms-auto gap-2">
      <InputGroup>
        <Form.Control
          className="search-input"
          type="search"
          placeholder="Search by city name"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            backgroundColor: "transparent",
            color: "white",
          }}
        />
      </InputGroup>
      <Form.Label className="text-light mb-1">Start Date</Form.Label>
      <Form.Control
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        min="2020"
      />
      <Form.Label className="text-light mb-1">End Date</Form.Label>
      <Form.Control
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        max="2025"
      />

      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default WeatherForm;
