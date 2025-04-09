<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from '@/stores/todo';
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';

const todoStore = useTodoStore();

// Bileşen yüklendiğinde görevleri getir
onMounted(() => {
  todoStore.fetchTodos();
});

// Görev işlemleri
const toggleTodo = (id: number) => {
  todoStore.toggleTodo(id);
};

const deleteTodo = (id: number) => {
  todoStore.deleteTodo(id);
};

const editTodo = (id: number, text: string) => {
  todoStore.updateTodo(id, { text });
};
</script>

<template>
  <div class="todo-container">
    <h1>Vue3 Yapılacaklar Listesi</h1>
    
    <!-- Görev ekleme formu -->
    <TodoForm />
    
    <!-- Filtreler -->
    <TodoFilter />
    
    <!-- Yükleniyor durumu -->
    <div v-if="todoStore.loading" class="loading">
      Yükleniyor...
    </div>
    
    <!-- Hata mesajı -->
    <div v-if="todoStore.error" class="error">
      {{ todoStore.error }}
    </div>
    
    <!-- Görev listesi -->
    <div v-if="!todoStore.loading && !todoStore.error">
      <div v-if="todoStore.filteredTodos.length === 0" class="empty-state">
        Gösterilecek görev yok!
      </div>
      
      <TodoItem
        v-for="todo in todoStore.filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @delete="deleteTodo"
        @edit="editTodo"
      />
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.loading, .error, .empty-state {
  padding: 2rem;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.loading {
  color: #2196F3;
}

.error {
  color: #f44336;
}

.empty-state {
  color: #9e9e9e;
  font-style: italic;
}
</style> 