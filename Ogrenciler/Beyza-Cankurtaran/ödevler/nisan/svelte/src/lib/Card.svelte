<script lang="ts">
  import "./Card.css";

  import type { Currency, Pair } from "../types";
  import currencies from "../currencies";
  import popularPairs from "../popularPairs";

  export var getPairConversion: (from: string, to: string) => Promise<number>;

  let amount: number = 1;
  let fromCurrency: string = "USD";
  let toCurrency: string = "TRY";
  let rate: number = 1;

  function calculate(): void {
    if (fromCurrency && toCurrency)
      getPairConversion(fromCurrency, toCurrency).then(
        (response) => (rate = response),
      );
  }

  function formatCurrency(value: number, code: string): string {
    return `${value.toFixed(2)} ${getCurrencySymbol(code)}`;
  }

  function getCurrencySymbol(code: string): string {
  const currency = currencies.find(
    (currency: Currency): boolean => currency.code === code
  );

  if (!currency) {
    return ""; 
  }

  return currency.symbol;
}

  function swapCurrencies(): void {
    [fromCurrency, toCurrency] = [toCurrency, fromCurrency];

    calculate();
  }

  function selectPair(pair: Pair): void {
    fromCurrency = pair.from;
    toCurrency = pair.to;
    calculate();
  }

  calculate();
</script>

<div class="card">
  <div class="calculator">
    <div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          bind:value={amount}
          on:input={calculate}
          placeholder="Enter amount"
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="fromCurrency">From Currency</label>
        <div class="currency-select-container">
          <img
            class="flag-icon"
            src={`https://www.xe.com/svgs/flags/${fromCurrency.toLowerCase()}.static.svg`}
            alt={`${fromCurrency} flag`}
          />
          <select
            
            id="fromCurrency"
            bind:value={fromCurrency}
            on:change={calculate}
          >
            {#each currencies as currency}
              <option value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            {/each}
          </select>
          <span class="currency-icon">{getCurrencySymbol(fromCurrency)}</span>
        </div>
      </div>

      <button class="swap-btn" on:click={swapCurrencies}> ⇅ </button>

      <div class="form-group">
        <label for="toCurrency">To Currency</label>
        <div class="currency-select-container">
          <img
            class="flag-icon"
            src={`https://www.xe.com/svgs/flags/${toCurrency.toLowerCase()}.static.svg`}
            alt={`${toCurrency} flag`}
          />
          <select id="toCurrency" bind:value={toCurrency} on:change={calculate}>
            {#each currencies as currency}
              <option value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            {/each}
          </select>
          
          <span class="currency-icon">{getCurrencySymbol(toCurrency)}</span>
        </div>
      </div>

      <div class="popular-pairs">
        {#each popularPairs as pair}
          <button
            type="button"
            class="pair-chip"
            on:click={() => selectPair(pair)}
          >
            {pair.from}/{pair.to}
          </button>
        {/each}
      </div>
      
    </div>

    <div class="result">
      <h2>Conversion Result</h2>
      {#if rate !== null}
        <div>
          <div class="result-amount">
            {formatCurrency(amount * rate, toCurrency)}
          </div>
          <div class="result-text">
            {formatCurrency(amount, fromCurrency)} = {formatCurrency(
              amount * rate,
              toCurrency,
            )}
          </div>
          <div class="exchange-rate">
            1 {fromCurrency} = {(1 * rate).toFixed(2)}
            {toCurrency}
          </div>
          <div class="exchange-rate">
            1 {toCurrency} = {(1 / rate).toFixed(2)}
            {fromCurrency}
          </div>
        </div>
      {:else}
        <div>
          Enter an amount and select currencies to see the conversion result
        </div>
      {/if}
    </div>
  </div>
</div>
