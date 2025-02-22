import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function RepoCard({ repo }) {
  const [language, setLanguage] = useState();
  const [error, setError] = useState("");
  const fetchLanguage = async () => {
    try {
      const response = await fetch(`${repo.languages_url}`, {
        headers: {
          Authorization: `${import.meta.env.TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("GitHub language bulunamadi");
      }
      const data = await response.json();
      setLanguage(Object.keys(data)[0]);
    } catch (error) {
      setError(`fetchRepoLang API çağrısı başarisiz! ${error}`);
    }
  };
  useEffect(() => {
    fetchLanguage();
  }, []);
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {repo.name} <Badge bg="secondary">{repo.visibility}</Badge>
        </Card.Title>
        <Card.Text>
          <small>{repo.fork}</small>
        </Card.Text>
        <Card.Text>{repo.description}</Card.Text>
        <Card.Text>
          {language}
          Updated on
          {repo.pushed_at.substring(0, 10)}
        </Card.Text>
        <a variant="primary" href={repo.html_url} target="_blank">
          Go Repository
        </a>
      </Card.Body>
    </Card>
  );
}

export default RepoCard;
