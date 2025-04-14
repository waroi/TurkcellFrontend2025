<script lang="ts">
  import { onMount } from "svelte";
  let amount: number = 1;
  let from: string = "USD";
  let to: string = "TRY";
  let result: string = "";
  let rates: Record<string, number> = {};
  let currencies: string[] = [];
  let isLoading: boolean = true;
  let exchangeRates: Record<string, number> = {};

  const popularCurrencies = ["USD", "EUR", "GBP", "JPY", "TRY"];

  const fetchRates = async () => {
    isLoading = true;

    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/2fe1eb58df3e2b13e9e8d7df/latest/${from}`
      );
      const data = await res.json();

      if (!data || !data.conversion_rates) {
        throw new Error("Döviz verileri alınamadı.");
      }

      rates = data.conversion_rates;
      currencies = Object.keys(rates).sort();
      exchangeRates = calculateExchangeRates(rates);
      calculate();
    } catch (error) {
      console.error("Hata:", error);
      result = "Veri alınırken hata oluştu";
    } finally {
      isLoading = false;
    }
  };

  const calculate = () => {
    if (rates && rates[to]) {
      const converted = amount * rates[to];
      result = `${converted.toFixed(2)} ${to}`;
    } else {
      result = "Kur bilgisi alınamadı";
    }
  };
  const calculateExchangeRates = (rates: Record<string, number>) => {
    let exchangeRates: Record<string, number> = {};
    popularCurrencies.forEach((currency) => {
      if (currency !== "TRY" && rates["TRY"]) {
        exchangeRates[currency] = rates["TRY"] / rates[currency];
      }
    });

    return exchangeRates;
  };

  onMount(fetchRates);

  $: if (from && to && rates[to]) {
    calculate();
  }

  const handleBaseChange = async () => {
    await fetchRates();
  };
</script>

<div class="container">
  <div class="navbar">
    {#if isLoading}
      <p class="loading-text">Yükleniyor...</p>
    {:else}
      <div class="currency-list">
        {#each Object.keys(exchangeRates) as currency}
          <span class="currency-item">
            {currency}: {exchangeRates[currency].toFixed(2)}
          </span>
        {/each}
      </div>
    {/if}
  </div>

  <div class="converter">
    <h2>Döviz Dönüştürücü</h2>

    <label>Tutar</label>
    <input
      type="number"
      bind:value={amount}
      min="0"
      step="0.01"
      on:input={calculate}
    />

    <label>Kaynak Para Birimi</label>
    <select bind:value={from} on:change={handleBaseChange}>
      {#each currencies as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>

    <label>Hedef Para Birimi</label>
    <select bind:value={to} on:change={calculate}>
      {#each currencies as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>

    {#if isLoading}
      <p>Yükleniyor...</p>
    {:else}
      <div class="result">{amount} {from} = {result}</div>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
    background-image: url("https://www.investment.com.tr/wp-content/uploads/2023/01/5e9bf58d214ed81e94b495e8.jpg.webp");
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #333;
    padding: 20px;
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .navbar h3 {
    font-size: 1.8rem;
    margin-right: 2rem;
  }

  .currency-list {
    display: flex;
    gap: 20px;
    font-size: 1.2rem;
  }

  .currency-item {
    font-weight: 600;
    color: rgb(32, 133, 62);
  }

  .converter {
    background: rgba(0,0,0,0.5);
    border-radius: 16px;
    padding: 2rem 3rem;
    width: 100%;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
    backdrop-filter: blur(15px);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .converter h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #fbfbfb;
    font-weight: bold;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #f0f0f0;
    text-align: left;
    font-size: 1.1rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    background-color: #fafafa;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  input:focus,
  select:focus {
    outline: none;
    border-color: #1cb032;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  .result {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: #27ba50;
  }

  .result p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #999;
  }

  .loading-text {
    color: #1bbb50;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
