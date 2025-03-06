// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "../../firebase/firebaseConfig";
// import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where } from "../../firebase/firebaseConfig";



// export const addBookToFirestore = createAsyncThunk("books/addBook", async (book) => {
//     const docRef = await addDoc(collection(db, "books"), book);
//     return { id: docRef.id, ...book };
// });

// const yayineviSlice = createSlice({
//     name: "yayinevi",

//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchBooks.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchBooks.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.books = action.payload;
//             })
//             .addCase(addBookToFirestore.fulfilled, (state, action) => {
//                 state.books.push(action.payload);
//             })

//     },
// });

// export default yayineviSlice.reducer;