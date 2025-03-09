import AuthorInfo from "../AuthorInfo";
import styles from "./Banner.module.css";

function Banner({ avatar, author }) {
	return (
		<section className={styles.banner}>
			<img
				src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				alt=""
				className={styles.bannerImage}
			/>
			<div className={styles.bannerContent}>
				<span className="badge">Category</span>
				<h1>
					The Impact of Technology on the Workplace: How Technology is Changing
				</h1>
				<AuthorInfo avatar={avatar} author={author} />
			</div>
		</section>
	);
}

export default Banner;
