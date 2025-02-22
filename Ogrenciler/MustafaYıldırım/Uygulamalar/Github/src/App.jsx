import React, { useEffect, useState } from "react";
import { getRepos } from "./Services/services";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RepoGrid from "./components/RepoGrid";
const App = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState(""); 
  const [userSearch, setUserSearch] = useState(""); 
  const [username, setUsername] = useState(""); 

  useEffect(() => {
    if (username) {
      getRepos(username).then((data) => {
        console.log("API'den Gelen Veri:", data);
        setRepos(data);
      });
    }
  }, [username]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    setUsername(userSearch);
    setSearch(""); 
  };
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Navbar userSearch={userSearch} setUserSearch={setUserSearch} handleSearchSubmit={handleSearchSubmit} />
      <RepoGrid repos={filteredRepos} handleSearch={handleSearch} search={search} />
    </>
  );
};
export default App;