import { useState, useEffect, use } from "react";
import fetch from "./util/fetch";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Repository from "./components/Repository";
import { Repositories } from "./util/styled-components";
import "./App.css";

function App() {
  const [searchUser, setSearchUser] = useState();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      if (!searchUser) return;

      try {
        let user = await fetch.getUser(searchUser);
        if (user.status != 404) setUser(user);
      } catch {}
    })();
  }, [searchUser]);

  useEffect(() => {
    (async () => {
      if (!user) return;

      try {
        let repositories = await fetch.getRepositories(user.login);
        if (repositories.status != 404) setRepositories(repositories);
      } catch {}
    })();
  }, [user]);

  return (
    <>
      <SearchBar searchUser={searchUser} setSearchUser={setSearchUser} />
      <main>
        <UserCard user={user} />
        <Repositories>
          {repositories.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))}
        </Repositories>
      </main>
    </>
  );
}

export default App;
