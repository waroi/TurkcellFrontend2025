import { useState, useEffect } from "react";
import {
  getUsers,
  getUserRepositories,
  getUserInfos,
  getLangs
} from "../components/RequestModel";
import "../css/main.css";
import UserSearch from "../components/UserSearch";
import UserCard from "../components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [text, setText] = useState("");
  const [userInfos, setUserInfos] = useState({});
  const [langs, setLangs] = useState({});

  const fetchUsers = async (userLogin, repoName) => {
    const user = await getUsers(text);
    const filteredUser = user?.items?.filter((user) => user.login === text);
    setUsers(filteredUser[0]);
    filteredUser?.forEach((filteredUser) => {
      fetchRepositories(filteredUser.login);
      fetchUserInfos(filteredUser.login);
    });
  };

  const fetchRepositories = async (userLogin) => {
    const filtedRepositories = await getUserRepositories(userLogin);
    setRepositories(filtedRepositories);
    console.log("filtedRepositories", filtedRepositories);

  filtedRepositories.forEach((repo) => {
    fetchLangs(userLogin, repo.name);
  });
  };

  const fetchUserInfos = async (userLogin) => {
    const userInfos = await getUserInfos(userLogin);
    setUserInfos(userInfos);
    console.log("userInfos", userInfos);
  };

  const fetchLangs = async (userLogin, repoName) => {
    // const langs = await getLangs(userLogin, repoName);
    // setLangs(langs);
    // console.log("langs", langs);
    const languages = await getLangs(userLogin, repoName);
  setLangs((prevLangs) => ({
    ...prevLangs,
    [repoName]: languages[0], 
  }));
  }

  return (
    <>
      <UserSearch
        users={users}
        text={text}
        setText={setText}
        fetchUsers={fetchUsers}
      ></UserSearch>
      {users.length === 0 ? null : (
        <UserCard
          users={users}
          repositories={repositories}
          userInfos={userInfos}
          langs={langs}
        ></UserCard>
      )}
    </>
  );
}

export default App;
