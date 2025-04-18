import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : ''}`}
          placeholder="Search for cryptocurrencies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          className="btn btn-primary" 
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
