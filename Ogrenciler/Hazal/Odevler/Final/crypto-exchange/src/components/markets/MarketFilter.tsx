'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function MarketFilter({
  onSearch,
  onFilterChange,
}: {
  onSearch: (term: string) => void;
  onFilterChange: (filter: string) => void;
}) {
  const t = useTranslations('Markets');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="market-filters">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="filter-buttons">
        {['all', 'favorites', 'top-gainers', 'top-losers'].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => handleFilter(filter)}
          >
            {t(filter)}
          </button>
        ))}
      </div>
    </div>
  );
}