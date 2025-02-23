import React, { useEffect, useState } from "react";
import { getRepos, getUser } from "./Services/services";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RepoGrid from "./components/RepoGrid";
const App = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
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

  useEffect(() => {
    if (username) {
      getUser(username).then((data) => {
        console.log("API'den Gelen Veri:", data);
        setUser(data);
      });
    }
  }, [username]);

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
      {user && user.name && (
        <div className="text-center my-4">
          <img src={user.avatar_url} alt="Avatar" width="100" />
          <h2>{user.name}</h2>
          {user.bio && <p className="text-gray-600 mt-1">{user.bio}</p>}
        </div>
      )}

      <RepoGrid repos={filteredRepos} handleSearch={handleSearch} search={search} />

    </>
  );
};
export default App;


