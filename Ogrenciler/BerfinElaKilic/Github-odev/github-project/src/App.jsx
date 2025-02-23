import { use, useEffect, useState } from "react";

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
  const [userName, setUserName] = useState("waroi");
  const [error, setError] = useState('')

  const fetchPersonalData = async () => {
    setProfileData(null)
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (response.ok) setProfileData(data);
  };

  const fetchRepos = async () => {
    setRepos(null)
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const data = await response.json();
    if (!response.ok) {
      setError(response?.status)
    }
    setRepos(data);
  };

  useEffect(() => {
    if (userName) {
      fetchPersonalData();
      fetchRepos();
    }
  }, [userName]);

  const handleChange = async (value) => {
    setUserName(value);
    fetchPersonalData();
    fetchRepos();
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
