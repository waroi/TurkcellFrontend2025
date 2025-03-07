import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where } from "../../firebase/firebaseConfig";
export const fetchBooks = createAsyncThunk("books/fetchBooks", async ({ sort, filter }) => {
    let q = query(collection(db, "books"));
    if (sort) {
        q = query(collection(db, "books"), orderBy("title", sort));
    }
    if (filter) {
        q = query(collection(db, "books"), where("title", ">=", filter), where("title", "<=", filter + "\uf8ff"));
    }
    const querySnapshot = await getDocs(q);
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
        filter: "",
        sort: "asc",
        status: "idle",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
    },
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
export const { setFilter, setSort } = booksSlice.actions;
export default booksSlice.reducer;