import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="d-flex justify-content-center align-items-center position-relative py-5">
      <img
        src="../src/assets/header.webp"
        alt="Arka Plan"
        className="position-absolute object-fit-cover w-100 position absolute"
        loading="eager"
        height={280}
      />
      <Container className="text-center position-relative">
        <h1 className="fw-bold text-white">Hoş Geldiniz!</h1>
        <p className="text-white fs-5">
          Keşfedilecek milyonlarca film ve kişi. Şimdi keşfedin.
        </p>
        <Form
          onSubmit={handleSearch}
          className="d-flex search-form rounded-pill bg-white overflow-hidden"
        >
          <Form.Control
            type="text"
            placeholder="Film veya kişi ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-0 p-3"
          />
          <Button type="submit" className="py-3 px-4 text-white border-0">
            Ara
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Search;
