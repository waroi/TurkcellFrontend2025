import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getBookById } from "../redux/slice/librarySlice";
import { updateBook } from "../redux/slice/librarySlice";
import { useUser } from "../context/UserContext";

const BookDetailView = () => {
	const { bookId } = useParams();
	const dispatch = useDispatch();
	const getBook = (id) => dispatch(getBookById(id));
	const item = useSelector((state) => state.library.book);
	const { user } = useUser();
	const [editedBook, setEditedBook] = useState({});

	useEffect(() => {
		if (bookId) {
			getBook(bookId);
		}
	}, [bookId]);

	useEffect(() => {
		setEditedBook({
			title: item.title,
			description: item.description,
			genre: item.genre,
			author: item.author,
			posterUrl: item.posterUrl,
		});
		console.log(item);
		console.log(editedBook);
	}, [item]);

	const editBook = (book) => {
		dispatch(updateBook({ id: item.id, ...book }));
	};

	const handleChange = (e) => {
		setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log(editedBook);
		e.preventDefault();
		editBook(editedBook);
		getBook(bookId);
		document.getElementById("closeModal").click();
	};

	return (
		<>
			<div className="container m-5">
				<div className="row">
					<div className="col-lg-6 col-sm-12 mb-4">
						<img
							className="detail-img img-fluid"
							src={item.posterUrl}
							alt="poster"
						/>
					</div>
					<div className="col-lg-6 col-sm-12 text-start">
						<h2>{item.title}</h2>
						<hr />
						<p>{item.description}</p>
						<p>
							{item.author} | {item.publishedYear}
						</p>
						<p>Genre: {item.genre}</p>
						<button
							type="button"
							className="btn bg-white"
							data-bs-toggle="modal"
							data-bs-target="#editModal"
						>
							Edit Book
						</button>
					</div>
				</div>
			</div>

			{user === "Admin" && (
				<div
					className="modal fade"
					id="editModal"
					tabIndex="-1"
					aria-labelledby="editModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="editBookModalLabel">
									Edit Book
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
									id="closeModal"
								/>
							</div>
							<div className="modal-body">
								<form onSubmit={handleSubmit}>
									<input
										type="text"
										className="form-control mb-2"
										value={editedBook.title || ""}
										placeholder="Title"
										onChange={handleChange}
										name="title"
									/>
									<input
										type="text"
										className="form-control mb-2"
										value={editedBook.description || ""}
										placeholder="Description"
										onChange={handleChange}
										name="description"
									/>

									<input
										type="text"
										className="form-control mb-2"
										value={editedBook.genre || ""}
										placeholder="Genre"
										onChange={handleChange}
										name="genre"
									/>
									<input
										type="text"
										className="form-control mb-2"
										value={editedBook.posterUrl || ""}
										placeholder="Poster Url"
										onChange={handleChange}
										name="posterUrl"
									/>
									<input
										type="text"
										className="form-control mb-2"
										value={editedBook.author || ""}
										placeholder="Author"
										onChange={handleChange}
										name="author"
									/>
									<button type="submit" className="btn btn-primary w-100">
										Save Changes
									</button>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
									id="closeModal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default BookDetailView;
