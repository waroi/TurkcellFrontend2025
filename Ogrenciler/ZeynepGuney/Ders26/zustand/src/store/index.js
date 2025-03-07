import { create } from 'zustand'
export const useTodo = create((set) => ({
    todos: [],
    addTodo: (todoText) =>
        set((state) => ({
            todos: [...state.todos, { text: todoText, id: self.crypto.randomUUID(), },]
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id != id)
        }))

}))
