export const loadBooksFromLocalStorage = () => {
	const storedBooks = localStorage.getItem("books");
	return storedBooks ? JSON.parse(storedBooks) : [];
};

export const saveBooksToLocalStorage = (books) => {
	localStorage.setItem("books", JSON.stringify(books));
};