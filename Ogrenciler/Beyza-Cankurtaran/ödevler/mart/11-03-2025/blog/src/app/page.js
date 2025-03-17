'use client';
import React, { useState, useEffect } from 'react';
import BlogCard from '../component/BlogCard';
import { useSearch } from '../context/searchContext';
import { db } from "../../firebase/firebaseconfig";

import { collection, getDocs} from "firebase/firestore";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const { searchQuery } = useSearch();
  const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } 
    };
    useEffect(() => {
      fetchBlogs();
    }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='container'>
        <h1 className='text-center mb-3 py-4'>"Hazır mısın? Okumaya Başla!"</h1>
        <div className='row gy-3 mb-5'>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
