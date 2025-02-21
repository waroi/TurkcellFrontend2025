import { useEffect } from "react";
import AuthorInfo from "../AuthorInfo";
import styles from "./BlogCard.module.css";

function BlogCard({ id, img, title, description, category, avatar, author }) {
	function handleClick() {
		document.getElementById(id).addEventListener("click", () => {
			const overlay = document.getElementById("overlay");
			console.log(overlay);

			overlay.style.removeProperty("display");
			overlay.style.display = "flex";
		});
	}
	useEffect(() => {
		handleClick();
	}, []);

	return (
		<article id={id} className={styles.blogCard}>
			<img src={img} alt="img" />
			<div className={styles.blogCardInfo}>
				<span className="badge">{category}</span>
				<a>
					<h2>{title}</h2>
				</a>
				<p>{description}</p>
				<AuthorInfo author={author} avatar={avatar} />
			</div>
		</article>
	);
}

export default BlogCard;
