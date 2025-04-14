<script setup lang="ts">
import { ref } from 'vue';
import type { TodoCreateDTO } from '@/models/Todo';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();

// Form verileri
const newTodoText = ref('');
const selectedCategory = ref(todoStore.categories[0]);

// Form gönderimi
function handleSubmit() {
  if (!newTodoText.value.trim()) return;
  
  const newTodo: TodoCreateDTO = {
    text: newTodoText.value.trim(),
    completed: false,
    category: selectedCategory.value,
  };
  
  todoStore.addTodo(newTodo);
  
  // Formu temizle
  newTodoText.value = '';
  selectedCategory.value = todoStore.categories[0];
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <div class="form-inputs">
      <input
        type="text"
        v-model="newTodoText"
        placeholder="Yeni görev ekle..."
        autofocus
      />
      
      <select v-model="selectedCategory">
        <option v-for="category in todoStore.categories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <button type="submit" :disabled="!newTodoText.trim()">Ekle</button>
  </form>
</template>

<style scoped>
.todo-form {
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-inputs {
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

input, select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input {
  flex: 1;
}

input:focus, select:focus {
  border-color: #4CAF50;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3e8e41;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style> 