import Image from "next/image";
import Link from "next/link";
import "./blogCard.css";

function BlogCard({ id, title, description, imageUrl, releaseDate }) {
	return (
		<div className="card mb-3 p-0" key={id}>
			<div className="row g-0 h-100">
				<div className="col-md-4">
					<Image
						width={100}
						height={100}
						src={imageUrl}
						className="img-fluid rounded-start"
						alt="img"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text description">{description}</p>
						<p className="card-text">
							<small className="text-body-secondary">{releaseDate}</small>
						</p>
					</div>
				</div>
				<div className="card-footer">
					<Link href={`/blog/${id}`}>Detayları Gör</Link>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
