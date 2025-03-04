import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        { id: 1, todo: "Todo 1" },
        { id: 2, todo: "Todo 2" },
        { id: 3, todo: "Todo 3" }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer