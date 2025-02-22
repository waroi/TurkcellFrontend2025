import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 18rem;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardVisibility = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const CardTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
`;

const ListGroup = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

const ListGroupItem = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

function RepoCard({ repo }) {
  return (
    <Card className="post-card shadow-lg">
      <CardBody>
        <CardVisibility>{repo.visibility}</CardVisibility>
        <CardTitle>{repo.name}</CardTitle>
        <CardText>{repo.description}</CardText>
      </CardBody>

      <ListGroup className="list-group-flush">
        {[repo.language, repo.created_at].map((item, index) => (
          <ListGroupItem key={index}>{item}</ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
}

export default RepoCard;
