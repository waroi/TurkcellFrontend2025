import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WeatherForm({ handleSearchButtonClick }) {
  const [searchValue, setSearchValue] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchButtonClick(searchValue, endDate, startDate);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center g-3" xs={1} md={3} lg={4}>
        <Col>
          <Form.Group>
            <Form.Label className="text-light mb-1">City Name</Form.Label>
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
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="text-light mb-1">Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min="2020"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="text-light mb-1">End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              max="2025"
            />
          </Form.Group>
        </Col>
        <Col className="d-flex align-items-bottom">
          <Button variant="success" type="submit" className="mt-auto w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default WeatherForm;
