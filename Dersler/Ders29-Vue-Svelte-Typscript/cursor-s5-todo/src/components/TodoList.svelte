<script lang="ts">
  import { todos } from "../services/TodoService";
  import TodoItem from "./TodoItem.svelte";
  import { fade } from "svelte/transition";
  import type { Todo } from "../types/Todo";

  // New todo input
  let newTodo = "";

  // Filter options
  type FilterType = "all" | "active" | "completed";
  let filter: FilterType = "all";

  // Add new todo
  const addTodo = () => {
    const text = newTodo.trim();
    if (text !== "") {
      todos.add(text);
      newTodo = "";
    }
  };

  // Handle key events in input
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Clear all completed todos
  const clearCompleted = () => {
    todos.clearCompleted();
  };

  // Helper function to get filtered todos based on current filter
  function getFilteredTodos(): Todo[] {
    if (filter === "all") return $todos;
    if (filter === "active") return $todos.filter((todo) => !todo.completed);
    return $todos.filter((todo) => todo.completed);
  }
</script>

<div class="todo-list-container" in:fade={{ duration: 300, delay: 200 }}>
  <div class="todo-input-container">
    <input
      type="text"
      class="todo-input"
      placeholder="Yeni görev ekle..."
      bind:value={newTodo}
      on:keydown={handleKeyDown}
    />
    <button
      class="add-button"
      on:click={addTodo}
      disabled={newTodo.trim() === ""}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  </div>

  {#if $todos.length > 0}
    <div class="filter-container">
      <div class="filter-buttons">
        <button
          class="filter-button"
          class:active={filter === "all"}
          on:click={() => (filter = "all")}
        >
          Tümü
        </button>
        <button
          class="filter-button"
          class:active={filter === "active"}
          on:click={() => (filter = "active")}
        >
          Aktif
        </button>
        <button
          class="filter-button"
          class:active={filter === "completed"}
          on:click={() => (filter = "completed")}
        >
          Tamamlananlar
        </button>
      </div>

      <div class="todo-summary">
        <span class="todo-count"
          >{$todos.filter((todo) => !todo.completed).length} görev kaldı</span
        >
        {#if $todos.some((todo) => todo.completed)}
          <button class="clear-button" on:click={clearCompleted}>
            Tamamlananları Temizle
          </button>
        {/if}
      </div>
    </div>

    <div class="todos-container">
      {#if filter === "all" ? $todos.length > 0 : filter === "active" ? $todos.filter((todo) => !todo.completed).length > 0 : $todos.filter((todo) => todo.completed).length > 0}
        {#each getFilteredTodos() as todo (todo.id)}
          <TodoItem {todo} />
        {/each}
      {:else}
        <div class="empty-state" in:fade={{ duration: 300 }}>
          <p>
            {#if filter === "all"}
              Görev bulunamadı. Yeni görev ekleyin.
            {:else if filter === "active"}
              Aktif görev bulunamadı.
            {:else}
              Tamamlanan görev bulunamadı.
            {/if}
          </p>
        </div>
      {/if}
    </div>
  {:else}
    <div class="empty-state" in:fade={{ duration: 300 }}>
      <p>Henüz görev eklemediniz. Yeni görev ekleyin.</p>
    </div>
  {/if}
</div>

<style>
  .todo-list-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .todo-input-container {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
  }

  .todo-input {
    flex: 1;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    box-shadow: var(--input-shadow);
    background-color: var(--input-bg);
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .todo-input:focus {
    outline: none;
    box-shadow: var(--input-shadow-focus);
  }

  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: none;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add-button:hover {
    background-color: var(--primary-color-hover);
    transform: translateY(-2px);
  }

  .add-button:disabled {
    background-color: var(--disabled-color);
    cursor: not-allowed;
    transform: none;
  }

  .filter-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    padding: 12px 16px;
    background-color: var(--card-bg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
  }

  .filter-buttons {
    display: flex;
    margin-bottom: 12px;
    gap: 10px;
  }

  .filter-button {
    padding: 6px 12px;
    border: none;
    background-color: transparent;
    color: var(--text-secondary);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .filter-button:hover {
    background-color: var(--button-hover);
    color: var(--text-color);
  }

  .filter-button.active {
    background-color: var(--primary-color);
    color: white;
  }

  .todo-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
  }

  .todo-count {
    color: var(--text-secondary);
  }

  .clear-button {
    background: none;
    border: none;
    color: var(--primary-color);
    font-size: 0.9rem;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .clear-button:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  .todos-container {
    margin-top: 20px;
  }

  .empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    text-align: center;
    background-color: var(--card-bg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
    color: var(--text-secondary);
  }
</style>
