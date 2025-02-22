import { getAllUsers } from "./api/useFetch";
import { useState } from "react";
import { Avatar } from "./components/styled";
import UserModal from "./components/UserModal";
import "./App.css";
function App() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState(null);
  const handleSearch = async () => {
    const data = await getAllUsers(userName);
    setUsers(data);
  };
  return (
    <>
      <div className="row search-container">
        <div className="input-group mb-3">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="form-control no-border"
            placeholder="Kullanıcı ara..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Ara
          </button>
        </div>
        <ul>
          {users &&
            users.items &&
            users.items.map((user) => (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center border rounded-2 mb-4 p-3 gap-2"
              >
                <div className="d-flex gap-2 align-items-center">
                  <Avatar
                    src={user.avatar_url}
                    className="card-img-top"
                    alt="Kullanıcı avatarı"
                    size="50px"
                  />
                  <p className="mb-0">{user.login}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#userModal-${user.id}`}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <UserModal
                  userx={user.login}
                  modalId={`userModal-${user.id}`}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
export default App;
