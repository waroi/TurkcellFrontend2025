import React, { useEffect, useState } from "react";
import { getRepos } from "./Services/services";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RepoGrid from "./components/RepoGrid";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRepos("mustafayildirim57").then((data) => {
      console.log("API'den Gelen Veri:", data);
      setRepos(data);
    });
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} search={search} />
      <RepoGrid repos={filteredRepos} />
    </>
  );
};

export default App;
