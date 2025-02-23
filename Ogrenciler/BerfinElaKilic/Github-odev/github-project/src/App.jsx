import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [repos, setRepos] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState('')

  const fetchPersonalData = async (userName) => {
    setProfileData(null)
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      setError(response.status);
      return }
      const data = await response.json();
      setProfileData(data);
  };

  const fetchRepos = async (userName) => {
    setRepos(null)
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    
    if (!response.ok) {
      setError(response?.status)
    }
    const data = await response.json();
    setRepos(data);
  };

  useEffect(() => {
    if (userName !== "") {
      fetchPersonalData();
      fetchRepos();
    }
  }, [userName]);

  const handleChange = async (value) => {
    setUserName(value);
    fetchPersonalData(value);
    fetchRepos(value);
  }

  return (
    <>
      <NavBar handleChange={handleChange} />
      <Container className="mt-5">
        {profileData &&
          <Row>
            <Col md={3}>
              {profileData && <Profile profile={profileData} />}
            </Col>
            <Col md={9}> {repos && repos.length > 0 && <Repos repos={repos} />}</Col>
          </Row>}
      </Container>

      <Footer />
    </>
  );
}

export default App;
