import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../slices/booksSlice";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    users: usersReducer,
  },
});
