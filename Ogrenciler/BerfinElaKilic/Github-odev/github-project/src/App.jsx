import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import { fetchProfile, fetchRepos } from "./services/githubApi";

import "./App.css";

function App() {
  const [repos, setRepos] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [userName, setUserName] = useState("waroi");

  const fetchPersonalData = async () => {
    setProfileData(null);
    try {
      const data = await fetchProfile(userName);
      setProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRepositories = async () => {
    setRepos(null);
    try {
      const data = await fetchRepos(userName);
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userName === "") setUserName('waroi');
    fetchPersonalData();
    fetchRepositories();
  }, [userName]);

  const handleChange = async (value) => {
    setUserName(value);
  };

  return (
    <>
      <NavBar userName={userName} handleChange={handleChange} />
      {(profileData && (
        <Container className="my-5">
          <Row>
            <Col md={3}>{profileData && <Profile profile={profileData} />}</Col>
            <Col md={9}>
              {repos && repos.length > 0 && <Repos repos={repos} />}
            </Col>
          </Row>
        </Container>
      )) || <Image src="../src/assets/404.png" className="w-100" />}
      <Footer />
    </>
  );
}

export default App;