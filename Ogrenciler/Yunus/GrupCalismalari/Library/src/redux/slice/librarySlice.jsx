import { createSlice } from '@reduxjs/toolkit'
import { Storage } from '../../utils/storage'

const initialState = Storage.getBooks()

export const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
        addBook: (state, action) => {

            state.books = [...state.books, action.payload]

            console.log(action.payload)
            // Storage.addBooks(state.books)

        },

        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id.toString() !== action.payload.toString())
            Storage.addBooks(state.books)
        },

        updateBook: (state, action) => {
            const bookIndex = state.books.findIndex(book => book.id === action.payload.id)
            if (bookIndex !== -1) {
                state.books[bookIndex] = { ...state.books[bookIndex], ...action.payload }
            }
            Storage.addBooks(state.books)
        }
    }
})

export const { addBook, removeBook, updateBook } = librarySlice.actions
export default librarySlice.reducer