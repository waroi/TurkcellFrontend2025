import Image from "next/image";
import Link from "next/link";
import styles from "./blogCard.module.css";

function BlogCard({ id, title, description, imageUrl, releaseDate }) {
	return (
		<div className={`col-md-4 ${styles.card}`}>
			<div className={styles.cardInner}>
				<div className={styles.imageContainer}>
					<Image
						width={400}
						height={250}
						src={imageUrl}
						className={styles.cardImage}
						alt={title}
					/>
					<div className={styles.dateTag}>
						{new Date(releaseDate).toLocaleDateString("tr-TR", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</div>
				</div>
				<div className={styles.cardContent}>
					<h3 className={styles.cardTitle}>{title}</h3>
					<p className={styles.description}>{description}</p>
					<Link href={`/blog/${id}`} className={styles.readMoreLink}>
						<span>Okumaya Başla</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
