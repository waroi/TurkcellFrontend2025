import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    })),
}));

export default useStore;
