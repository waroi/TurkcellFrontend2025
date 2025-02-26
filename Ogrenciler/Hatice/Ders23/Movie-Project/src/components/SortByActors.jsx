import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import PersonGrid from "./PersonGrid";

const SortByActors = ({ actors }) => {
  const [sortActor, setSortActor] = useState("populerlik-yuksek");

  const sortedActors = [...actors].sort((a, b) => {
    switch (sortActor) {
      case "isim-az":
        return a.name.localeCompare(b.name, "tr");
      case "isim-za":
        return b.name.localeCompare(a.name, "tr");
      case "populerlik-yuksek":
        return b.popularity - a.popularity;
      case "populerlik-dusuk":
        return a.popularity - b.popularity;
      default:
        return 0;
    }
  });

  return (
    <>
      <Row className="mb-4">
        <Col lg={12}>
          <div className="p-3 border rounded shadow-sm bg-white">
            <h3 className="mb-3">Popüler Oyuncular</h3>
            <Form.Group controlId="sortSelectActor">
              <Form.Label className="fw-semibold">Sıralama:</Form.Label>
              <Form.Select
                value={sortActor}
                onChange={(e) => setSortActor(e.target.value)}
                className="border-secondary shadow-sm"
              >
                <option value="isim-az">🔠 İsim: A-Z</option>
                <option value="isim-za">🔠 İsim: Z-A</option>
                <option value="populerlik-yuksek">🔥 En Popüler</option>
                <option value="populerlik-dusuk">❄️ En Az Popüler</option>
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
      </Row>
      <PersonGrid persons={sortedActors}/>
    </>
  );
};

export default SortByActors;
