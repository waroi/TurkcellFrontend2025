import React, { useState } from "react";
import Navbar from "./Components/navbar";
import RepoList from "./Components/repoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GitHubProfile from "./Components/profile"

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = (username) => {
    setLoading(true);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error(error);
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    
   <div className="container">
      <div className=" d-flex flex-column justify-content-center align-items-center vh-100">
        <Navbar onSearch={fetchRepos} />

        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : 
        (
          
          <>
 
          <RepoList repos={repos} />
          </>
        )}
      </div>
    </div>
    
  );
}

export default App;
