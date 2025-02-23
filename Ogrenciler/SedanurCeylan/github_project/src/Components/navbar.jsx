import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
 <div className="navcontainer w-75 ">
        <nav className="navbar navbar-dark bg-dark p-3 w-75 rounded container-fluid">
      <div className="container d-flex flex-column align-items-between">
        <h2 className="text-white">GitHub Repo Search</h2>

        <div className="input-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </nav>
 </div>
  );
}

export default Navbar;
