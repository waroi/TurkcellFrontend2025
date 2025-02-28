// SearchBar.jsx
import React from 'react';
import search_icon from '../assets/search.png';

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        id="search"
        className="form-control rounded-pill"
        placeholder="Search..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(city);
            setCity('');
          }
        }}
      />
      <span className="input-group-text bg-white border-0 ms-3 rounded-pill">
        <img
          className="searchBar"
          src={search_icon}
          alt="Search"
          onClick={() => onSearch(city)}
        />
      </span>
    </div>
  );
};

export default SearchBar;

