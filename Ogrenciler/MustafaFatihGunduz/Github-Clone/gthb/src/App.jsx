import { useState, useEffect } from "react";
import {
  getUsers,
  getUserRepositories,
  getUserInfos,
} from "../components/RequestModel";
import "../css/main.css";
import styled from "styled-components";
import UserSearch from "../components/UserSearch";
import UserCard from "../components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [text, setText] = useState("");
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const user = await getUsers(text);
    setUsers(user);
    user?.items?.forEach((user) => {
      fetchRepositories(user.login);
      fetchUserInfos(user.login);
    });
  };

  const fetchRepositories = async (user) => {
    const repositories = await getUserRepositories(user);
    setRepositories(repositories);
  };

  const fetchUserInfos = async (user) => {
    const userInfos = await getUserInfos(user);
    setUserInfos(userInfos);
  };

  return (
    <>
      <UserSearch
        users={users}
        text={text}
        setUsers={setUsers}
        setText={setText}
        fetchUsers={fetchUsers}
        fetchRepositories={fetchRepositories}
        fetchUserInfos={fetchUserInfos}
      ></UserSearch>
      <UserCard
        users={users}
        repositories={repositories}
        userInfos={userInfos}
        setRepositories={setRepositories}
        fetchRepositories={fetchRepositories}
      ></UserCard>
    </>
  );
}

export default App;
