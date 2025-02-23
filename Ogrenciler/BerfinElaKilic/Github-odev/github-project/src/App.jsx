import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Image from "react-bootstrap/esm/Image";

function App() {
  const [repos, setRepos] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [userName, setUserName] = useState("waroi");

  const token =
    "11AT2PN4A072jaRlOag1Jl_tCTmefp1LfPHXLGyH7LtTYxlxE4Nrq00cnxmpaX6OeYU4XXLB3Drg2f9z2S";
  const baseUrl = "https://api.github.com/users/";
  const fetchPersonalData = async () => {
    setProfileData(null);

    const response = await fetch(`${baseUrl}${userName}`, {
      method: "GET",
      headers: {
        Authorization: `token github_pat_${token}`,
      },
    });
    if (!response.ok) {
      return console.log("error");
    }
    const data = await response.json();
    setProfileData(data);
  };

  const fetchRepos = async () => {
    setRepos(null);
    const response = await fetch(`${baseUrl}${userName}/repos`, {
      method: "GET",
      headers: {
        Authorization: `token github_pat_${token}`,
      },
    });
    if (!response.ok) {
      return console.log("error");
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
  };

  return (
    <>
      <NavBar handleChange={handleChange} />
      {(profileData && (
        <Container fluid className="my-5">
          <Row>
            <Col md={3}>{profileData && <Profile profile={profileData} />}</Col>
            <Col md={9}>
              {" "}
              {repos && repos.length > 0 && <Repos repos={repos} />}
            </Col>
          </Row>
        </Container>
      )) || <Image src="../src/assets/404.png" />}

      <Footer />
    </>
  );
}

export default App;
