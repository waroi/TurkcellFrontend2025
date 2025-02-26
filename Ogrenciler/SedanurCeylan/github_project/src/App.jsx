import React, { useState } from "react";
import Navbar from "./Components/navbar";
import RepoList from "./Components/repoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GitHubProfile from "./Components/profile";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const fetchRepos = (username) => {
    setUsername(username);
    setLoading(true);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Kullanıcı Bulunamadı");
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

  const clearResults = () => {
    setRepos([]);
    setUsername(" ");
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Navbar onSearch={fetchRepos} />

        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">

            {username && <GitHubProfile username={username} />}

            {repos.length > 0 && (
              <button className="btn btn-danger mt-3" onClick={clearResults}>
                Temizle
              </button>
            )}
          </div>

          <div>

            {loading ? (
              <p className="text-center mt-4">Yükleniyor...</p>
            ) : (
              <div className="scroll">
                <RepoList repos={repos} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
