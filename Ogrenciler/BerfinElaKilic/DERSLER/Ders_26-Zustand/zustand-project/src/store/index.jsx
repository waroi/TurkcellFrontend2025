import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [{text: "koşmak", id: "123", isCompleted:false, createdAt:Date.now()}],
  addTodo: (todo) =>
    set((state) => [
      ...state.todos,
      {
        text: todo,
        id: self.crypto.randomUUID(),
        isCompleted: false,
        createdAt: Date.now()
      },
    ]),
  deleteTodo: (id) =>
    set((state) => state.todos.filter((todo) => todo.id !== id)),
  editTodo: (updatedTodo) =>
    set((state) =>
      state.todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    ),
  toggleComplete: (id) =>
    set((state) =>
      state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    ),
}));


