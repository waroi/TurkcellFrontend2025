"use client";

import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../redux/slice/blogSlice";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
