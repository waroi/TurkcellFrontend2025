import { useState, useEffect } from "react";
import fetch from "./util/fetch";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Repository from "./components/Repository";
import styled from "styled-components";
import "./App.css";

function App() {
  const [searchUser, setSearchUser] = useState("");

  const Repositories = styled.section`
    background-color: var(--white);
    box-shadow: 0 0 20px var(--shadow);
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: scroll;
  `;

  // useEffect(() => {
  //   (async () => {
  //     setData(await fetch.getUser("zeynepguney"));
  //   })();
  // }, []);

  return (
    <>
      <SearchBar searchUser={searchUser} setSearchUser={setSearchUser} />
      <main>
        <UserCard />
        <Repositories>
          <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository /> <Repository />
          <Repository />
          <Repository />
        </Repositories>
      </main>
    </>
  );
}

export default App;
