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
function App() {
  const [user, setUser] = useState({});
  const [userRepos, setRepos] = useState([]);
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
    } catch (error) {
      setError(`fetchGitRepo API çağrısı başarisiz! ${error}`);
    }
  };

  useEffect(() => {
    fetchGitUserData();
    fetchGitRepo();
  }, [username]);

  const handleSearch = () => {
    fetchGitUserData(username);
    fetchGitRepo(username);
  };
  return (
    <>
      <Container>
        <SearchBar
          onSearch={handleSearch}
          setUsername={setUsername}
          username={username}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <LanguageFilter repos={userRepos}></LanguageFilter>
        <Sort></Sort>
        <Row>
          <Col md={4}>
            <Profile user={user}></Profile>
          </Col>
          <Col md={8}>
            <Row>
              {userRepos.map((repo) => {
                return (
                  <Col xs={12} key={repo.id + "col"}>
                    <RepoCard repo={repo} key={repo.id}></RepoCard>
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
