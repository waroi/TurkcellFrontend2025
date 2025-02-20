import AuthorInfo from "../AuthorInfo";
import styles from "./BlogCard.module.css";

function BlogCard() {
	return (
		<article className={styles.blogCard}>
			<img
				src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="img"
			/>
			<div className={styles.blogCardInfo}>
				<span className=" badge">Category</span>
				<h2>Blog Title</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta harum
					sapiente mollitia quia id quam dolorum, unde aspernatur maiores
					labore.
				</p>
				<AuthorInfo />
			</div>
		</article>
	);
}

export default BlogCard;
