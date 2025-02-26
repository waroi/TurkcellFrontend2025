import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FilmGrid from "./FilmGrid";

const SortByMovie = ({ movies}) => {
  const [sortOption, setSortOption] = useState("puan-yuksek");
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortOption) {
      case "puan-dusuk":
        return a.vote_average - b.vote_average;
      case "puan-yuksek":
        return b.vote_average - a.vote_average;
      case "tarih-eski":
        return new Date(a.release_date) - new Date(b.release_date);
      case "tarih-yeni":
        return new Date(b.release_date) - new Date(a.release_date);
      default:
        return 0;
    }
  });

  return (
    <Row>
      <Col lg={12} className="mb-5">
        <div className="p-3 border rounded shadow-sm bg-white">
          <h3 className="mb-3">
            Popüler Filmler
          </h3>
          <Form.Group controlId="sortSelect">
            <Form.Label className="fw-semibold">Sıralama:</Form.Label>
            <Form.Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border-secondary shadow-sm"
            >
              <option value="puan-yuksek">
                📈 Puan: Yüksekten Düşüğe
              </option>
              <option value="puan-dusuk">
                📉 Puan: Düşükten Yükseğe
              </option>
              <option value="tarih-yeni">🆕 En Yeni</option>
              <option value="tarih-eski">📅 En Eski</option>
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
export default SortByMovie;
