import { useState, useEffect } from "react";
import "./App.css";
import { getUsers, getUserRepositories } from "./components/RequestModel";

function App() {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const user = await getUsers(text);
    setUsers(user);
  };

  const fetchRepositories = async (user) => {
    const repositories = await getUserRepositories(user);
    setRepositories(repositories);
  };

  return (
    <>
      <div>
        <h1>GitHub Clone</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={fetchUsers}>Search</button>
        {users?.items?.map((user) => {
          console.log(repositories);
          return (
            <div key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div className="repositories">
                <div className="card">
                  {/* {repositories?.map((repo) => {
                    return (
                      <div key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                      </div>
                    );
                  })} */}
                </div>
                <button onClick={fetchRepositories(user)}>Fetch Repos</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
