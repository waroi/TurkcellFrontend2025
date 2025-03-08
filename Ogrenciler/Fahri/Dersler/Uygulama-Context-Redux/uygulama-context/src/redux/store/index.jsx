import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";
import buttonReducer from "../slices/buttonSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    button: buttonReducer,
  },
});
