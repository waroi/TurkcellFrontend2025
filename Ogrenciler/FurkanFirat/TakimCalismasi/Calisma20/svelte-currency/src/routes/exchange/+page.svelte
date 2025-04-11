<script lang="ts">
	let state = $state({
		amount: 0 as number,
		from: 'USD' as string,
		to: 'EUR' as string,
		result: null as number | null,
		currencies: {} as Record<string, Currency>,
		isLoading1: false as boolean,
		error1: null as string | null,
		isLoading2: false as boolean,
		error2: null as string | null
	});

	interface Currency {
		name: string;
		code: string;
		value: number;
		symbol?: string;
	}

	interface CurrencyAPIResponse {
		meta: {
			last_updated_at: string;
		};
		data: {
			[key: string]: Currency;
		};
	}

	const API_KEY = 'cur_live_mBMDxQWv6nUrrYL2bBHqbTg8WEagxzE0Qw3uN4xX';

	async function getCurrencies(): Promise<void> {
		try {
			state.isLoading1 = true;
			const res = await fetch(`https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`);
			const data = await res.json();
			state.currencies = data.data;
			console.log(state.currencies);
		} catch (error) {
			console.error('Döviz API hatası:', error);
			state.error1 = 'Döviz API hatası';
		} finally {
			state.isLoading1 = false;
		}
	}

	async function convertCurrency(): Promise<void> {
		try {
			state.isLoading2 = true;
			const res = await fetch(
				`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${state.from},${state.to}`
			);
			const data: CurrencyAPIResponse = await res.json();

			const fromRate = data.data[state.from].value;
			const toRate = data.data[state.to].value;
			console.log(fromRate);
			console.log(toRate);

			state.result = state.amount * (toRate / fromRate);
			console.log('result', state.result);
		} catch (error) {
			console.error('Döviz API hatası:', error);
			state.error2 = 'Döviz çevirme API hatası';
		} finally {
			state.isLoading2 = false;
		}
	}

	function swapCurrency(): void {
		const x = state.from;
		state.from = state.to;
		state.to = x;
		if (state.amount > 0) {
			convertCurrency();
		}
	}

	$effect(() => {
		getCurrencies();
	});
</script>

<div class="exchange-container">
	<h1 class="heading">Dilediğin zaman, dilediğin yerde swap yap.</h1>

	<div class="exchange-card">
		<div class="currency-input-section">
			<div class="label">İşlem</div>
			<div class="input-row">
				<input
					type="number"
					placeholder="0"
					bind:value={state.amount}
					min="0"
					class="amount-input"
				/>
				<div class="selects-container">
					<select bind:value={state.from} class="currency-select-btn">
						{#each Object.entries(state.currencies) as [code]}
							<option value={code}>{code}</option>
						{/each}
					</select>

					<button class="swap-button" onclick={swapCurrency}>
						<span class="swap-icon">↔</span>
					</button>

					<select bind:value={state.to} class="currency-select-btn">
						{#each Object.entries(state.currencies) as [code]}
							<option value={code}>{code}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<button
			class="exchange-button"
			onclick={convertCurrency}
			disabled={!state.amount || state.isLoading2}
		>
			Dönüştür
		</button>

		{#if state.result !== null}
			<div class="currency-input-section result-section">
				<div class="label">Sonuç</div>
				<div class="result-row">
					<p class="result">
						{state.amount}
						{state.from} = <strong>{state.result?.toFixed(4)}</strong>
						{state.to}
					</p>
				</div>
			</div>
		{:else}
			<div class="currency-input-section result-section empty-result">
				<div class="label">Sonuç</div>
				<div class="result-row">
					<p class="result-placeholder">Dönüştürmek için yukarıdaki butona tıklayın</p>
				</div>
			</div>
		{/if}
	</div>

	<p class="info-text">En büyük zincir içi pazar yeri.</p>
</div>

<style>
	.exchange-container {
		margin: 0 auto;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.heading {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.exchange-card {
		width: 100%;
		background-color: rgba(28, 28, 28, 0.5);
		border-radius: 1rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.currency-input-section {
		background-color: #1f1f1f;
		border-radius: 0.75rem;
		padding: 1rem;
	}

	.label {
		font-size: 0.875rem;
		color: #888;
		margin-bottom: 0.5rem;
	}

	.input-row {
		display: flex;
		gap: 1rem;
	}

	.selects-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		position: relative;
	}

	.amount-input {
		background: transparent;
		border: none;
		font-size: 1.5rem;
		color: white;
		padding: 0.5rem 0;
		outline: none;
	}

	.currency-select-btn {
		flex: 1;
		background-color: #333;
		color: white;
		border: none;
		border-radius: 2rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s;
		text-align: center;
	}

	.currency-select-btn:hover {
		background-color: #444;
	}

	.swap-button {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: #333;
		border: none;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.swap-button:hover {
		background-color: #444;
	}

	.swap-icon {
		font-size: 1.2rem;
	}

	.exchange-button {
		width: 100%;
		padding: 1rem;
		background-color: #e83e8c;
		border: none;
		border-radius: 0.75rem;
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
		margin-top: 0.5rem;
	}

	.exchange-button:hover {
		background-color: #d33a7e;
	}

	.exchange-button:disabled {
		background-color: #555;
		cursor: not-allowed;
	}

	.result-section {
		margin-top: 0.5rem;
	}

	.result-row {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 0;
	}

	.result {
		font-size: 1.1rem;
		text-align: center;
		margin: 0;
		text-align: center;
		color: var(--color-theme-2);
	}

	.result-placeholder {
		font-size: 1rem;
		color: #888;
		text-align: center;
		margin: 0;
	}

	.info-text {
		text-align: center;
		color: #888;
		font-size: 0.9rem;
		max-width: 400px;
		line-height: 1.5;
	}

	@media (max-width: 600px) {
		.heading {
			font-size: 1.5rem;
		}

		.amount-input {
			font-size: 1.25rem;
		}

		.currency-select-btn {
			padding: 0.4rem 0.75rem;
			font-size: 0.9rem;
		}

		.result {
			font-size: 1rem;
		}
		.input-row {
			flex-direction: column;
		}
	}

	@media (min-width: 601px) {
		.input-row {
			flex-direction: row;
			align-items: center;
		}

		.amount-input {
			width: auto;
			flex: 1;
		}

		.selects-container {
			flex: 1;
		}
	}
</style>
