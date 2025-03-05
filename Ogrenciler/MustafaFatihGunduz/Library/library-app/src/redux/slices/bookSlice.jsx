import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	books: [
		{
			id: 1,
			title: "Dune",
			author: "Frank Herbert",
			page: 412,
			image:
				"https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1965-08-01",
			description:
				"Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the spice melange.",
		},
		{
			id: 2,
			title: "1984",
			author: "George Orwell",
			page: 328,
			image:
				"https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1949-06-08",
			description:
				"A dystopian novel set in a totalitarian society ruled by the Party, who employ the Thought Police to persecute individuality and independent thinking.",
		},
		{
			id: 3,
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			page: 281,
			image:
				"https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1960-07-11",
			description:
				"The story of racial inequality and moral growth as seen through the eyes of a young girl in the American South during the 1930s.",
		},
		{
			id: 4,
			title: "The Alchemist",
			author: "Paulo Coelho",
			page: 197,
			image:
				"https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1988-01-01",
			description:
				"A philosophical novel about a young Andalusian shepherd who dreams of finding treasure at the Egyptian pyramids and embarks on a journey of self-discovery.",
		},
		{
			id: 5,
			title: "The Lord of the Rings",
			author: "J.R.R. Tolkien",
			page: 1178,
			image:
				"https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1954-07-29",
			description:
				"An epic high-fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
		},
		{
			id: 6,
			title: "Pride and Prejudice",
			author: "Jane Austen",
			page: 279,
			image:
				"https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1813-01-28",
			description:
				"A romantic novel that follows the character development of Elizabeth Bennet as she learns about the repercussions of hasty judgments.",
		},
		{
			id: 7,
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			page: 200,
			image:
				"https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UF1000,1000_QL80_.jpg",
			releaseDate: "1925-04-10",
			description:
				"The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
		},
	],
	keyword: "",
};

export const bookSlice = createSlice({
	name: "book",
	initialState: localStorage.getItem("books")
		? { books: JSON.parse(localStorage.getItem("books")) }
		: initialState,
	reducers: {
		addBook: (state, action) => {
			state.books = [...state.books, action.payload];
			localStorage.setItem("books", JSON.stringify(state.books));
		},
		sortingBook: (state, action) => {
			state.books = [
				...state.books.sort((a, b) =>
					action.payload === "asc"
						? new Date(a.releaseDate) - new Date(b.releaseDate)
						: new Date(b.releaseDate) - new Date(a.releaseDate)
				),
			];
		},
		updateBook: (state, action) => {
			const index = state.books.findIndex(
				(book) => book.id === action.payload.id
			);
			if (index !== -1) {
				state.books[index] = action.payload;
				localStorage.setItem("books", JSON.stringify(state.books));
			}
		},
		searchBook: (state, action) => {
			state.keyword = action.payload;
		},
		deleteBook: (state, action) => {
			state.books = state.books.filter((book) => book.id !== action.payload);
			localStorage.setItem("books", JSON.stringify(state.books));
		},
	},
});

export const { addBook, deleteBook, updateBook, sortingBook, searchBook } =
	bookSlice.actions;

export default bookSlice.reducer;
