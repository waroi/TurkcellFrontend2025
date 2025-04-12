<script>
	import { fade } from 'svelte/transition';
	import CurrencyCard from './CurrencyCard.svelte';

	const currencies = [
		{ name: 'USD/TRY', value: '32.56₺', change: '+0.2%', trend: 'up' },
		{ name: 'EUR/TRY', value: '35.17₺', change: '+0.4%', trend: 'up' },
		{ name: 'GBP/TRY', value: '41.23₺', change: '-0.1%', trend: 'down' }
	];
</script>

<div class="currency-cards" in:fade={{ duration: 800, delay: 1000 }}>
	{#each currencies as currency}
		<CurrencyCard
			name={currency.name}
			value={currency.value}
			change={currency.change}
			trend={currency.trend}
		/>
	{/each}
</div>

<style>
	.currency-cards {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1rem;
		width: 100%;
	}

	@media (max-width: 768px) {
		.currency-cards {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
