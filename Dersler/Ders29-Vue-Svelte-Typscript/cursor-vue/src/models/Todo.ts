export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  createdAt: Date;
}

export type TodoCreateDTO = Omit<Todo, 'id' | 'createdAt'>; 