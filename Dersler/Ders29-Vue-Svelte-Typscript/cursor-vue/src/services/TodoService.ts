import type { Todo, TodoCreateDTO } from '../models/Todo';

// Single Responsibility Principle: Servis sadece veri işleme sorumluluğuna sahip
// Open/Closed Principle: Interface kullanarak genişletilebilir yapı
// Liskov Substitution: Interface implementasyonları değiştirilebilir
// Interface Segregation: Spesifik metot grupları tanımlı
// Dependency Inversion: Yüksek seviyeli soyutlama ile bağımlılıklar azaltılmış

export interface ITodoService {
  getTodos(): Promise<Todo[]>;
  getTodoById(id: number): Promise<Todo | undefined>;
  addTodo(todo: TodoCreateDTO): Promise<Todo>;
  updateTodo(id: number, todo: Partial<Todo>): Promise<Todo | undefined>;
  deleteTodo(id: number): Promise<boolean>;
  toggleComplete(id: number): Promise<Todo | undefined>;
}

// localStorage ile çalışan basit bir implementasyon
export class LocalStorageTodoService implements ITodoService {
  private STORAGE_KEY = 'todos';

  private getStoredTodos(): Todo[] {
    try {
      // window.localStorage kullanmak daha güvenli olabilir
      const storage = window.localStorage || localStorage;
      if (!storage) {
        console.error('localStorage erişilemez');
        return [];
      }

      const storedTodos = storage.getItem(this.STORAGE_KEY);
      if (!storedTodos) return [];

      // Date objeleri düz string olarak saklanır, bunları dönüştürmemiz gerekiyor
      const todos = JSON.parse(storedTodos, (key, value) => {
        if (key === 'createdAt') return new Date(value);
        return value;
      });
      return Array.isArray(todos) ? todos : [];
    } catch (e) {
      console.error('Todo verileri çözümlenirken hata oluştu:', e);
      return [];
    }
  }

  private saveTodos(todos: Todo[]): void {
    try {
      // window.localStorage kullanmak daha güvenli olabilir
      const storage = window.localStorage || localStorage;
      if (!storage) {
        console.error('localStorage erişilemez');
        return;
      }

      storage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error('Todo verileri kaydedilirken hata oluştu:', e);
    }
  }

  async getTodos(): Promise<Todo[]> {
    // Gerçek bir API çağrısını simüle etmek için Promise kullanıyoruz
    return Promise.resolve(this.getStoredTodos());
  }

  async getTodoById(id: number): Promise<Todo | undefined> {
    const todos = this.getStoredTodos();
    return Promise.resolve(todos.find(todo => todo.id === id));
  }

  async addTodo(todoDTO: TodoCreateDTO): Promise<Todo> {
    const todos = this.getStoredTodos();
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

    const newTodo: Todo = {
      ...todoDTO,
      id: newId,
      createdAt: new Date()
    };

    todos.push(newTodo);
    this.saveTodos(todos);

    return Promise.resolve(newTodo);
  }

  async updateTodo(id: number, todoUpdate: Partial<Todo>): Promise<Todo | undefined> {
    try {
      console.log('updateTodo çağrıldı, id:', id, 'güncelleme:', todoUpdate);
      const todos = this.getStoredTodos();
      const index = todos.findIndex(todo => todo.id === id);

      if (index === -1) {
        console.log('Güncellenecek todo bulunamadı');
        return Promise.resolve(undefined);
      }

      // Derin kopya oluştur ve güncelle
      const updatedTodos = [...todos];
      updatedTodos[index] = { ...todos[index], ...todoUpdate };

      console.log('Todo güncellendi:', updatedTodos[index]);
      this.saveTodos(updatedTodos);

      return Promise.resolve(updatedTodos[index]);
    } catch (error) {
      console.error('updateTodo hatası:', error);
      return Promise.resolve(undefined);
    }
  }

  async deleteTodo(id: number): Promise<boolean> {
    const todos = this.getStoredTodos();
    const filteredTodos = todos.filter(todo => todo.id !== id);

    if (filteredTodos.length === todos.length) {
      return Promise.resolve(false);
    }

    this.saveTodos(filteredTodos);
    return Promise.resolve(true);
  }

  async toggleComplete(id: number): Promise<Todo | undefined> {
    try {
      console.log('toggleComplete çağrıldı, id:', id);
      const todos = this.getStoredTodos();
      console.log('Mevcut todos:', todos);

      const todo = todos.find(todo => todo.id === id);

      if (!todo) {
        console.log('Todo bulunamadı');
        return Promise.resolve(undefined);
      }

      console.log('Tamamlanma durumu değiştiriliyor:', todo.completed, ' -> ', !todo.completed);
      const result = await this.updateTodo(id, { completed: !todo.completed });
      console.log('Güncellenen todo:', result);
      return result;
    } catch (error) {
      console.error('toggleComplete hatası:', error);
      return Promise.resolve(undefined);
    }
  }
} 