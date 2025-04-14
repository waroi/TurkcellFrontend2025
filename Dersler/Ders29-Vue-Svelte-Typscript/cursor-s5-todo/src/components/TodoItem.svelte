<script lang="ts">
  import { todos } from "../services/TodoService";
  import type { Todo } from "../types/Todo";
  import { slide } from "svelte/transition";

  // Geleneksel Svelte props tanımlaması
  export let todo: Todo;

  // Format date as a readable string
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("tr-TR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Edit mode state
  let isEditing = false;
  let editText = todo.text;

  // Handle toggling the todo completion
  const toggleTodo = () => {
    todos.toggle(todo.id);
  };

  // Handle removing the todo
  const removeTodo = () => {
    todos.remove(todo.id);
  };

  // Enter edit mode
  const startEditing = () => {
    isEditing = true;
    editText = todo.text;
  };

  // Save edits
  const saveEdits = () => {
    if (editText.trim() !== "") {
      todos.updateText(todo.id, editText.trim());
    }
    isEditing = false;
  };

  // Cancel editing
  const cancelEditing = () => {
    isEditing = false;
    editText = todo.text;
  };

  // Handle key events in edit mode
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      saveEdits();
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };
</script>

<div
  class="todo-item"
  transition:slide|local={{ duration: 300 }}
  class:completed={todo.completed}
>
  {#if !isEditing}
    <div class="todo-content">
      <label class="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          on:change={toggleTodo}
        />
        <span class="checkmark"></span>
      </label>

      <div class="todo-text-container" on:dblclick={startEditing}>
        <p class="todo-text">{todo.text}</p>
        <p class="todo-date">{formatDate(todo.createdAt)}</p>
      </div>

      <div class="todo-actions">
        <button class="edit-btn" on:click={startEditing} aria-label="Düzenle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            ></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            ></path>
          </svg>
        </button>
        <button class="delete-btn" on:click={removeTodo} aria-label="Sil">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  {:else}
    <div class="todo-edit">
      <input
        type="text"
        class="edit-input"
        bind:value={editText}
        on:keydown={handleKeyDown}
        on:blur={saveEdits}
        autofocus
      />
      <div class="edit-actions">
        <button class="save-btn" on:click={saveEdits} aria-label="Kaydet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
            ></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        </button>
        <button class="cancel-btn" on:click={cancelEditing} aria-label="İptal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .todo-item {
    margin-bottom: 12px;
    padding: 14px;
    border-radius: 8px;
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
  }

  .todo-item:hover {
    box-shadow: var(--card-shadow-hover);
  }

  .todo-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .todo-text-container {
    flex: 1;
    cursor: pointer;
  }

  .todo-text {
    margin: 0;
    font-size: 1rem;
    color: var(--text-color);
    word-break: break-word;
    transition: color 0.2s;
  }

  .todo-date {
    margin: 4px 0 0;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .todo-actions {
    display: flex;
    gap: 8px;
  }

  .checkbox-container {
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: var(--input-bg);
    border: 2px solid var(--border-color);
    border-radius: 4px;
    transition: all 0.2s;
  }

  .checkbox-container:hover .checkmark {
    border-color: var(--primary-color);
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .completed .todo-text {
    text-decoration: line-through;
    color: var(--text-secondary);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background: var(--button-hover);
    color: var(--text-color);
  }

  .edit-btn:hover {
    color: var(--primary-color);
  }

  .delete-btn:hover,
  .cancel-btn:hover {
    color: var(--error-color);
  }

  .save-btn:hover {
    color: var(--success-color);
  }

  .todo-edit {
    display: flex;
    gap: 12px;
  }

  .edit-input {
    flex: 1;
    padding: 8px 12px;
    border: 2px solid var(--primary-color);
    border-radius: 6px;
    font-size: 1rem;
    background-color: var(--input-bg);
    color: var(--text-color);
  }

  .edit-input:focus {
    outline: none;
  }

  .edit-actions {
    display: flex;
    gap: 8px;
  }
</style>
