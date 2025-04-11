<script lang="ts">
  import { onMount } from "svelte";
  let amount: number = 1;
  let from: string = "USD";
  let to: string = "TRY";
  let result: string = "";
  let rates: Record<string, number> = {};
  let currencies: string[] = [];
  let isLoading: boolean = true;

  const fetchRates = async () => {
  isLoading = true;

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/2fe1eb58df3e2b13e9e8d7df/latest/${from}`);
    const data = await res.json();

    if (!data || !data.conversion_rates) {
      throw new Error('Döviz verileri alınamadı.');
    }

    rates = data.conversion_rates;
    currencies = Object.keys(rates).sort();
    calculate();
  } catch (error) {
    console.error('Hata:', error);
    result = 'Veri alınırken hata oluştu';
  } finally {
    isLoading = false;
  }
};

  const calculate = () => {
  if (rates && rates[to]) {
    const converted = amount * rates[to];
    result = `${converted.toFixed(2)} ${to}`;
  } else {
    result = 'Kur bilgisi alınamadı';
  }
};

  onMount(fetchRates);

  $: if (from && to && rates[to]) {
    calculate();
  }

  const handleBaseChange = async () => {
    await fetchRates();
  };
</script>

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

<style>
  .converter {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 12px;
  }

  select,
  input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  .result {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
