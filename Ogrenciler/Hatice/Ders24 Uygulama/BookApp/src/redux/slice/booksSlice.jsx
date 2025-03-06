import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, collection, getDocs, addDoc, deleteDoc, doc } from "../../firebase/firebaseConfig";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

export const addBookToFirestore = createAsyncThunk("books/addBook", async (book) => {
    const docRef = await addDoc(collection(db, "books"), book);
    return { id: docRef.id, ...book };
});

export const deleteBookFromFirestore = createAsyncThunk("books/deleteBook", async (id) => {
    await deleteDoc(doc(db, "books", id));
    return id;
});

const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        status: "idle", 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.books = action.payload;
            })
            .addCase(addBookToFirestore.fulfilled, (state, action) => {
                state.books.push(action.payload);
            })
            .addCase(deleteBookFromFirestore.fulfilled, (state, action) => {
                state.books = state.books.filter((book) => book.id !== action.payload);
            });
    },
});

export default booksSlice.reducer;
