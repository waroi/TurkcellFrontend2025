"use client";

import blogData from "@/components/data.json";
import React from "react";

function BlogsDetail({ params }) {
	const { id } = React.use(params.id);

	const post = blogData.find((blog) => blog.id === id);
	console.log(post);

	return (
		<div>
			<h1>{params.id}</h1>
			<p>{params.title}</p>
		</div>
	);
}

export default BlogsDetail;
