<script lang="ts">
  import { onMount } from "svelte";
  import { currencies } from "../../store/store";

  let baseCurrency = { currency: "IDR", value: 100 };
  let secondCurrency = { currency: "USD", value: 0 };
  let amount = 100;
  let isLoading = false;
  let errorMessage = "";

  let currencyRates: Record<string, number> = {};
  $: total = amount * secondCurrency.value;
  $: formattedTotal = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: secondCurrency.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total);

  onMount(() => getCurrency());

  const getCurrency = async () => {
    isLoading = true;
    errorMessage = "";
    try {
      const response = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fSMzNhNtA6yKAtBve6QaWU3DGqtrzTQww3crk9jv&base_currency=${baseCurrency.currency}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch currency data");
      }

      const data = await response.json();
      currencyRates = data.data;

      if (secondCurrency.currency in currencyRates) {
        secondCurrency.value = currencyRates[secondCurrency.currency];
      }

      const currencies_list: any = Object.entries(data.data).map(
        ([key, value]) => ({
          key,
          value,
        })
      );
      currencies.set(currencies_list);
    } catch (error) {
      errorMessage = "Error fetching currency data. Please try again.";
      console.error(error);
    } finally {
      isLoading = false;
    }
  };

  const handleBaseCurrency = () => {
    getCurrency();
  };

  const handleSecondCurrency = () => {
    if (currencyRates[secondCurrency.currency]) {
      secondCurrency.value = currencyRates[secondCurrency.currency];
    }
  };

  const swapCurrencies = () => {
    const temp = baseCurrency.currency;
    baseCurrency.currency = secondCurrency.currency;
    secondCurrency.currency = temp;
    getCurrency();
  };
</script>

<div class="card shadow-sm">
  <div class="card-header bg-primary text-white">
    <h4 class="mb-0">Döviz Kuru Dönüştürücü</h4>
  </div>
  <div class="card-body">
    {#if errorMessage}
      <div class="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    {/if}

    <div class="mb-4">
      <label for="amountInput" class="form-label">Miktar</label>
      <div class="input-group">
        <span class="input-group-text">{baseCurrency.currency}</span>
        <input
          id="amountInput"
          class="form-control form-control-lg"
          type="number"
          bind:value={amount}
          min="0"
          placeholder="Miktar giriniz."
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-5">
        <div class="form-group">
          <label for="baseCurrencySelect" class="form-label"
            >Dönüştürülecek</label
          >
          <select
            id="baseCurrencySelect"
            class="form-select"
            bind:value={baseCurrency.currency}
            on:change={handleBaseCurrency}
          >
            {#each $currencies as currency}
              <option value={currency.key}>
                {currency.key}
              </option>
            {/each}
          </select>
        </div>
      </div>

      <div class="col-md-2 d-flex align-items-center justify-content-center">
        <button
          class="btn btn-outline-secondary mt-4"
          on:click={swapCurrencies}
        >
          <i class="bi bi-arrow-left-right"></i> ↔
        </button>
      </div>

      <div class="col-md-5">
        <div class="form-group">
          <label for="secondCurrencySelect" class="form-label">Hedef</label>
          <select
            id="secondCurrencySelect"
            class="form-select"
            bind:value={secondCurrency.currency}
            on:change={handleSecondCurrency}
          >
            {#each $currencies as currency}
              <option value={currency.key}>
                {currency.key}
              </option>
            {/each}
          </select>
        </div>
      </div>
    </div>

    <div class="d-grid mb-3">
      <button
        class="btn btn-primary btn-lg"
        on:click={getCurrency}
        disabled={isLoading}
      >
        {#if isLoading}
          <span
            class="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Yükleniyor...
        {:else}
          Dönüştür
        {/if}
      </button>
    </div>

    <div class="result-container bg-light p-4 rounded text-center">
      <div class="text-muted mb-1">Dönüştürme Sonucu</div>
      <h3 class="result-value">{formattedTotal}</h3>
      <div class="rate-info text-muted">
        1 {baseCurrency.currency} = {secondCurrency.value.toFixed(6)}
        {secondCurrency.currency}
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    border-radius: 10px;
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto;
  }

  .result-container {
    border: 1px solid #dee2e6;
  }

  .result-value {
    font-weight: bold;
    color: #0d6efd;
  }

  .rate-info {
    font-size: 0.9rem;
  }
</style>
