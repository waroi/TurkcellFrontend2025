import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import buyCryptoReducer from "./slices/buyCryptoSlice";
import sellCryptoReducer from "./slices/sellCryptoSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  buyCrypto: buyCryptoReducer,
  theme: themeReducer,
  sellCrypto: sellCryptoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
