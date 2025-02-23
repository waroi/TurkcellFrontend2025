import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim() !== "") {
      onSearch(username);

    }
  };

  return (
    <div className="navcontainer w-100 mb-5">
      <nav className="navbar p-3 rounded container-fluid">
        <div className="container d-flex flex-column align-items-between">
          <h2 className="nav-title fs-1">GitHub Repository</h2>

          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="GitHub Kullanıcı Adınızı Giriniz..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn btn-primary px-4" onClick={handleSearch}>
              Ara
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
