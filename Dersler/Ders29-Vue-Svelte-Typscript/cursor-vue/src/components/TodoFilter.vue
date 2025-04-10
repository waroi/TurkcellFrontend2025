<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-filters">
    <div class="status-filters">
      <button 
        :class="{ active: todoStore.filter === 'all' }" 
        @click="todoStore.setFilter('all')"
      >
        Tümü <span class="count">{{ todoStore.totalCount }}</span>
      </button>
      
      <button 
        :class="{ active: todoStore.filter === 'active' }" 
        @click="todoStore.setFilter('active')"
      >
        Aktif <span class="count">{{ todoStore.activeCount }}</span>
      </button>
      
      <button 
        :class="{ active: todoStore.filter === 'completed' }" 
        @click="todoStore.setFilter('completed')"
      >
        Tamamlanan <span class="count">{{ todoStore.completedCount }}</span>
      </button>
    </div>
    
    <div class="category-filter">
      <select v-model="todoStore.selectedCategory" @change="todoStore.setCategory(todoStore.selectedCategory)">
        <option value="">Tüm Kategoriler</option>
        <option v-for="category in todoStore.categories" :key="category">
          {{ category }}
        </option>
      </select>
      
      <button 
        class="clear-btn" 
        @click="todoStore.clearCompleted()" 
        :disabled="todoStore.completedCount === 0"
      >
        Tamamlananları Temizle
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo-filters {
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.status-filters {
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.status-filters button {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.status-filters button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.count {
  display: inline-block;
  margin-left: 0.25rem;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 0.1rem 0.4rem;
}

.active .count {
  background-color: rgba(255, 255, 255, 0.2);
}

.category-filter {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.category-filter select {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  cursor: pointer;
  outline: none;
}

.clear-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background-color: #d32f2f;
}

.clear-btn:disabled {
  background-color: #e0e0e0;
  color: #999;
  cursor: not-allowed;
}
</style> 