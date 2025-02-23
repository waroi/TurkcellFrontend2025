import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
function LanguageFilter({ repos }) {
  const [languages, setLanguages] = useState(new Set());
  const [error, setError] = useState("");
  const fetchLanguage = async (repo) => {
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
      setLanguages(languages.add(Object.keys(data)[0]));
    } catch (error) {
      setError(`fetchRepoLang API çağrısı başarisiz! ${error}`);
    }
  };
  useEffect(() => {
    setLanguages(new Set());
    repos.map((repo) => {
      fetchLanguage(repo);
    });
  }, [repos]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Languages
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {[...languages].map((language) => {
          return <Dropdown.Item href="">{language}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageFilter;
