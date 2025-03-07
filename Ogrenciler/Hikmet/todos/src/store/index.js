import { create } from "zustand";

export const useStore = create((set) => ({
	todo: [],
	addTodo: (string) =>
		set((state) => ({
			todo: [
				...state.todo,
				{ id: state.todo.length, text: string, done: false },
			],
		})),
	toggleTodo: (id) => set((state) => ({ todo: state.todo })),
	deleteTodo: (id) =>
		set((state) => ({
			todo: state.todo.splice(
				state.todo.findIndex((obj) => obj.id === id),
				1
			),
		})),
}));
