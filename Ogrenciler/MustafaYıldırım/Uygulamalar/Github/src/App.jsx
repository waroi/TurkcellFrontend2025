import React, { useEffect, useState } from "react";
import { getRepos } from "./Services/services";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RepoCard from "./components/RepoCard";

const MyComponent = () => {
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
      <div>
        <h2>Repositories</h2>
      </div>

      <div className="grid-container">
        {(search ? filteredRepos : repos).map((repo) => (
          <RepoCard repo={repo} />
        ))}
      </div>
    </>
  );
};

export default MyComponent;
