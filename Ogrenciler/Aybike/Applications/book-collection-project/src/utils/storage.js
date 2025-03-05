export const saveBooksToLocalStorage = (books) => {
	localStorage.setItem("books", JSON.stringify(books));
};