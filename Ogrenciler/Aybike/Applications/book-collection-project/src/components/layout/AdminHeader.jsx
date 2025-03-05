import { NavLink } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slice/librarySlice";
import ThemeButton from "../ThemeButton";
import AdminButton from "../AdminButton";

const AdminHeader = () => {
	const dispatch = useDispatch();
	const addNewBook = (book) => dispatch(addBook(book));

	const [newBook, setNewBook] = useState({
		title: "",
		description: "",
		posterUrl: "",
		publishedYear: "",
		genre: "",
		author: "",
	});

	const handleChange = (e) => {
		setNewBook({ ...newBook, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const bookToAdd = {
			id: Date.now(),
			...newBook,
		};
		addNewBook(bookToAdd)
		setNewBook({ title: "", description: "", publishedYear: "", genre: "", author: "" }); 
		document.getElementById("closeModal").click();
	};

	return (
		<nav className="navbar-books navbar navbar-expand-lg shadow">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					<img className="logo" src="/src/assets/logo.png" alt="logo" />
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<NavLink className="nav-link px-2" to="/">Library</NavLink>
					<button type="button" className="btn bg-white" data-bs-toggle="modal" data-bs-target="#addModal">
						Add New Book
					</button>

					<div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5">Add New Book</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"/>
								</div>
								<div className="modal-body">
									<form onSubmit={handleSubmit}>
										<input type="text" className="form-control mb-2" name="title" placeholder="Title" value={newBook.title} onChange={handleChange} required />
										<input type="text" className="form-control mb-2" name="description" placeholder="Description" value={newBook.description} onChange={handleChange} />
										<input type="date" className="form-control mb-2" name="publishedYear" value={newBook.publishedYear} onChange={handleChange} />
										<input type="text" className="form-control mb-2" name="posterUrl" placeholder="Poster Url" value={newBook.posterUrl} onChange={handleChange} />
										<input type="text" className="form-control mb-2" name="genre" placeholder="Genre" value={newBook.genre} onChange={handleChange} />
										<input type="text" className="form-control mb-2" name="author" placeholder="Author" value={newBook.author} onChange={handleChange} />
										<button type="submit" className="btn btn-primary w-100">Submit</button>
									</form>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ThemeButton />
				<AdminButton />
			</div>
		</nav>
	);
};

export default AdminHeader;