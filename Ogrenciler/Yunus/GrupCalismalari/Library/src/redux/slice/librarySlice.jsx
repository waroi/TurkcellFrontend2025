import { createSlice } from '@reduxjs/toolkit'
import { Storage } from '../../utils/storage'
import { FireStore } from '../../api/fireStore'
import { books } from '../../data/books'

const initialState = { books: await FireStore.getAllBooks() } || books

export const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        },

        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },

        updateBook: (state, action) => {
            const bookIndex = state.books.findIndex(book => book.id === action.payload.id)
            if (bookIndex !== -1) {
                state.books[bookIndex] = { ...state.books[bookIndex], ...action.payload }
            }

            FireStore.updateBook(action.payload.id, { ...action.payload })
        }
    }
})

export const { addBook, removeBook, updateBook } = librarySlice.actions
export default librarySlice.reducer