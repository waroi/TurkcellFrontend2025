'use client';
import BlogCard from '../component/BlogCard';
import blogs from '../data/blog.json';
import { useSearch } from '../context/searchContext';
export default function Home() {
  const { searchQuery } = useSearch();

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
