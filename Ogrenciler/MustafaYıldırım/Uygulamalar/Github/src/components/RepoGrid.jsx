import { Container, Row, Col } from "react-bootstrap";
import RepoCard from "./RepoCard";
import styled from "styled-components";

const RepoSection = styled.div`
  background: #f4f4f4;
`;

const RepoTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const RepoGrid = ({ repos, handleSearch, search }) => {
  return (
    <RepoSection className="py-5">
      <Container>
      <RepoTitle className="text-center mb-4">Güncel Repolar</RepoTitle>
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
    </RepoSection>
  );
};

export default RepoGrid;
