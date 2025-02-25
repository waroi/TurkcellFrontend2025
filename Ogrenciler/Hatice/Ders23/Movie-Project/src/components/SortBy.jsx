import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FilmGrid from "./FilmGrid";

const SortBy = ({ movies}) => {
  const [sortOption, setSortOption] = useState("vote_average_desc");
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortOption) {
      case "vote_average_asc":
        return a.vote_average - b.vote_average;
      case "vote_average_desc":
        return b.vote_average - a.vote_average;
      case "release_date_asc":
        return new Date(a.release_date) - new Date(b.release_date);
      case "release_date_desc":
        return new Date(b.release_date) - new Date(a.release_date);
      default:
        return 0;
    }
  });

  return (
    <Row>
      <Col lg={12} className="mb-5">
        <div className="p-3 border rounded shadow-sm bg-white">
          <h4 className="fw-bold mb-3">
            Popüler Filmler
          </h4>
          <Form.Group controlId="sortSelect">
            <Form.Label className="fw-semibold">Sıralama:</Form.Label>
            <Form.Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border-secondary shadow-sm"
            >
              <option value="vote_average_desc">
                📈 Puan: Yüksekten Düşüğe
              </option>
              <option value="vote_average_asc">
                📉 Puan: Düşükten Yükseğe
              </option>
              <option value="release_date_desc">🆕 En Yeni</option>
              <option value="release_date_asc">📅 En Eski</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Col>
      <Col>
        <FilmGrid movies={sortedMovies} />
      </Col>
    </Row>
  );
};
export default SortBy;
