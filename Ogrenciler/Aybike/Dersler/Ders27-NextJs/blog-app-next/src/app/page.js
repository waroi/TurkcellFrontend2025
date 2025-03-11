import styles from "./page.module.css";
import BlogCard from "@/components/BlogCard";
import blogData from "@/datas/blogData";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section className="blog-list">
					<div className="row">
						{blogData &&
							blogData.map((blog) => (
								<div key={blog.id} className="col-12 col-sm-6 ">
									<BlogCard blog={blog} />
								</div>
							))}
					</div>
				</section>
			</main>
		</div>
	);
}
