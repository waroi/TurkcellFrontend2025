import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from '../slice/librarySlice'

const store = configureStore({
    reducer: {
        books: libraryReducer
    }
})

export default store