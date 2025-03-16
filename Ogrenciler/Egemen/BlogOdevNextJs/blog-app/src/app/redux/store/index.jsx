import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slices/blogSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
export default store;
