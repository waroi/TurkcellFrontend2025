import BlogActions from "./BlogActions";
import styles from "./blogDetails.module.css";

async function BlogDetails({ blog }) {
	return (
		<article className={styles.blogDetailContainer}>
			<div className={styles.blogHeader}>
				<div className={styles.imageWrapper}>
					<img
						className={styles.blogImage}
						src={blog.img_url ? blog.img_url : "/react.svg"}
						alt={blog.title}
					/>
				</div>
				<div className={styles.blogMeta}>
					<span className={styles.dateTag}>
						{new Date(blog.releaseDate).toLocaleDateString("tr-TR", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
				</div>
			</div>

			<div className={styles.blogContent}>
				<h1 className={styles.blogTitle}>{blog.title}</h1>
				<div className={styles.blogDescription}>
					<p>{blog.description}</p>
				</div>

				<div className={styles.blogActions}>
					<BlogActions id={blog.id} />
				</div>
			</div>
		</article>
	);
}

export default BlogDetails;
