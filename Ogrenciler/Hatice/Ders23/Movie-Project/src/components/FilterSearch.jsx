// FilterSearch.jsx
import React, { useState } from 'react';

const FilterSearch = ({ onFilterChange, onSortChange }) => {
  const [activeSort, setActiveSort] = useState('popularity.desc');
  const [activeFilter, setActiveFilter] = useState('all');
  const [yearRange, setYearRange] = useState({ from: 2000, to: 2025 });
  const [voteRange, setVoteRange] = useState({ from: 0, to: 10 });
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { id: 'popularity.desc', name: 'Popülerlik (Azalan)' },
    { id: 'popularity.asc', name: 'Popülerlik (Artan)' },
    { id: 'vote_average.desc', name: 'Puan (Azalan)' },
    { id: 'vote_average.asc', name: 'Puan (Artan)' },
    { id: 'release_date.desc', name: 'Yayın Tarihi (Yeni)' },
    { id: 'release_date.asc', name: 'Yayın Tarihi (Eski)' },
    { id: 'title.asc', name: 'Başlık (A-Z)' },
    { id: 'title.desc', name: 'Başlık (Z-A)' },
  ];

  const genreOptions = [
    { id: 'all', name: 'Tüm Kategoriler' },
    { id: '28', name: 'Aksiyon' },
    { id: '12', name: 'Macera' },
    { id: '16', name: 'Animasyon' },
    { id: '35', name: 'Komedi' },
    { id: '80', name: 'Suç' },
    { id: '99', name: 'Belgesel' },
    { id: '18', name: 'Drama' },
    { id: '10751', name: 'Aile' },
    { id: '14', name: 'Fantastik' },
    { id: '36', name: 'Tarih' },
    { id: '27', name: 'Korku' },
    { id: '10402', name: 'Müzik' },
    { id: '9648', name: 'Gizem' },
    { id: '10749', name: 'Romantik' },
    { id: '878', name: 'Bilim Kurgu' },
    { id: '10770', name: 'TV Film' },
    { id: '53', name: 'Gerilim' },
    { id: '10752', name: 'Savaş' },
    { id: '37', name: 'Vahşi Batı' },
  ];

  const handleSortChange = (sortId) => {
    setActiveSort(sortId);
    onSortChange(sortId);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange({
      genre: filterId === 'all' ? null : filterId,
      year: yearRange,
      vote: voteRange
    });
  };

  const handleYearChange = (type, value) => {
    const newYearRange = { ...yearRange, [type]: Number(value) };
    setYearRange(newYearRange);
    
    if (type === 'to' && newYearRange.to < newYearRange.from) {
      setYearRange({ ...newYearRange, from: newYearRange.to });
    }
    if (type === 'from' && newYearRange.from > newYearRange.to) {
      setYearRange({ ...newYearRange, to: newYearRange.from });
    }
  };

  const handleVoteChange = (type, value) => {
    const newVoteRange = { ...voteRange, [type]: Number(value) };
    setVoteRange(newVoteRange);
    
    if (type === 'to' && newVoteRange.to < newVoteRange.from) {
      setVoteRange({ ...newVoteRange, from: newVoteRange.to });
    }
    if (type === 'from' && newVoteRange.from > newVoteRange.to) {
      setVoteRange({ ...newVoteRange, to: newVoteRange.from });
    }
  };

  const applyFilters = () => {
    onFilterChange({
      genre: activeFilter === 'all' ? null : activeFilter,
      year: yearRange,
      vote: voteRange
    });
  };

  const resetFilters = () => {
    setActiveFilter('all');
    setYearRange({ from: 2000, to: 2025 });
    setVoteRange({ from: 0, to: 10 });
    onFilterChange({
      genre: null,
      year: { from: 2000, to: 2025 },
      vote: { from: 0, to: 10 }
    });
  };

  return (
    <div className="filter-search">
      <div className="filter-container">
        <div className="filter-header">
          <h3>Sıralama ve Filtreleme</h3>
          <button 
            className="toggle-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Filtreleri Gizle' : 'Filtreleri Göster'}
          </button>
        </div>

        {showFilters && (
          <div className="filter-options">
            <div className="sort-section">
              <h4>Sıralama</h4>
              <div className="sort-options">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`sort-btn ${activeSort === option.id ? 'active' : ''}`}
                    onClick={() => handleSortChange(option.id)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Kategoriler</h4>
              <div className="genre-options">
                {genreOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`filter-btn ${activeFilter === option.id ? 'active' : ''}`}
                    onClick={() => handleFilterChange(option.id)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="range-filters">
              <div className="range-filter">
                <h4>Yayın Yılı</h4>
                <div className="range-inputs">
                  <div className="range-input">
                    <label>En az:</label>
                    <input
                      type="number"
                      min="1900"
                      max="2025"
                      value={yearRange.from}
                      onChange={(e) => handleYearChange('from', e.target.value)}
                    />
                  </div>
                  <div className="range-input">
                    <label>En fazla:</label>
                    <input
                      type="number"
                      min="1900"
                      max="2025"
                      value={yearRange.to}
                      onChange={(e) => handleYearChange('to', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="range-filter">
                <h4>IMDB Puanı</h4>
                <div className="range-inputs">
                  <div className="range-input">
                    <label>En az:</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={voteRange.from}
                      onChange={(e) => handleVoteChange('from', e.target.value)}
                    />
                  </div>
                  <div className="range-input">
                    <label>En fazla:</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={voteRange.to}
                      onChange={(e) => handleVoteChange('to', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-actions">
              <button className="apply-btn" onClick={applyFilters}>
                Filtreleri Uygula
              </button>
              <button className="reset-btn" onClick={resetFilters}>
                Filtreleri Sıfırla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSearch;