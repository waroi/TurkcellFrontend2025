'use client';
import BlogCard from '../component/BlogCard';
import blogs from '../data/blog.json';
import { useSearch } from '@/searchContext';

export default function Home() {
  const { searchQuery } = useSearch();

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <h1 className='text-center mt-2 mb-3'>Bloglarımız</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {filteredBlogs.map((blog) => (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
