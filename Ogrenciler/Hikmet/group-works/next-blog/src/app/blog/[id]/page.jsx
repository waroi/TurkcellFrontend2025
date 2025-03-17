"use client";

import BlogDetails from "@/components/BlogDetail/BlogDetails";
import Navbar from "@/components/Navbar/Navbar";
import useBlogStore from "@/store/blogStore";
import { useEffect, useState } from "react";

function BlogsDetail({ params }) {
	const [blog, setBlog] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const fetchBlogById = useBlogStore((state) => state.fetchBlogById);

	useEffect(() => {
		const getBlog = async () => {
			try {
				setIsLoading(true);
				const blogData = await fetchBlogById(params.id);
				setBlog(blogData);
			} catch (error) {
				console.error("Error fetching blog:", error);
			} finally {
				setIsLoading(false);
			}
		};

		getBlog();
	}, [params.id, fetchBlogById]);

	if (isLoading) {
		return (
			<>
				<Navbar />
				<div className="container mb-3">
					<div className="d-flex justify-content-center my-5">
						<div className="spinner-border text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (!blog) {
		return (
			<>
				<Navbar />
				<div className="container mb-3">
					<div className="alert alert-danger my-5" role="alert">
						Blog bulunamadı!
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<div className="container mb-3">
				<BlogDetails blog={blog} />
			</div>
		</>
	);
}

export default BlogsDetail;
