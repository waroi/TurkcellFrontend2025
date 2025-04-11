<script lang="ts">
	import { fromStore } from 'svelte/store';

	// let amount: number = 1;
	// let from: string = $state('USD');
	// let to: string = $state('EUR');
	// let result = $state<number | null>(null);
	// let currencies = $state({});
	let state = $state({
		amount: 1,
		from: 'USD',
		to: 'EUR',
		result: null as number | null,
		currencies: {} as Record<string, Currency>
	});

	interface Currency {
		code: string;
		value: number;
	}

	interface CurrencyAPIResponse {
		meta: {
			last_updated_at: string;
		};
		data: {
			[key: string]: Currency;
		};
	}

	const API_KEY = 'cur_live_7mxy4JPkTDZwwmELOVkV15UvwQWEhOmJic9pZsOl';

	async function convertCurrency(): Promise<void> {
		try {
			const res = await fetch(
				`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${state.from},${state.to}`
			);
			const data: CurrencyAPIResponse = await res.json();

			const fromRate = data.data[state.from].value;
			const toRate = data.data[state.to].value;
			console.log(fromRate);
			console.log(toRate);

			// USD -> EUR gibi dönüşüm: amount * (toRate / fromRate)
			state.result = state.amount * (toRate / fromRate);
			console.log('result', state.result);
		} catch (error) {
			console.error('Döviz API hatası:', error);
		}
	}
	async function getCurrencies(): Promise<void> {
		try {
			const res = await fetch(`https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`);
			const data = await res.json();
			state.currencies = data.data;
			console.log(state.currencies);
		} catch (error) {
			console.error('Döviz API hatası:', error);
		}
	}

	$effect(() => {
		getCurrencies();
	});

	function swapCurrency(): void {
		const x = state.from;
		state.from = state.to;
		state.to = x;
		convertCurrency();
	}
</script>

<h2>Döviz Çevirici</h2>

<div class="exchance-box">
	<input type="number" bind:value={state.amount} min="0" />
	<select bind:value={state.from}>
		{#each Object.entries(state.currencies) as [code, currency]}
			<option value={code}>{code} - {currency.name}</option>
		{/each}
	</select>
	<button onclick={swapCurrency}> ↔ </button>
	<select bind:value={state.to}>
		{#each Object.entries(state.currencies) as [code, currency]}
			<option value={code}>{code} - {currency.name}</option>
		{/each}
	</select>
	<button class="btn" onclick={convertCurrency}>Çevir</button>
</div>

<p class="result">{state.amount} {state.from} = <strong>{state.result}</strong> {state.to}</p>

<!-- TASARIM GÜNCELLEMESİ
SELECT - OPTION KISMINI GÜNCELLEYELİM -->
