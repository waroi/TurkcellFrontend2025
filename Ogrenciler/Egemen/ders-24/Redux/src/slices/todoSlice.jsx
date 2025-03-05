import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Todo 1" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: function (state, action) {
      state.todos = [...state.todos, action.payload];
    },

    deleteTodo: function (state, action) {
      state.todos = state.todos.filter(function (todo) {
        return todo.id != action.payload;
      });
    },
  },
});
