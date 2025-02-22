import { Container, Row, Col } from "react-bootstrap";
import RepoCard from "./RepoCard";
import styled from "styled-components";

const BlogSection = styled.div`
  background: #f4f4f4;
`;

const BlogTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const RepoGrid = ({ repos }) => {
  return (
    <BlogSection className="py-5">
      <Container>
        <BlogTitle className="text-center mb-4">Güncel Blog Yazıları</BlogTitle>
        <Row className="justify-content-center">
          {repos.map((repo) => (
            <Col
              key={repo.id}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              className="d-flex justify-content-center mb-5"
            >
              <RepoCard repo={repo} />
            </Col>
          ))}
        </Row>
      </Container>
    </BlogSection>
  );
};

export default RepoGrid;
