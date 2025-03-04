import { createSlice } from '@reduxjs/toolkit'
import { books } from '../../data/books'

const initialState = JSON.parse(localStorage.getItem('library')) || books

export const librarySlice = createSlice({
    name: library,
    initialState,
    reducers: {
        addBook: (state, actions) => {
            state.library = [...state.library, actions.payload]
            localStorage.setItem('library', JSON.stringify(state.library))
        },

        removeBook: (state, actions) => {
            state.library = state.library.filter(book => book.id !== actions.payload)
            localStorage.setItem('library', JSON.stringify(state.library))
        },

        updateBook: (state, actions) => {
            // state.library.indexOf(actions.payload.id)
            // const  state.library.find(book => actions.payload.id === book.id)
        }
    }
})

export const { addBook, removeBook, updateBook } = librarySlice.actions
export default librarySlice.reducer