import React, { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #e0e0e0d6;
  padding: 50px;
  border-radius: 10px;
`;

const GitHubSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  const fetchGitHubUser = async () => {
    if (!username) return;
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!userResponse.ok || !reposResponse.ok)
      throw new Error("User not found");

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    setUserData(userData);
    setRepos(reposData);
    setShowModal(true);
  };

  return (
    <AppContainer>
      <h1>GitHub Kullanıcı Arama</h1>
      <SearchInput
        inputRef={inputRef}
        username={username}
        setUsername={setUsername}
        fetchGitHubUser={fetchGitHubUser}
      />
      {showModal && (
        <Modal
          userData={userData}
          repos={repos}
          modalKapat={() => setShowModal(false)}
        />
      )}
    </AppContainer>
  );
};

export default GitHubSearch;
