import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ],
};

export const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const {addTodo, deleteTodo} = ToDoSlice.actions;

export default ToDoSlice.reducer;