'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function MarketSearch({
  onSearch,
  onFilter,
}: {
  onSearch: (term: string) => void;
  onFilter: (filter: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const t = useTranslations('Markets');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="market-search">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="market-filters">
        <button
          className={activeFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          {t('all')}
        </button>
        <button
          className={activeFilter === 'favorites' ? 'active' : ''}
          onClick={() => handleFilterChange('favorites')}
        >
          {t('favorites')}
        </button>
        <button
          className={activeFilter === 'top-gainers' ? 'active' : ''}
          onClick={() => handleFilterChange('top-gainers')}
        >
          {t('topGainers')}
        </button>
        <button
          className={activeFilter === 'top-losers' ? 'active' : ''}
          onClick={() => handleFilterChange('top-losers')}
        >
          {t('topLosers')}
        </button>
      </div>
    </div>
  );
}