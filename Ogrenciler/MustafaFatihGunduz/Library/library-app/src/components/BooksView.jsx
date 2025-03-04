import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/slices/bookSlice";
import Modal from "./module/Modal";

const BooksView = () => {
	const books = useSelector((state) => state.book.books);
	const dispatch = useDispatch();

	const handleDelete = (id) => dispatch(deleteBook(id));

	const [editingBookId, setEditingBookId] = useState(null);
	const openEditModal = (id) => {
		setEditingBookId(id);
		const modal = new bootstrap.Modal(document.getElementById("bookEvent"));
		modal.show();
	};
	const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		return date.toLocaleString("tr-TR", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});
	};

	return (
		<div className="container">
			<div id="books" className="row ">
				{books.length > 0 ? (
					books.map((book) => (
						<div key={book.id} className="col-md-3">
							<div className="card mb-3 h-100">
								<img src={book.image} className="card-img-top" alt="..." />
								<div className="card-body w-100">
									<h5 className="card-title">{book.title}</h5>
									<p className="card-text">{book.description}</p>
									<p className="card-text">{book.author}</p>
									<p className="card-text">{formatDate(book.releaseDate)}</p>
									<p className="card-text">{book.page}</p>
									<div className="btn-group gap-2 w-100">
										<button
											className="btn btn-warning w-50"
											onClick={() => openEditModal(book.id)}>
											Düzenle
										</button>
										<button
											className="btn btn-danger w-50"
											onClick={() => handleDelete(book.id)}>
											Sil
										</button>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No book found</p>
				)}
				<Modal editingBookId={editingBookId} />
			</div>
		</div>
	);
};

export default BooksView;
