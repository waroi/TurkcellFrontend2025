<script lang="ts">
  import {apiData, currencyRates} from "$lib/store";
  import {onMount} from "svelte";

  let fromCurrency = "USD";
  let toCurrency = "TRY";
  let inputRate = 1;
  let isOpen = false;
  let selectedType: "from" | "to" = "to";
  let fromCurrencyRate = 1.0;
  let toCurrencyRate = 38.0122;

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

  const handleCurrencyChange = (currency: string, rate: number) => {
    if (selectedType === "from") {
      fromCurrency = currency;
      fromCurrencyRate = rate;
    } else {
      toCurrency = currency;
      toCurrencyRate = rate;
    }
    isOpen = false;
  };

  const openDropdown = (type: "from" | "to") => {
    selectedType = type;
    isOpen = true;
  };
</script>

<main>
  {#if isOpen}
    <div class="dropdown-container">
      <div class="dropdown">
        {#each $currencyRates as { currency, rate }}
          <button
            on:click={() => handleCurrencyChange(currency, rate)}
            class="current-rate-dropdown"
          >
            {currency}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  {#each $currencyRates as { currency, rate }}
    {#if currency === toCurrency}
      <div class="currencies">
        <button on:click={() => openDropdown("from")} class="current-rate-text">
          {fromCurrency}
        </button>
        <button on:click={() => openDropdown("to")} class="current-rate-text">
          {toCurrency}
        </button>
      </div>
      <input type="text" bind:value={inputRate} class="rate-input" />
      <h1 class="current-rate">
        {(inputRate / fromCurrencyRate) * toCurrencyRate}
      </h1>

      <!-- 1 dolar 38 lira
  1 dolar 2.76 lari
  x lira çevirmek istiyorum
  x/38 = x/38
  x/38 * 2.76 = A 
  x Lira = A Lari
      -->
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
  .currencies {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
