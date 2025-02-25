import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import FilmGrid from './FilmGrid';

const FilterSearch = ({ movies, onDetailsClick }) => {
  const [sortOption, setSortOption] = useState('vote_average_desc'); // Varsayılan olarak 'Puan: Azalan'
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortOption) {
      case 'vote_average_asc': // Puan: Düşükten Yükseğe
        return a.vote_average - b.vote_average;
      case 'vote_average_desc': // Puan: Yüksekten Düşüğe
        return b.vote_average - a.vote_average;
      case 'release_date_asc': // En Eski
        return new Date(a.release_date) - new Date(b.release_date);
      case 'release_date_desc': // En Yeni
        return new Date(b.release_date) - new Date(a.release_date);
      default:
        return 0;
    }
  });

  return (
    <Row>
      <Col xs={12} md={3} >
      <h3 className="my-4 text-center">Popüler Filmler</h3>
        <Form.Group controlId="sortSelect">
          <Form.Label>Sıralama</Form.Label>
          <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="vote_average_desc">Puan: Yüksekten Düşüğe</option>
            <option value="vote_average_asc">Puan: Düşükten Yükseğe</option>
            <option value="release_date_desc">En Yeni</option>
            <option value="release_date_asc">En Eski</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col xs={12} md={9}>
        <FilmGrid movies={sortedMovies} onDetailsClick={onDetailsClick} />
      </Col>
    </Row>
  );
};
export default FilterSearch;