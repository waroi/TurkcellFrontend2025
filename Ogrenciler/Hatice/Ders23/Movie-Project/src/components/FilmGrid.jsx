import { Container, Row } from "react-bootstrap";
import FilmCard from "./FilmCard";
import styled from "styled-components";

const FilmSection = styled.div`
  background: #f4f4f4;
`;

const FilmTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const FilmGrid = ({ repos, handleSearch, search }) => {
  return (
    <FilmSection className="py-5">
      <Container>
      <FilmTitle className="text-center mb-4">Güncel Repolar</FilmTitle>
      <div className="d-flex align-items-center justify-content-center mx-auto mb-5 w-75 ">
          <form className="d-flex flex" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Repo ara..."
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </form>
        </div>
        <Row className="row justify-content-center">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </Row>
      </Container>
    </FilmSection>
  );
};

export default FilmGrid;
