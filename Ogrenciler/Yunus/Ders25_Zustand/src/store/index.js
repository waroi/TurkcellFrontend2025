import { create } from 'zustand'

const useTodoStore = create((set) => ({
    todos: [{ text: 'asdıjaskd', id: 2312 }],

    addTodo: (text) => set((state) =>
        ({ todos: [...state.todos, { id: self.crypto.randomUUID(), text, completed: false }] })
    ),
    removeTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })
    ),
    toggleTodo: (id) => set(state => (
        { todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }
    ))

}))

export default useTodoStore