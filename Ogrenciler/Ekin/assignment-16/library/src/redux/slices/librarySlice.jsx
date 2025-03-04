import { createSlice } from "@reduxjs/toolkit";
import { getLibrary } from "../../database";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: await getLibrary(),
  },
  reducers: {
    addBook: (state, action) => {
      //   state.push({ id: "adsads", name: "NAAAAME" });
      console.log(state);
      state.books = [...state.books, action.payload];
    },
    editBook: () => {},
    deleteBook: () => {},
    // addTodo: (state, action) => {
    //   state.todos = [...state.todos, action.payload];
    // },
    // deleteTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
  },
});

export const { addBook, editBook, deleteBook } = librarySlice.actions;

export default librarySlice.reducer;
