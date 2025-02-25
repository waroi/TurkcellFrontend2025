import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FilmCard from './FilmCard';

const FilmGrid = ({ movies, onDetailsClick }) => {
  return (
    <Row className="g-3 justify-content-center">
      {movies.map((movie) => (
        <Col key={movie.id} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center" style={{ maxWidth: '20%' }}>
          <FilmCard movie={movie} onDetailsClick={onDetailsClick} />
        </Col>
      ))}
    </Row>
  );
};

export default FilmGrid;
