import React, { useState } from "react";
import Navbar from "./Components/navbar";
import RepoList from "./Components/repoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GitHubProfile from "./Components/profile";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(""); // Kullanıcı adı için state

  const fetchRepos = (username) => {
    setUsername(username); // Kullanıcı adını güncelle
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

  // Temizleme fonksiyonu
  const clearResults = () => {
    setRepos([]);       // Repo listesini temizle
    setUsername("");    // Kullanıcı adını sıfırla
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Navbar onSearch={fetchRepos} />


        {username && <GitHubProfile username={username} />}

        {repos.length > 0 && (
          <button className="btn btn-danger mt-3" onClick={clearResults}>
            Temizle
          </button>
        )}

        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <RepoList repos={repos} />
        )}
      </div>
    </div>
  );
}

export default App;
