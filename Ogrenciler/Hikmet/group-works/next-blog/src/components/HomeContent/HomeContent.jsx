"use client"

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard/BlogCard";

function HomeContent() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:3000/blogs");
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error("Blog verileri alınamadı:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <section className="container">
            <div className="row">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </section>
    );
}

export default HomeContent;