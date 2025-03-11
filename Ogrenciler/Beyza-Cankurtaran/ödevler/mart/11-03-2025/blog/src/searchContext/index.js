'use client';
import {useState, useContext ,createContext} from "react";
import React from 'react'
import blog from '../data/blog.json'
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(blog);
    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = blog.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogs(filtered);
      };
    

    return (
        <SearchContext.Provider value={{ searchQuery,setSearchQuery,filteredBlogs, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );

};
export const useSearch = () => useContext(SearchContext);

