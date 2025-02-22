import React from "react";
import styled from "styled-components";

const ListGroup = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

const ListGroupItem = styled.div`
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

function RepoCard({ repo }) {
  return (
    <div className="card" style={{ width: "18rem", height: "400px" }}>
      <div className="card-body">
        <h5 className="card-title mt-auto">{repo.name}</h5>
        <h6 className="card-subtitle mb-2 mt-auto text-body-secondary">
          {repo.visibility}
        </h6>
        <p className="card-text mt-auto">
          {repo.description ? repo.description : "Açıklama bulunamadı"}
        </p>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link mt-auto"
        >
          Github Linki
        </a>
        <ListGroup className="list-group-flush mt-auto">
          {[
            repo.language ? repo.language : "Dil bulunamadı",
            repo.created_at?.split("T")[0],
          ].map((item, index) => (
            <ListGroupItem key={index}>{item}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default RepoCard;
