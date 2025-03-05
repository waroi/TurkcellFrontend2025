import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: JSON.parse(localStorage.getItem("books")),
};

//TODO:delete,filter, sort actionları sonra yazlacak.
//TODO:initial state çalıştıktan sonra güncellenecek.
export const bookSlice = createSlice({
  name: "book",
  initialState,
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
      //   state.books = state.books.map((book) =>
      //     book.id === action.payload.id ? { ...book, ...action.payload } : book
      //   );
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
