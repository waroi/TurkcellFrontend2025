import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../slices/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
