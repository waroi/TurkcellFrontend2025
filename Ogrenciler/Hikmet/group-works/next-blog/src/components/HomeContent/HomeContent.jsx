"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import useBlogStore from "@/store/blogStore";
import { useEffect } from "react";

function HomeContent() {
	const blogs = useBlogStore((state) => state.blogs);
	const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

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
