import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { deleteBook, updateBook } from "../redux/slice/librarySlice";
import { useUser } from "../context/UserContext";

const Card = ({ book }) => {
	const dispatch = useDispatch();
	const {user} = useUser();

	const removeBook = () => {
		dispatch(deleteBook(book.id));
	};

	const editBook = () => {
		dispatch(updateBook(book));
	}

	return (
		<>
			<NavLink to={`/${book.id}`} className="card mb-3">
				<div className="row g-0">
					<div className="col-md-5 image-wrapper">
						<img
							src={book.posterUrl}
							className="img-fluid rounded-start"
							alt="poster"
						/>
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h5 className="card-title">{book.title}</h5>
							<p className="card-text">{book.description}</p>
							<p className="card-text">
								<small className="text-body-secondary">
									{book.author} | {book.publishedYear}
								</small>
							</p>
						</div>
						{user === "Admin" && 
						<div className="icons">
							<i
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									removeBook();
								}}
								className="fa-solid fa-trash"
							></i>
							<i
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									editBook(book.id);
								}}
								className="fa-solid fa-pen-to-square px-2"
							></i>
						</div> }
					</div>
				</div>
			</NavLink>
				{user === "Admin" && <div className="modal fade show" tabIndex="-1" aria-labelledby="editBookModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="editBookModalLabel">Edit Book</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
							<div className="modal-body">
								<form>
									<input
										type="text"
										className="form-control mb-2"
										defaultValue={book.title}
										placeholder="Title"
									/>
									<input
										type="text"
										className="form-control mb-2"
										defaultValue={book.description}
										placeholder="Description"
									/>
									<input
										type="date"
										className="form-control mb-2"
										defaultValue={book.publishedYear}
									/>
									<input
										type="text"
										className="form-control mb-2"
										defaultValue={book.genre}
										placeholder="Genre"
									/>
									<input
										type="text"
										className="form-control mb-2"
										defaultValue={book.author}
										placeholder="Author"
									/>
									<button type="submit" className="btn btn-primary w-100">Save Changes</button>
								</form>
							</div>
							<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>}
				
		</>
	);
};

export default Card;