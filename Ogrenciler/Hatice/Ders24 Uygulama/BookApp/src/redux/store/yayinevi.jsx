import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    yayinevi: yayineviReducer, 
  },
});

export default store;
