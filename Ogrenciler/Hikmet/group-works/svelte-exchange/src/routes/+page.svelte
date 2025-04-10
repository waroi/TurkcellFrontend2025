<script>
	import { apiData, currencyRates } from "$lib/store";
	import { onMount } from "svelte";

	onMount(async () => {
		fetch(
			"https://v6.exchangerate-api.com/v6/2698119567804d617518d360/latest/USD"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				apiData.set(data);
			})
			.catch((error) => {
				console.log(error);
				return {};
			});
	});
</script>

<main>
	<h1>Döviz Kurları</h1>

	{#if $apiData.base_code}
		<div class="info">
			<p>Baz Para Birimi: {$apiData.base_code}</p>
			<p>Son Güncelleme: {$apiData.time_last_update_utc}</p>
			<p>Sonraki Güncelleme: {$apiData.time_next_update_utc}</p>
		</div>
	{/if}

	<table>
		<thead>
			<tr>
				<th>Para Birimi</th>
				<th>Değer</th>
			</tr>
		</thead>
		<tbody>
			{#each $currencyRates as { currency, rate }}
				<tr>
					<td>{currency}</td>
					<td>{rate}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	main {
		max-width: 900px;
		margin: 0 auto;
		padding: 20px;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	.info {
		background: #f5f5f5;
		padding: 15px;
		border-radius: 5px;
		margin-bottom: 20px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	th {
		background-color: #f2f2f2;
		font-weight: bold;
	}

	tr:hover {
		background-color: #f5f5f5;
	}
</style>
