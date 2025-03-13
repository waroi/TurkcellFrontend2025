"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function BlogsDetail() {
	const { id } = useParams();

	const [blog, setBlog] = useState();

	function getBlog() {
		fetch(`http://localhost:3000/blogs/${id}`)
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}
	useEffect(() => {
		getBlog();
	}, []);

	if (!blog) {
		return <div>Blog bulunamadı!</div>;
	}

	return (
		<div className="container">
			<div className="d-flex flex-column align-items-center justify-content-center">
				<img
					className="shadow-lg border rounded-5 p-3  mt-5"
					height={"300px"}
					width={"300px"}
					src={blog.imageUrl}
					alt={blog.title}
				/>
				<h1 className="my-4">{blog.title}</h1>
				<p>{blog.description}</p>
				<h6>
					Yayın Tarihi:
					<span className="badge text-bg-secondary mx-2">
						{blog.releaseDate}
					</span>
				</h6>
				<div className="d-flex justify-content-center gap-3">
					<a href="#" className="btn btn-primary mt-5">
						Düzenle
					</a>
					<a href="#" className="btn btn-danger mt-5">
						Sil
					</a>
				</div>
			</div>
		</div>
	);
}

export default BlogsDetail;
