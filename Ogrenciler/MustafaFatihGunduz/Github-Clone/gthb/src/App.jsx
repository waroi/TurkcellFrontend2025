import { useState, useEffect } from "react";
import { getUsers, getUserRepositories } from "../components/RequestModel";
import '../css/main.css';
import styled from "styled-components";
import UserSearch from '../components/UserSearch';
import UserCard from "../components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const user = await getUsers(text);
    setUsers(user);
    user?.items?.forEach((user) => {
      fetchRepositories(user.login);
    });
  };

  const fetchRepositories = async (user) => {
    const repositories = await getUserRepositories(user);
    setRepositories(repositories);
  };

  return (
    <>
      <UserSearch users={users} text={text} setUsers={setUsers} setText={setText} fetchUsers={fetchUsers} fetchRepositories={fetchRepositories}>
      </UserSearch>
      <UserCard users={users} repositories={repositories} setRepositories={setRepositories} fetchRepositories={fetchRepositories}></UserCard>
    </>
  );
}

export default App;
