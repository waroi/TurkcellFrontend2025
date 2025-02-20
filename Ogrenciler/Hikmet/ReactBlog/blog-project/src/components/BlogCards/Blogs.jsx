import React from "react";
import BlogCard from "./BlogCard";
import styles from "./Blogs.module.css";

function Blogs() {
	return (
		<div className={styles.blogs}>
			{Array.from({ length: 10 }, (_, index) => (
				<BlogCard key={index} />
			))}
		</div>
	);
}

export default Blogs;
