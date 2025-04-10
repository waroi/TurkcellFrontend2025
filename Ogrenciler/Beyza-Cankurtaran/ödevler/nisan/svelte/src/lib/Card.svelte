<script>
  // State
  let amount = 1;
  let fromCurrency = "USD";
  let toCurrency = "EUR";
  let convertedAmount = null;
  
  // Currency data
  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "BRL", name: "Brazilian Real", symbol: "R$" },
    { code: "RUB", name: "Russian Ruble", symbol: "₽" },
    { code: "KRW", name: "South Korean Won", symbol: "₩" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
    { code: "MXN", name: "Mexican Peso", symbol: "Mex$" },
  ];
  
  const popularPairs = [
    { from: "USD", to: "EUR" },
    { from: "EUR", to: "USD" },
    { from: "USD", to: "GBP" },
    { from: "GBP", to: "USD" },
    { from: "USD", to: "JPY" },
    { from: "EUR", to: "GBP" },
  ];
  
  // Mock exchange rates data - in a real application, this would come from an API
  const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.26,
    AUD: 1.35,
    CAD: 1.25,
    CHF: 0.91,
    CNY: 6.45,
    INR: 74.38,
    BRL: 5.23,
    RUB: 73.45,
    KRW: 1156.23,
    SGD: 1.35,
    NZD: 1.42,
    MXN: 19.87,
  };
  
  // Methods
  function calculateExchange() {
    if (amount && fromCurrency && toCurrency) {
      const rate = getExchangeRate(fromCurrency, toCurrency);
      convertedAmount = amount * rate;
    }
  }
  
  function getExchangeRate(from, to) {
    const fromRate = exchangeRates[from];
    const toRate = exchangeRates[to];
    return parseFloat((toRate / fromRate).toFixed(6));
  }
  
  function formatCurrency(value, currencyCode) {
    if (value === null) return '';
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    return formatter.format(value);
  }
  
  function getCurrencySymbol(code) {
    const currency = currencies.find(c => c.code === code);
    return currency ? currency.symbol : '';
  }
  
  function swapCurrencies() {
    [fromCurrency, toCurrency] = [toCurrency, fromCurrency];
    calculateExchange();
  }
  
  function selectPair(pair) {
    fromCurrency = pair.from;
    toCurrency = pair.to;
    calculateExchange();
  }
  
  // Initialize conversion
  calculateExchange();
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
          on:input={calculateExchange}
          placeholder="Enter amount"
          min="0"
        >
      </div>
      
      <div class="form-group">
        <label for="fromCurrency">From Currency</label>
        <div class="currency-select-container">
          <select 
            id="fromCurrency" 
            bind:value={fromCurrency} 
            on:change={calculateExchange}
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
      
      <button class="swap-btn" on:click={swapCurrencies}>
        ⇅
      </button>
      
      <div class="form-group">
        <label for="toCurrency">To Currency</label>
        <div class="currency-select-container">
          <select 
            id="toCurrency" 
            bind:value={toCurrency} 
            on:change={calculateExchange}
          >
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
          <div class="pair-chip" on:click={() => selectPair(pair)}>
            {pair.from}/{pair.to}
          </div>
        {/each}
      </div>
      
    </div>
    
    <div class="result">
      <h2>Conversion Result</h2>
      {#if convertedAmount !== null}
        <div>
          <div class="result-amount">{formatCurrency(convertedAmount, toCurrency)}</div>
          <div class="result-text">
            {formatCurrency(amount, fromCurrency)} = {formatCurrency(convertedAmount, toCurrency)}
          </div>
          <div class="exchange-rate">
            1 {fromCurrency} = {getExchangeRate(fromCurrency, toCurrency)} {toCurrency}
          </div>
          <div class="exchange-rate">
            1 {toCurrency} = {getExchangeRate(toCurrency, fromCurrency)} {fromCurrency}
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

<style>
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .calculator {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .calculator {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  .currency-select-container {
    position: relative;
  }

  .currency-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
  }

  .swap-btn {
    background: #f0f0f0;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    transition: background-color 0.3s;
  }

  .swap-btn:hover {
    background: #e0e0e0;
  }

  .btn {
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background: #1d4ed8;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .popular-pairs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }

  .pair-chip {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .pair-chip:hover {
    background: #e0e0e0;
  }

  .result {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .result h2 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .result-amount {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .result-text {
    margin-bottom: 15px;
    font-size: 16px;
  }

  .exchange-rate {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
</style>