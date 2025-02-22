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

const RepoGrid = ({ repos }) => {
  return (
    <RepoSection className="py-5">
      <Container>
        <RepoTitle className="text-center mb-4">Güncel Repolar</RepoTitle>
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
