import React from "react";
import "./searchbar.css";

const SearchBar = ({ query, setQuery, getData }) => {
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Film veya oyuncu arayın"
        />
        <button className="btn btn-primary" onClick={getData}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
