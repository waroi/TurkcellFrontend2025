import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), newTodo, completed: false }],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  completedTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == id
          ? (todo.completed = !completed)
          : (todo.completed = completed)
      ),
    })),
}));
export default useStore;
