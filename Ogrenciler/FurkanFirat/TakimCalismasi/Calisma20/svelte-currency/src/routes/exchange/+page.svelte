<script lang="ts">
	import { fromStore } from 'svelte/store';

	let amount: number = 1;
	let from: string = 'USD';
	let to: string = 'EUR';
	let result: number | null = null;
	let currencies = $state({});

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
				`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${from},${to}`
			);
			const data: CurrencyAPIResponse = await res.json();

			const fromRate = data.data[from].value;
			const toRate = data.data[to].value;
			console.log(fromRate);
			console.log(toRate);

			// USD -> EUR gibi dönüşüm: amount * (toRate / fromRate)
			result = amount * (toRate / fromRate);
			console.log(result);
		} catch (error) {
			console.error('Döviz API hatası:', error);
		}
	}
	async function getCurrencies(): Promise<void> {
		try {
			const res = await fetch(`https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`);
			const data = await res.json();
			currencies = data.data;
			console.log(currencies);
		} catch (error) {
			console.error('Döviz API hatası:', error);
		}
	}

	$effect(() => {
		getCurrencies();
	});

	function swapCurrency(): void {
		const x = from;
		from = to;
		to = x;
		convertCurrency();
	}
</script>

<h2>Döviz Çevirici</h2>

<div class="exchance-box">
	<input type="number" bind:value={amount} min="0" />
	<select bind:value={from}>
		{#each Object.entries(currencies) as [code, currency]}
			<option value={code}>{code} - {currency.name}</option>
		{/each}
	</select>
	<button onclick={swapCurrency}> ↔ </button>
	<select bind:value={to}>
		{#each Object.entries(currencies) as [code, currency]}
			<option value={code}>{code} - {currency.name}</option>
		{/each}
	</select>
	<button class="btn" onclick={convertCurrency}>Çevir</button>
</div>

<p class="result">{amount} {from} = <strong>{result}</strong> {to}</p>

<!-- TASARIM GÜNCELLEMESİ
SELECT - OPTION KISMINI GÜNCELLEYELİM -->
