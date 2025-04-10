<script lang="ts">
  import { onMount } from "svelte";
  import { currencies } from "../../store/store";

  let baseCurrency: any = $state({ currency: "IDR", value: 444 });
  let secondCurrency: any = $state({ currency: "USD", value: 37 });
  let total = $state(baseCurrency.value * secondCurrency.value);

  onMount(() => getCurrency());

  // benim apikey fca_live_IPhSw7yJYy2kOSiimlz6Kh0LmpZZfALZpSS8hnhp
  const getCurrency = async () => {
    const response = await fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fSMzNhNtA6yKAtBve6QaWU3DGqtrzTQww3crk9jv&base_currency=${baseCurrency.currency}`
    );
    const data = await response.json();

    const currencies_list = [];
    for (const [key, value] of Object.entries(data.data))
      currencies_list.push({ key, value });

    currencies.set(currencies_list);
  };

  const handleBaseCurrency = (event: any) => {
    let temporary = $currencies.filter(
      (currency: any) => currency.key === event.target.value
    )[0];
    baseCurrency = { currency: temporary.key, value: temporary.value };
    console.log(secondCurrency);

    getCurrency();
  };

  const handleCalculate = (event: any) =>
    (baseCurrency.value = event.target.value);

  const handleSecondCurrency = (event: any) => {
    let temporary = $currencies.filter(
      (currency: any) => currency.key === event.target.value
    )[0];
    secondCurrency = { currency: temporary.key, value: temporary.value };
    console.log(secondCurrency);
  };
</script>

<div>
  {JSON.stringify(baseCurrency)}
  {JSON.stringify(secondCurrency)}
  <br />
  --------
  <br />
  {total}
  {baseCurrency.value * secondCurrency.value}
</div>

<button onclick={getCurrency}>GET</button>

<input type="text" name="baseCurrency" onkeyup={handleCalculate} />
<select bind:value={baseCurrency.currency} onchange={handleBaseCurrency}>
  {#each $currencies as currency}
    <option value={currency.key}>
      {currency.key}:{currency.value}
    </option>
  {/each}
</select>

<input
  type="text"
  name="baseCurrency"
  defaultValue={total}
  onkeyup={handleCalculate}
/>
<select bind:value={secondCurrency.currency} onchange={handleSecondCurrency}>
  {#each $currencies as currency}
    <option value={currency.key}>
      {currency.key}:{currency.value}
    </option>
  {/each}
</select>
