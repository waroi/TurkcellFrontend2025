<script lang="ts">
  import { onMount } from "svelte";
  import { currencies, amount } from "../../../store/store";
  import CurrencyConverterForm from "../../components/organisms/CurrencyConverterForm.svelte";
  import {
    fetchCurrencyRates,
    parseToCurrencyList,
  } from "../../../services/services";
  import type { Currency, CurrencyRates } from "../../../types/type";

  let baseCurrency = { currency: "IDR", value: 100 };
  let secondCurrency = { currency: "USD", value: 0 };
  let isLoading = false;
  let errorMessage = "";
  let currencyRates: CurrencyRates = {};

  $: total = $amount * secondCurrency.value;
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
      const data = await fetchCurrencyRates(baseCurrency.currency);
      currencyRates = data;

      if (secondCurrency.currency in currencyRates) {
        secondCurrency.value = currencyRates[secondCurrency.currency];
      }

      currencies.set(parseToCurrencyList(data));
    } catch (error) {
      errorMessage = "Error fetching currency data. Please try again.";
      console.error(error);
    } finally {
      isLoading = false;
    }
  };

  const handleBaseCurrency = (event: Event) => {
    const { value } = event.target as HTMLSelectElement;
    if (currencyRates[baseCurrency.currency]) {
      baseCurrency = {
        currency: value,
        value: currencyRates[value],
      };
    }
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
  <div class="card-header bg-success text-white">
    <h4 class="mb-0">Döviz Kuru Dönüştürücü</h4>
  </div>
  <div class="card-body">
    <CurrencyConverterForm
      {baseCurrency}
      {secondCurrency}
      {isLoading}
      {errorMessage}
      {formattedTotal}
      {getCurrency}
      {handleBaseCurrency}
      {handleSecondCurrency}
      {swapCurrencies}
    />
  </div>
</div>
