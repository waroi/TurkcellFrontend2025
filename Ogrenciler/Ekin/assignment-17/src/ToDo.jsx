import { create } from "zustand";

const useToDoStore = create((set) => ({
  todos: [],

  addTodo: (text) => {
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Math.random().toString(36).substring(2), text, completed: false },
      ],
    }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != id),
    }));
  },

  editTodoText: (id, text) => {
    set((state) => {
      state.todos[state.todos.findIndex((todo) => todo.id == id)].text = text;
      console.log(state.todos[state.todos.findIndex((todo) => todo.id == id)]);
      return { todos: state.todos };
    });
  },
}));

export default useToDoStore;
