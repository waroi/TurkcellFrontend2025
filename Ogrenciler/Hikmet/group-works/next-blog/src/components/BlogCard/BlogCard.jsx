import Image from "next/image";
import Link from "next/link";
import "./blogCard.css";

function BlogCard({ id, title, description, imageUrl, releaseDate }) {
	return (
		<div className="p-3 col-lg-6">
				<div className="card mb-3 p-0  h-100" key={id}>
				<div className="row h-100">
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<Image
							width={100}
							height={100}
							src={imageUrl}
							className="img-fluid"
							alt="img"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body h-100">
							<h5 className="card-title">{title}</h5>
							<p className="card-text description">{description}</p>
							<p className="card-text">
								<small className="text-body-secondary">{releaseDate}</small>
							</p>
						</div>
					</div>
				</div>
				<div className="row m-0 p-0">
					<div className="card-footer">
						<Link href={`/blog/${id}`}>Detayları Gör</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
