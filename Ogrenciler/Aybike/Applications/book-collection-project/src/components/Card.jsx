import { NavLink } from "react-router";

const Card = ({book}) => {
	return (
		<>
			<NavLink to={`/library/${book.id}`} className="card mb-3">
				<div className="row g-0">
					<div className="col-md-5 image-wrapper">
						<img src={book.posterUrl} className="img-fluid rounded-start" alt="poster" />
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h5 className="card-title">{book.title}</h5>
							<p className="card-text">
								{book.description}
							</p>
							<p className="card-text">
								<small className="text-body-secondary">
									{book.author} | {book.publishedYear}
								</small>
							</p>
						</div>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export default Card;
