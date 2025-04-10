<script lang="ts">
	let amount: number = 1;
	let from: string = 'USD';
	let to: string = 'EUR';
	let result: number | null = null;

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

			// USD -> EUR gibi dönüşüm: amount * (toRate / fromRate)
			result = amount * (toRate / fromRate);
		} catch (error) {
			console.error('Döviz API hatası:', error);
		}
	}
</script>

<h2>Döviz Çevirici</h2>

<div>
	<input type="number" bind:value={amount} min="0" />
	<select bind:value={from}>
		<option value="USD">USD</option>
		<option value="EUR">EUR</option>
		<option value="CAD">CAD</option>
		<option value="TRY">TRY</option>
	</select>
	<span>→</span>
	<select bind:value={to}>
		<option value="USD">USD</option>
		<option value="EUR">EUR</option>
		<option value="CAD">CAD</option>
		<option value="TRY">TRY</option>
	</select>
	<button on:click={convertCurrency}>Çevir</button>
</div>

{#if result !== null}
	<p>{amount} {from} = <strong>{result.toFixed(2)}</strong> {to}</p>
{/if}

<!-- TASARIM GÜNCELLEMESİ
SELECT - OPTION KISMINI GÜNCELLEYELİM -->
