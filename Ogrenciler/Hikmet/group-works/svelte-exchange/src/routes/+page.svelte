<script lang="ts">
  import { apiData, currencyRates } from "$lib/store";
  import { onMount } from "svelte";

  let fromCurrency = "USD";
  let toCurrency = "TRY";
  let inputRate = 1;
  let isOpen = false;
  let selectedType: "from" | "to" = "to";
  let fromCurrencyRate = 1.0;
  let toCurrencyRate = 1.0;

  onMount(async () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/2698119567804d617518d360/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => {
        apiData.set(data);

        const unsubscribe = currencyRates.subscribe((rates) => {
          const from = rates.find((item) => item.currency === fromCurrency);
          const to = rates.find((item) => item.currency === toCurrency);

          if (from) fromCurrencyRate = from.rate;
          if (to) toCurrencyRate = to.rate;
        });

        setTimeout(() => unsubscribe(), 100);
      })
      .catch((error) => {
        console.log(error);
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
  <div class="header">
    <div class="logo">
      <i class="fa-solid fa-bolt"></i>
      <span>exchanger</span>
    </div>
  </div>
  {#if isOpen}
    <div class="dropdown-container">
      <div class="dropdown">
        <div class="dropdown-header">
          <button on:click={() => (isOpen = false)} class="close-btn" aria-label="Close dropdown">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
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
        <i class="fa-solid fa-repeat"></i>
        <button on:click={() => openDropdown("to")} class="current-rate-text">
          {toCurrency}
        </button>
      </div>
      <div class="rate-input-container">
        <button
          on:click={() => (inputRate -= 1)}
          class="rate-input-button"
          aria-label="Decrease rate"
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        <input type="text" bind:value={inputRate} class="rate-input" />
        <button
          on:click={() => (inputRate += 1)}
          class="rate-input-button"
          aria-label="Increase rate"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <h1 class="current-rate">
        {((inputRate / fromCurrencyRate) * toCurrencyRate).toFixed(4)}
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

  <div class="footer">
    <div class="footer-status">
      <i class="fa-solid fa-circle fa-fade"></i>
      <span>Live data showing</span>
    </div>
  </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    font-weight: 200;
  }

  .header {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
  }

  .footer {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .footer-status {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: rgba(190, 190, 190, 0.1);
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .footer-status span {
    background: linear-gradient(to right, #818181, #e9e9e9, #888888);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer-status i {
    color: rgb(0, 223, 0);
    font-size: 10px;
  }

  .logo {
    height: 100px;
    background: linear-gradient(to right, #818181, #e9e9e9, #4e4e4e);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .current-rate-text {
    background: linear-gradient(to right, #818181, #e9e9e9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .current-rate-dropdown {
    color: #c7c7c7;
    font-size: 17px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: "Inter", sans-serif;
    padding: 3px;
    border-radius: 5px;
  }

  .current-rate-dropdown:hover {
    background-color: #313131;
  }
  .current-rate {
    font-size: 150px;
    background: linear-gradient(to right, #818181, #e9e9e9, #4e4e4e);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 400;
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

  .dropdown-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
  }

  .close-btn {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-size: 15px;
    
  }

  .close-btn:hover {
    background-color: rgba(255, 0, 0, 0.3);
    color: red;
  }

  .dropdown {
    width: 400px;
    height: 300px;
    background-color: #242424;
    overflow-y: auto;
    color: black;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
  }

  .rate-input-container {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(190, 190, 190, 0.1);
  }
  .rate-input {
    width: 70px;
    height: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    background: linear-gradient(to right, #818181, #e9e9e9, #4e4e4e);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
    border-radius: 3px;
  }

  .rate-input-button {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
  }

  .currencies {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    color: #bbbbbb;
    margin-bottom: 20px;
  }
</style>
