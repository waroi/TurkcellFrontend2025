import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
export default store;
