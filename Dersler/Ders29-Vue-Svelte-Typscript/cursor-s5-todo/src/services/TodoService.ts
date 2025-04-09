import { writable } from 'svelte/store';
import type { Todo } from '../types/Todo';

// Local storage key for todos
const TODOS_STORAGE_KEY = 'todos';

// Helper function to save todos to localStorage
const saveTodos = (todos: Todo[]) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }
};

// Try to load todos from localStorage
const loadStoredTodos = (): Todo[] => {
  if (typeof localStorage === 'undefined') return [];

  try {
    const storedTodos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) || '[]');

    // Convert string dates back to Date objects
    return storedTodos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt)
    }));
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
};

// Create a writable store for todos
const todosStore = writable<Todo[]>(loadStoredTodos());

// Export the todos store with additional methods
export const todos = {
  subscribe: todosStore.subscribe,

  // Add a new todo
  add: (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date()
    };

    todosStore.update(todos => {
      const updatedTodos = [...todos, newTodo];
      saveTodos(updatedTodos);
      return updatedTodos;
    });
  },

  // Toggle todo completion status
  toggle: (id: string) => {
    todosStore.update(todos => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(updatedTodos);
      return updatedTodos;
    });
  },

  // Remove a todo by id
  remove: (id: string) => {
    todosStore.update(todos => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      saveTodos(updatedTodos);
      return updatedTodos;
    });
  },

  // Update todo text
  updateText: (id: string, text: string) => {
    todosStore.update(todos => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );
      saveTodos(updatedTodos);
      return updatedTodos;
    });
  },

  // Clear all completed todos
  clearCompleted: () => {
    todosStore.update(todos => {
      const updatedTodos = todos.filter(todo => !todo.completed);
      saveTodos(updatedTodos);
      return updatedTodos;
    });
  },

  // Get all todos (for use in components)
  getAll: () => {
    let result: Todo[] = [];
    todosStore.subscribe(value => {
      result = value;
    })();
    return result;
  },

  // Get active todos
  getActive: () => {
    let result: Todo[] = [];
    todosStore.subscribe(value => {
      result = value.filter(todo => !todo.completed);
    })();
    return result;
  },

  // Get completed todos
  getCompleted: () => {
    let result: Todo[] = [];
    todosStore.subscribe(value => {
      result = value.filter(todo => todo.completed);
    })();
    return result;
  },

  // Check if there are any completed todos
  hasCompleted: () => {
    let result = false;
    todosStore.subscribe(value => {
      result = value.some(todo => todo.completed);
    })();
    return result;
  },

  // Get count of active todos
  getActiveCount: () => {
    let result = 0;
    todosStore.subscribe(value => {
      result = value.filter(todo => !todo.completed).length;
    })();
    return result;
  }
}; 