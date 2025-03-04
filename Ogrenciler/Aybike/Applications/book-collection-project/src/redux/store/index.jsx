import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from '../slice/librarySlice';  


const store = configureStore({
  reducer: {
    library: libraryReducer, 
  },
});

export default store;


