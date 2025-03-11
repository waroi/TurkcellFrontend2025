import { create } from 'zustand';

export const useStore = create((set) => ({
  todos: [],
  add: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  remove: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggle: (id) =>
    set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? {...todo,completed: !todo.completed} : todo) })),
}));
