"use client";
import useBlogStore from "@/store/blogStore";
import { useEffect } from "react";
import styles from "./carousel.module.css";

export default function Carousel() {
	const blogs = useBlogStore((state) => state.blogs);
	const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<section
			id="carouselExampleSlidesOnly"
			className={`carousel slide mb-3 ${styles.carouselSection}`}
			data-bs-ride="carousel">
			<div className="carousel-inner">
				{blogs?.map((blog, index) => (
					<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
						<div className={styles.imageWrapper}>
							<img src={blog.imageUrl} alt="img" />
						</div>
						<p className={styles.description}>{blog.title}</p>
					</div>
				))}
			</div>
		</section>
	);
}
