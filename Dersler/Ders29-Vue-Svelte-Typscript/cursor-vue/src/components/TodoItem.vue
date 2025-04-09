<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Todo } from '@/models/Todo';

// Bileşen prop'ları
const props = defineProps<{
  todo: Todo;
}>();

// Olaylar
const emit = defineEmits<{
  toggle: [id: number];
  delete: [id: number];
  edit: [id: number, text: string];
}>();

// Düzenleme durumu için yerel state
const isEditing = ref(false);
const editText = ref('');

// Düzenleme modunu aç
function startEdit() {
  editText.value = props.todo.text;
  isEditing.value = true;
}

// Düzenlemeyi kaydet
function saveEdit() {
  if (editText.value.trim()) {
    emit('edit', props.todo.id, editText.value);
    isEditing.value = false;
  }
}

// Düzenlemeyi iptal et (Esc tuşu ile)
function cancelEdit() {
  isEditing.value = false;
}

// Checkbox durumunu değiştir
function toggleComplete() {
  emit('toggle', props.todo.id);
}
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div v-if="!isEditing" class="todo-view">
      <!-- Tamamlandı işaretleme checkbox'ı -->
      <div class="todo-checkbox" @click="toggleComplete">
        <div class="checkmark" :class="{ checked: todo.completed }"></div>
      </div>
      
      <!-- Görev içeriği -->
      <div class="todo-content" @dblclick="startEdit">
        <span class="todo-text">{{ todo.text }}</span>
        <span class="todo-category">{{ todo.category }}</span>
        <span class="todo-date">{{ new Date(todo.createdAt).toLocaleDateString('tr-TR') }}</span>
      </div>
      
      <!-- Silme butonu -->
      <button class="delete-btn" @click="emit('delete', todo.id)">
        <span>&times;</span>
      </button>
    </div>
    
    <!-- Düzenleme modu -->
    <div v-else class="todo-edit">
      <input
        type="text"
        v-model="editText"
        @blur="saveEdit"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
        ref="editInput"
        autofocus
      />
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  margin: 0.5rem 0;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.todo-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.todo-item.completed {
  opacity: 0.7;
  background-color: #f9f9f9;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.todo-view {
  display: flex;
  align-items: center;
  width: 100%;
}

.todo-checkbox {
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;
  transition: all 0.2s;
}

.todo-checkbox:hover .checkmark {
  background-color: #ddd;
}

.checkmark.checked {
  background-color: #4CAF50;
}

.checkmark.checked:after {
  content: "";
  position: absolute;
  display: block;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.todo-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.todo-text {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.todo-category {
  font-size: 0.8rem;
  color: #777;
  background-color: #f0f0f0;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.todo-date {
  font-size: 0.7rem;
  color: #999;
}

.delete-btn {
  background: none;
  border: none;
  color: #f44336;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.delete-btn:hover {
  opacity: 1;
}

.todo-edit {
  width: 100%;
}

.todo-edit input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  outline: none;
}

.todo-edit input:focus {
  border-color: #4CAF50;
}
</style> 