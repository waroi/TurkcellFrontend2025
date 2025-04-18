import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="d-flex w-100" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-dark text-light border-secondary"
          placeholder="Search for cryptocurrencies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          <i className="bi bi-search"></i>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
