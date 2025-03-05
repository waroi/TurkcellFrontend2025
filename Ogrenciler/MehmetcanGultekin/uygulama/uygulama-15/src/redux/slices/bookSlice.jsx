import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: JSON.parse(localStorage.getItem("books")),
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  searchTerm: "",
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const indexNumber = state.books.findIndex(
        (book) => book.id === action.payload.id
      );

      if (indexNumber === -1) {
        console.error("id bulunamadı");
      } else {
        state.books[indexNumber] = {
          ...state.books[indexNumber],
          ...action.payload,
        };
      }
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    filterBooks: (state, action) => {
      state.books = state.books.filter(
        (book) => book.category.toLowerCase() === action.payload.toLowerCase()
      );
      console.log("aba", state.books);
    },
    sortBooksByDate: (state, action) => {
      console.log("date", action.payload);
      state.books = state.books.sort(
        (a, b) => new Date(b[action.payload]) - new Date(a[action.payload])
      );
    },

    sortBooksByStringAZ: (state, action) => {
      console.log("sort", action.payload);
      state.books = state.books.sort((a, b) => {
        return a[action.payload].localeCompare(b[action.payload]);
      });
    },
    sortBooksByStringZA: (state, action) => {
      console.log("sort", action.payload);
      state.books = state.books.sort((a, b) => {
        return b[action.payload].localeCompare(a[action.payload]);
      });
    },
    clearFilters: (state) => {
      state.books = [...initialState.books];
    },
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      console.log("search", action.payload);
      console.log("searcht", searchTerm);
      state.books = state.books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm) ||
          book.category.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const {
  addBook,
  deleteBook,
  updateBook,
  filterBooks,
  sortBooksByStringAZ,
  sortBooksByStringZA,
  sortBooksByDate,
  clearFilters,
  searchBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
