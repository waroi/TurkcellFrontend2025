import React, { useEffect, useState } from "react";
import { getRepos, addRepo, editRepo, deleteRepo } from "./Services/services";

const MyComponent = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos("mustafayildirim57").then((data) => setRepos(data));
  }, []);

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
