import React from "react";
import "./searchbar.css";

const SearchBar = ({ query, setQuery, getData }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Film veya oyuncu arayın..."
      />
      <button onClick={getData}>Ara</button>
    </div>
  );
};

export default SearchBar;
