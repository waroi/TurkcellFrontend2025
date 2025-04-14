import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./resultSlice";

const store = configureStore({
  reducer: {
    result: resultReducer,
  },
});

export default store;
