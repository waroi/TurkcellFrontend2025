import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, auth } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where } from "../../firebase/firebaseConfig";


export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    try {
        const user = auth.currentUser; 
        if (!user) throw new Error("Kullanıcı giriş yapmamış!");
        const booksCollection = collection(db, "books");
        const q = query(booksCollection, where("publisherId", "==", user.uid)); 
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No books found for the publisher.");
        }
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Kitapları çekerken hata oluştu:", error.message);
        throw error;
    }
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