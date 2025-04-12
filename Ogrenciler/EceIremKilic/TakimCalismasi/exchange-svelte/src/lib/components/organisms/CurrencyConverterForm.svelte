<script lang="ts">
  import CurrencySelectGroup from "../molecules/CurrencySelectGroup.svelte";
  import Button from "../atoms/Button.svelte";
  import Input from "../atoms/Input.svelte";
  import { currencies } from "../../../store/store";

  export let baseCurrency;
  export let secondCurrency;
  export let isLoading: boolean;
  export let errorMessage: string;
  export let formattedTotal: string;
  export let getCurrency: () => void;
  export let handleBaseCurrency: (e: Event) => void;
  export let handleSecondCurrency: () => void;
  export let swapCurrencies: () => void;
</script>

{#if errorMessage}
  <div class="alert alert-danger">{errorMessage}</div>
{/if}

<div class="mb-4">
  <div class="form-label">Miktar</div>
  <div class="input-group">
    <span class="input-group-text">{baseCurrency.currency}</span>
    <Input placeholder="Miktar giriniz." />
  </div>
</div>

<CurrencySelectGroup
  {baseCurrency}
  {secondCurrency}
  {handleBaseCurrency}
  {handleSecondCurrency}
  {swapCurrencies}
  currencies={$currencies}
/>

<div class="d-grid mb-3">
  <Button
    variant="success btn-lg"
    onClick={getCurrency}
    disabled={isLoading}
    text={isLoading ? "Yükleniyor..." : "Dönüştür"}
  />
</div>

<div class="result-container bg-light p-4 rounded text-center">
  <div class="text-muted mb-1">Dönüştürme Sonucu</div>
  <h3 class="result-value">{formattedTotal}</h3>
  <div class="rate-info text-muted">
    1 {baseCurrency.currency} = {secondCurrency.value.toFixed(6)}
    {secondCurrency.currency}
  </div>
</div>
