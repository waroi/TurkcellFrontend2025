'use client';
import { useState, useContext, createContext } from 'react';
import React from 'react';
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => useContext(SearchContext);
