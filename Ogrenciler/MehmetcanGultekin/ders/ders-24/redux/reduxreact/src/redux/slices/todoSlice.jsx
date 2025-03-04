import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {id: 1, title: 'todo 1', },
        {id: 2, title: 'todo 2',},
        {id: 3, title: 'todo 3', },
    ],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
});
export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;