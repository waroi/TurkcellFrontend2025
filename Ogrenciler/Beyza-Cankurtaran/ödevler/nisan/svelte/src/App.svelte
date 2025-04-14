<script lang="ts">
  import Card from "./lib/Card.svelte";
  import './app.css';
  import { onMount } from "svelte";

  let theme: "light" | "dark" = "light";

  function toggleTheme(): void {
    theme = theme === "light" ? "dark" : "light";
  }

  onMount(() => {
    document.body.classList.add(theme);
  });
  $: {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
  }

  function getPairConversion(from: string, to: string): Promise<number> {
    return fetch(
      `https://v6.exchangerate-api.com/v6/2e15a4f6b9ac3c8ac8b8829a/pair/${from}/${to}`
    )
      .then((response: Response) => response.json())
      .then((response: { conversion_rate: number }) =>
        parseFloat(response.conversion_rate.toFixed(2))
      );
  }
</script>

<main>
  <header>
    <h1>Currency Exchange Calculator</h1>
    <button class="theme-toggle" on:click={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  </header>

  <Card {getPairConversion} />
</main>
