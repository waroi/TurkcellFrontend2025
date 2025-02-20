import React from "react";
import BlogCard from "./BlogCard";
import styles from "./Blogs.module.css";

function Blogs() {
		// document.getElementById("clickListener").addEventListener("click",()=>{
		// 	document.getElementById("overlay").style.remove("display")
		// 	document.getElementById("overlay").style.display = "block"
		// })
	return (
		<div className={styles.blogs}>
			{Array.from({ length: 10 }, (_, index) => (
				<BlogCard key={index} />
			))}
		</div>
	);
}

export default Blogs;
