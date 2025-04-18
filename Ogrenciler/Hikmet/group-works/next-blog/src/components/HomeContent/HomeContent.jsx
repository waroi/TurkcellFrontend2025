"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import useBlogStore from "@/store/blogStore";
import { useEffect } from "react";
import Carousel from "../Carousel/Carousel";

function HomeContent() {
	const filteredBlogs = useBlogStore((state) => state.filteredBlogs);
	const blogs = useBlogStore((state) => state.blogs);
	const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
	const searchInput = useBlogStore((state) => state.searchInput);

	useEffect(() => {
		fetchBlogs();
	}, []);

	useEffect(() => {}, [filteredBlogs]);

	return (
		<section className="container pb-3">
			<Carousel />
			<div className="row g-2 ">
				{searchInput === "" && filteredBlogs != []
					? blogs?.map((blog) => <BlogCard key={blog.id} {...blog} />)
					: filteredBlogs?.map((blog) => <BlogCard key={blog.id} {...blog} />)}
			</div>
		</section>
	);
}

export default HomeContent;
