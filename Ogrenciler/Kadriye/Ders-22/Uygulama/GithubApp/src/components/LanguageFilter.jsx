import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

function LanguageFilter({ repos, onFilterChange }) {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState("");

  const fetchLanguage = async (repo) => {
    try {
      const response = await fetch(repo.languages_url, {
        headers: {
          Authorization: `${import.meta.env.TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("GitHub language bulunamadi");
      }
      const data = await response.json();
      return Object.keys(data)[0]; // İlk dili döndür
    } catch (error) {
      setError(`fetchRepoLang API çağrısı başarisiz! ${error}`);
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const languageSet = new Set(); // Geçici bir Set oluştur
      for (const repo of repos) {
        const lang = await fetchLanguage(repo);
        if (lang) {
          languageSet.add(lang); // Set'ye ekle
        }
      }
      setLanguages([...languageSet]); // Set'i diziye çevirerek durumu güncelle
    };
    if (repos.length > 0) {
      fetchLanguages(); // Repo varsa dilleri fetch et
    }
  }, [repos]);

  const handleFilterChange = (language) => {
    onFilterChange(language); // Ana bileşene filtre değişikliğini belirt
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Languages
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map((language) => (
          <Dropdown.Item key={language} onClick={() => handleFilterChange(language)}>
            {language}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageFilter;
