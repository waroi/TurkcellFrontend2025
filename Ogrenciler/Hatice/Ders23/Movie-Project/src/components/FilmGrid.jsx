import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FilmCard from './FilmCard';

const FilmGrid = ({ movies }) => {
  return (
    <Row className="g-3 justify-content-center">
      {movies.map((movie) => (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" >
          <FilmCard movie={movie}  />
        </Col>
      ))}
    </Row>
  );
};

export default FilmGrid;
