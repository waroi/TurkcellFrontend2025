import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import styled from "styled-components";
import {
  fetchGitHubUser,
  fetchGitHubUserRepo,
} from "../../services/apiRequest";

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
  const [page, setPage] = useState(1);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    if (!username) return;
    const user = await fetchGitHubUser(username);
    const repos = await fetchGitHubUserRepo(username, page);
    setUserData(user);
    setRepos(repos);
    setShowModal(true);
  };

  const handleShowMore = async () => {
    const nextPage = page + 1;
    const newRepos = await fetchGitHubUserRepo(username, nextPage);
    setRepos([...repos, ...newRepos]);
    setPage(nextPage);
  };

  return (
    <AppContainer>
      <h1>GitHub Kullanıcı Arama</h1>
      <SearchInput
        inputRef={inputRef}
        username={username}
        setUsername={setUsername}
        fetchGitHubUser={handleSearch}
      />
      {showModal && (
        <Modal
          userData={userData}
          repos={repos}
          modalKapat={() => setShowModal(false)}
          handleShowMore={handleShowMore}
        />
      )}
    </AppContainer>
  );
};

export default GitHubSearch;