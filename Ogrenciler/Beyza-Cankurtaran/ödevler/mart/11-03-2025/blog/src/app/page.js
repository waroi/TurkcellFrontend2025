'use client';
import React from 'react';
import BlogCard from '../component/BlogCard';
import { useSearch } from '../context/searchContext';
import useFetchBlogs from './useFetchBlogs';

export default function Home() {
  const { blogs } = useFetchBlogs();
  const { searchQuery } = useSearch();

  const filterBlogs = (blogs, query) => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredBlogs = filterBlogs(blogs, searchQuery);

  return (
    <div className='container'>
      <h1 className='text-center mb-3 py-4'>"Hazır mısın? Okumaya Başla!"</h1>
      <div className='row gy-3 mb-5'>
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
