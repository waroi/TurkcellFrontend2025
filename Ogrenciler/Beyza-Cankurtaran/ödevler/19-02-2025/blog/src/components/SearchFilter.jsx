import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm, categoryTerm, setCategoryTerm }) => {
  return (
    <div className="container p-3">
      <input
        type="text"
        placeholder="İsim Ara..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategori Ara..."
        className="form-control mb-3"
        value={categoryTerm}
        onChange={(e) => setCategoryTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;