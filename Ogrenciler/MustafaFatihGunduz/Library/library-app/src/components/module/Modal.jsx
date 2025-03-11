import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase";
import { checkIsHeAdmin, checkPublishing } from "../../controller/DBController";
import { addBook, updateBook } from "../../redux/slices/bookSlice";

const Modal = ({ editingBookId, setEditingBookId }) => {
	const dispatch = useDispatch();
	const selectedBook = useSelector((state) =>
		state.book.books.find((b) => b.id === editingBookId)
	);

	const initialState = {
		id: "",
		title: "",
		author: "",
		page: "",
		image: "",
		releaseDate: "",
		category: "",
		description: "",
	};

	const [bookData, setBookData] = useState(initialState);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (!editingBookId) {
			setBookData(initialState);
			setIsEditing(false);
		} else {
			setBookData(selectedBook || initialState);
			setIsEditing(true);
		}
	}, [editingBookId, selectedBook]);

	useEffect(() => {
		const modalElement = document.getElementById("bookEvent");
		if (!modalElement) return;

		const handleModalClose = () => {
			setEditingBookId(null);
		};

		modalElement.addEventListener("hidden.bs.modal", handleModalClose);
		return () => {
			modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
		};
	}, [setEditingBookId]);

	const handleChange = (e) => {
		setBookData({ ...bookData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEditing) {
			dispatch(updateBook(bookData));
		} else {
			dispatch(addBook({ ...bookData, id: crypto.randomUUID() }));
		}
	};

	const [publishing, setPublishing] = useState([]);
	const [admin, setAdmin] = useState(false);
	const [selectedPublisher, setSelectedPublisher] = useState(publishing);

	const handlePublishButton = async () => {
		if (auth.currentUser !== null) {
			const publishingData = await checkPublishing();
			setPublishing(publishingData);
		}
	};

	useEffect(() => {
		const fetchPublishingData = async () => {
			await handlePublishButton();
			await handleAdmin();
		};
		fetchPublishingData();
	}, []);

	const handleAdmin = async () => {
		try {
			const adminUser = await checkIsHeAdmin();
			setAdmin(adminUser);
		} catch (error) {
			console.log("IsAdmin Error", error);
		}
	};

	return (
		<div className="modal fade" id="bookEvent" tabIndex="-1">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5">
							{isEditing ? "Kitabı Güncelle" : "Kitap Ekle"}
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="bookName" className="col-form-label">
									Kitap İsmi:
								</label>
								<input
									type="text"
									className="form-control"
									id="bookName"
									name="title"
									value={bookData.title}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="bookDescription" className="col-form-label">
									Kitap Açıklaması:
								</label>
								<textarea
									id="bookDescription"
									className="form-control"
									rows="3"
									name="description"
									value={bookData.description}
									onChange={handleChange}></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="bookAuthor" className="col-form-label">
									Kitap Yazarı:
								</label>
								<input
									type="text"
									className="form-control"
									id="bookAuthor"
									name="author"
									value={bookData.author}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="bookDate" className="col-form-label">
									Kitap Çıkış Tarihi:
								</label>
								<input
									type="date"
									className="form-control"
									id="bookDate"
									name="releaseDate"
									value={bookData.releaseDate}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="bookCategory" className="col-form-label">
									Kitap kategorisi:
								</label>
								<input
									type="text"
									className="form-control"
									id="bookCategory"
									name="category"
									value={bookData.category}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="bookImage" className="col-form-label">
									Kitap Fotoğrafı:
								</label>
								<input
									type="url"
									className="form-control"
									id="bookImage"
									name="image"
									value={bookData.image}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="publisher" className="col-form-label">
									Kitap Yayınevi:
								</label>
								<select
									className="form-control"
									id="publisher"
									name="publisher"
									value={admin ? selectedPublisher : publishing}
									onChange={
										admin
											? (e) => setSelectedPublisher(e.target.value)
											: undefined
									}
									disabled={!admin}>
									<option value="kodlab">KodLab</option>
									<option value="papatya">Papatya</option>
									<option value="abakus">Abaküs</option>
									<option value="pusula">Pusula</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="bookPages" className="col-form-label">
									Kitap Sayfa Sayısı:
								</label>
								<input
									type="number"
									className="form-control"
									id="bookPages"
									name="page"
									value={bookData.page}
									onChange={handleChange}
								/>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal">
									Kapat
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									data-bs-dismiss="modal">
									{isEditing ? "Güncelle" : "Ekle"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
