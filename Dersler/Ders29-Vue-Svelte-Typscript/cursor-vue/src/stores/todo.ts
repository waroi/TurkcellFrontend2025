import { defineStore } from 'pinia'
import type { Todo, TodoCreateDTO } from '@/models/Todo'
import { LocalStorageTodoService, type ITodoService } from '@/services/TodoService'

// SOLID prensiplerini uyguladığımız store
// Single Responsibility: Store sadece durumu yönetiyor, veri işleme servis sınıfına bırakılmış
// Open/Closed: Yeni işlevsellik için genişletilebilir 
// Dependency Inversion: Store servis interface'ine değil, konkret implemente bağlı

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    loading: false,
    error: null as string | null,
    filter: 'all' as 'all' | 'active' | 'completed',
    categories: ['İş', 'Okul', 'Kişisel', 'Alışveriş', 'Diğer'] as string[],
    selectedCategory: '' as string
  }),

  getters: {
    // Filtreleme işlemleri için getter'lar
    filteredTodos: (state) => {
      let result = state.todos;

      // Kategori filtresi
      if (state.selectedCategory) {
        result = result.filter(todo => todo.category === state.selectedCategory);
      }

      // Durum filtresi
      if (state.filter === 'active') {
        return result.filter(todo => !todo.completed);
      } else if (state.filter === 'completed') {
        return result.filter(todo => todo.completed);
      }
      return result;
    },

    completedCount: (state) => {
      return state.todos.filter(todo => todo.completed).length;
    },

    activeCount: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    },

    totalCount: (state) => {
      return state.todos.length;
    }
  },

  actions: {
    // Servis instance'ını oluştur
    // Bağımlılık enjeksiyonu mantığını korumak için helper metot kullanıyoruz
    _getTodoService(): ITodoService {
      return new LocalStorageTodoService();
    },

    // Tüm görevleri yükle
    async fetchTodos() {
      this.loading = true;
      this.error = null;

      try {
        this.todos = await this._getTodoService().getTodos();
      } catch (error) {
        this.error = 'Görevler yüklenirken bir hata oluştu.';
        console.error('Görevleri yükleme hatası:', error);
      } finally {
        this.loading = false;
      }
    },

    // Yeni görev ekle
    async addTodo(todoDTO: TodoCreateDTO) {
      this.loading = true;
      this.error = null;

      try {
        const newTodo = await this._getTodoService().addTodo(todoDTO);
        this.todos.push(newTodo);
      } catch (error) {
        this.error = 'Görev eklenirken bir hata oluştu.';
        console.error('Görev ekleme hatası:', error);
      } finally {
        this.loading = false;
      }
    },

    // Görev tamamlandı durumunu değiştir
    async toggleTodo(id: number) {
      if (!id) {
        console.error('Geçersiz ID:', id);
        return;
      }

      try {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
          console.error('Todo bulunamadı, ID:', id);
          return;
        }

        const currentTodo = this.todos[todoIndex];
        const newState = !currentTodo.completed;

        this.todos[todoIndex] = { ...currentTodo, completed: newState };

        const updatedTodo = await this._getTodoService().updateTodo(id, { completed: newState });

        if (updatedTodo) {
          this.todos[todoIndex] = updatedTodo;
        }
      } catch (error) {
        this.error = 'Görev durumu değiştirilirken bir hata oluştu.';
        console.error('Görev durumu değiştirme hatası:', error);
      }
    },

    // Görev sil
    async deleteTodo(id: number) {
      try {
        const success = await this._getTodoService().deleteTodo(id);

        if (success) {
          this.todos = this.todos.filter(todo => todo.id !== id);
        }
      } catch (error) {
        this.error = 'Görev silinirken bir hata oluştu.';
        console.error('Görev silme hatası:', error);
      }
    },

    // Görev düzenle
    async updateTodo(id: number, todoUpdate: Partial<Todo>) {
      try {
        const updatedTodo = await this._getTodoService().updateTodo(id, todoUpdate);

        if (updatedTodo) {
          const index = this.todos.findIndex(todo => todo.id === id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
          }
        }
      } catch (error) {
        this.error = 'Görev güncellenirken bir hata oluştu.';
        console.error('Görev güncelleme hatası:', error);
      }
    },

    // Filtre ayarla
    setFilter(filter: 'all' | 'active' | 'completed') {
      this.filter = filter;
    },

    // Kategori seç
    setCategory(category: string) {
      this.selectedCategory = category;
    },

    // Tüm tamamlanan görevleri temizle
    async clearCompleted() {
      const completedTodos = this.todos.filter(todo => todo.completed);

      for (const todo of completedTodos) {
        await this.deleteTodo(todo.id);
      }
    }
  }
}); 