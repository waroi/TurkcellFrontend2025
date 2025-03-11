
import { configureStore } from "@reduxjs/toolkit";
import blogSlice from '../slice/blogSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice
    }
})

export default store