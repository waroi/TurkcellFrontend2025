import Image from "next/image";
import Link from "next/link";
import styles from "./blogCard.module.css";

function BlogCard({ id, title, description, imageUrl, releaseDate }) {
	return (
		<div className="card col-md-4 gap-3 p-0 m-0">
			<div className="d-flex align-items-center justify-content-center">
				<Image
					width={200}
					height={200}
					src={imageUrl}
					className=" m-4"
					alt="img"
				/>
			</div>
			<div className="card-body ">
				<h5 className="card-title">{title}</h5>
				<p className={`card-text ${styles.description}`}>{description}</p>
				<Link href={`/blog/${id}`}>Okumaya Başla</Link>
			</div>
		</div>
	);
}

export default BlogCard;
