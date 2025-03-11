'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCard from '../component/BlogCard';
import blogs from '../data/blog.json';
import Navbar from '../component/Navbar';
import { SearchProvider } from '@/searchContext';
import { useSearch } from '@/searchContext';

export default function Home() {
    const { filteredBlogs } = useSearch();
    return (
        <div className="container">
            <h1>Bloglarımız</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredBlogs.map(blog => (
                    <div key={blog.id}>
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    );
};
