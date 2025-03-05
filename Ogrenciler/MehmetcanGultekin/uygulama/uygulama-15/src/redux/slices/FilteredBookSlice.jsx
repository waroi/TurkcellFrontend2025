import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: JSON.parse(localStorage.getItem("books")),
  sortDirection: "asc",
};
export const FilteredBookSlice = createSlice({
  name: "filteredBook",
  initialState,
  reducers: {
    filterBooks: (state, action) => {
      state.books = state.books.filter(
        (book) => book.category.toLowerCase() === action.payload.toLowerCase()
      );
      console.log("aba", state.books);
    },
    sortBooksByDate: (state, action) => {
      console.log("date", action.payload);
      state.books = state.books.sort(
        (a, b) => new Date(b[action.payload]) - new Date(a[action.payload])
      );
    },

    sortBooksByStringAZ: (state, action) => {
      console.log("sort", action.payload);
      state.books = state.books.sort((a, b) => {
        return a[action.payload].localeCompare(b[action.payload]);
      });
    },
    sortBooksByStringZA: (state, action) => {
      console.log("sort", action.payload);
      state.books = state.books.sort((a, b) => {
        return b[action.payload].localeCompare(a[action.payload]);
      });
    },
    clearFilters: (state) => {
      state.books = [...initialState.books];
    },
  },
});

export const {
  filterBooks,
  sortBooksByStringAZ,
  sortBooksByDate,
  clearFilters,
  sortBooksByStringZA,
} = FilteredBookSlice.actions;

export default FilteredBookSlice.reducer;
