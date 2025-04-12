<script lang="ts">
  import Select from "../atoms/Select.svelte";
  import Button from "../atoms/Button.svelte";
  import type { Currency } from "../../../types/type";

  export let baseCurrency: { currency: string; value: number };
  export let secondCurrency: { currency: string; value: number };
  export let currencies: Currency[];
  export let handleBaseCurrency: (e: Event) => void;
  export let handleSecondCurrency: () => void;
  export let swapCurrencies: () => void;
</script>

<div class="row mb-4">
  <div class="col-md-5">
    <label for="baseCurrencySelect" class="form-label">Dönüştürülecek</label>
    <Select
      value={baseCurrency.currency}
      onChange={handleBaseCurrency}
      options={currencies.map((c) => ({ key: c.key }))}
    />
  </div>
  <div class="col-md-2 d-flex align-items-center justify-content-center">
    <Button
      text="↔"
      variant="outline-secondary mt-4"
      onClick={swapCurrencies}
    />
  </div>
  <div class="col-md-5">
    <label for="secondCurrencySelect" class="form-label">Hedef</label>
    <select
      id="secondCurrencySelect"
      class="form-select"
      bind:value={secondCurrency.currency}
      on:change={handleSecondCurrency}
    >
      {#each currencies as currency}
        <option value={currency.key}>{currency.key}</option>
      {/each}
    </select>
  </div>
</div>
