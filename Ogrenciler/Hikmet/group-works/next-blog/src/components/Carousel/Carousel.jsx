"use client";
import useBlogStore from "@/store/blogStore";
import { useEffect } from "react";
import styles from "./carousel.module.css";

export default function Carousel() {
	const blogs = useBlogStore((state) => state.blogs);
	const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

	useEffect(() => {
		fetchBlogs();
	}, [fetchBlogs]);

	return (
		<div className="container mb-4">
			<section
				id="carouselExampleSlidesOnly"
				className={`carousel slide ${styles.carouselSection}`}
				data-bs-ride="carousel"
				data-bs-interval="5000">
				<div className="carousel-inner">
					{blogs?.map((blog, index) => (
						<div
							className={`carousel-item ${index === 0 ? "active" : ""} ${
								styles["carousel-item"]
							}`}
							key={blog.id || index}>
							<div className={styles.imageWrapper}>
								<img
									src={blog.img_url}
									alt={blog.title || "Blog image"}
									className="d-block w-100"
								/>
							</div>
							<h3 className={styles.description}>{blog.title}</h3>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
