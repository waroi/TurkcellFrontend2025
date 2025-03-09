import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";

// 📌 Kullanıcının publisherId bilgisini getir
export const fetchUserPublisherId = createAsyncThunk("user/fetchPublisherId", async () => {
    const user = auth.currentUser;
    if (!user) return null;

    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
        return userDocSnap.data().publisherId;
    } else {
        return null;
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        publisherId: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPublisherId.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserPublisherId.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.publisherId = action.payload;
            })
            .addCase(fetchUserPublisherId.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
