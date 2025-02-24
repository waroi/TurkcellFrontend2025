import { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./components/Profile";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";
import LanguageFilter from "./components/LanguageFilter";
import Sort from "./components/Sort";
import {
  SearchContainer,
  FilterContainer,
} from "./components/StyledComponents";

function App() {
  const [user, setUser] = useState({});
  const [userRepos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("greenmagican");

  const fetchGitUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `${import.meta.env.TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("GitHub account bulunamadi");
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(`fetchGitUserData API çağrısı başarisiz! ${error}`);
    }
  };

  const fetchGitRepo = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `${import.meta.env.TOKEN}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("GitHub account bulunamadi");
      }
      const data = await response.json();
      setRepos(data);
      setFilteredRepos(data);
    } catch (error) {
      setError(`fetchGitRepo API çağrısı başarisiz! ${error}`);
    }
  };
  useEffect(() => {
    fetchGitUserData();
    fetchGitRepo();
  }, [username]);

  const handleSearch = () => {
    fetchGitUserData();
    fetchGitRepo();
  };

  const handleFilterChange = (language) => {
    if (language === "All") {
      setFilteredRepos(userRepos);
    } else {
      const filtered = userRepos.filter(
        (repo) =>
          repo.language === language ||
          (repo.language === null && language === "Other")
      );
      setFilteredRepos(filtered);
    }
  };

  const handleSort = (criteria) => {
    let sortedRepos = [...filteredRepos]; // Mevcut filtrelenmiş depo dizisini kopyala
    if (criteria === "updated") {
      sortedRepos.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
    } else if (criteria === "name") {
      sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "stars") {
      sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    setFilteredRepos(sortedRepos); // Sıralanmış diziyi güncelle
  };

  return (
    <>
      <Container>
        <SearchContainer>
          <SearchBar
            onSearch={handleSearch}
            setUsername={setUsername}
            username={username}
          />

          {error && <div className="alert alert-danger">{error}</div>}
          <FilterContainer>
            <LanguageFilter
              repos={userRepos}
              onFilterChange={handleFilterChange}
            />
            <Sort onSort={handleSort} />
          </FilterContainer>
        </SearchContainer>
        <Row>
          <Col md={4} className="my-2">
            <Profile user={user}></Profile>
          </Col>
          <Col md={8}>
            <Row>
              {filteredRepos.map((repo) => {
                return (
                  <Col xs={12} key={repo.id} className="my-2">
                    <RepoCard repo={repo}></RepoCard>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
