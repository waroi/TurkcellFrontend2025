<script lang="ts">
  import "./app.css";
  import TodoList from "./components/TodoList.svelte";
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="app-container" in:fade={{ duration: 500 }}>
  <ThemeToggle />

  <h1 class="app-title">Görev Yöneticisi</h1>
  <h2 class="app-subtitle">Yapılacakları düzenle, hayatını kolaylaştır.</h2>

  <TodoList />
</div>
