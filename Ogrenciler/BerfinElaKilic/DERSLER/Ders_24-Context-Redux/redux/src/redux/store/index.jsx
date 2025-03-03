import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../slices/ToDoSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});
export default store;