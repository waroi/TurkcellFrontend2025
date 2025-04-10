<script lang="ts">
  import { apiData, currencyRates } from "$lib/store";
  import { onMount } from "svelte";

  onMount(async () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/2698119567804d617518d360/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        apiData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return {};
      });
  });

  const handleCurrentChange = (currency: string) => {
    current = currency;
    isOpen = false;
  };

  let isOpen = false;
  let current = "TRY";
  let inputRate = 1;
</script>

<main>
  {#if isOpen}
    <div class="dropdown-container">
      <div class="dropdown">
        {#each $currencyRates as { currency, rate }}
          <button
            on:click={() => handleCurrentChange(currency)}
            class="current-rate-dropdown"
          >
            {currency}
          </button>
        {/each}
      </div>
    </div>
  {/if}
  {#each $currencyRates as { currency, rate }}
    {#if currency === current}
      <button on:click={() => (isOpen = !isOpen)} class="current-rate-text">
        usd
      </button>
      <button on:click={() => (isOpen = !isOpen)} class="current-rate-text">
        {currency}
      </button>
      <input type="text" bind:value={inputRate} class="rate-input" />
      <h1 class="current-rate">{rate * inputRate}</h1>
    {/if}
  {/each}
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    width: 100%;
    height: 100vh;
    background-color: #041e42;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Roboto Slab", serif;
    font-weight: 200;
  }

  .current-rate-text {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .current-rate-dropdown {
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .current-rate {
    font-size: 130px;
    color: #fff;
  }

  .dropdown-container {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dropdown {
    width: 300px;
    height: 300px;
    background-color: #fff;
    overflow-y: auto;
    color: black;
    display: flex;
    flex-direction: column;

    .rate-input {
      width: 100px;
      height: 50px;
    }
  }
</style>
