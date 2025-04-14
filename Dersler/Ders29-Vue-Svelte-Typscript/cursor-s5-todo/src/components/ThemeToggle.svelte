<script lang="ts">
  import { theme } from "../services/ThemeService";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<button
  class="theme-toggle"
  on:click={() => theme.toggle()}
  aria-label={$theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"}
  in:scale={{ duration: 200, easing: quintOut }}
>
  {#if $theme === "light"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: var(--card-bg);
    color: var(--text-color);
    cursor: pointer;
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
    z-index: 10;
  }

  .theme-toggle:hover {
    transform: rotate(15deg);
    box-shadow: var(--card-shadow-hover);
  }
</style>
