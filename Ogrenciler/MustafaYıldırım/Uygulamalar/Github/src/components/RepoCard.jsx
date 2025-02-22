import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 18rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CardBody = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CardSubtitle = styled.h6`
  font-size: 0.9rem;
  font-weight: normal;
  color: #6c757d;
  margin-bottom: 0.8rem;
`;

const CardText = styled.p`
  flex-grow: 1;
  font-size: 0.95rem;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 3 satırdan fazla gösterme */
  -webkit-box-orient: vertical;
`;

const CardLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const ListGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ListGroupItem = styled.div`
  background: #f8f9fa;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
  color: #333;
`;

function RepoCard({ repo }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center mb-3">
      <CardContainer>
        <CardBody>
          <CardTitle>{repo.name}</CardTitle>
          <CardSubtitle>{repo.visibility}</CardSubtitle>
          <CardText>
            {repo.description ? repo.description : "Açıklama bulunamadı"}
          </CardText>
          <CardLink
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Linki
          </CardLink>
          <ListGroup>
            {[
              repo.language ? repo.language : "Dil bulunamadı",
              repo.created_at?.split("T")[0],
            ].map((item, index) => (
              <ListGroupItem key={index}>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default RepoCard;
