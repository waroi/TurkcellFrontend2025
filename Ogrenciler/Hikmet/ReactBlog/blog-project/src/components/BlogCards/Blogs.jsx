import React, { useEffect, useState } from "react";
import BlogClient from "../../client/blogClient";
import BlogCard from "./BlogCard";
import styles from "./Blogs.module.css";

function Blogs() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await BlogClient.getAll();
			setBlogs(response);
		}
		getData();
	}, []);

	return (
		<div className={styles.blogs}>
			{blogs.map((blog) => (
				<BlogCard
					key={blog.id}
					id={blog.id}
					img={blog.image}
					title={blog.title}
					description={blog.description}
					category={blog.category}
					avatar={blog.avatar}
					author={blog.name}
				/>
			))}
		</div>
	);
}

export default Blogs;
