<script>
	let props = $props();
</script>

<div class="currency-card">
	<div class="currency-name">{props.name}</div>
	<div class="currency-value">{props.value}</div>
	<div class="currency-change {props.trend}">{props.change}</div>
</div>

<style>
	.currency-card {
		background: white;
		border-radius: 10px;
		padding: 1.2rem;
		min-width: 180px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
		border: 1px solid #f0f0f0;
	}

	.currency-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
	}

	.currency-name {
		font-weight: 600;
		color: #64748b;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.currency-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: #2c3e50;
		margin-bottom: 0.5rem;
	}

	.currency-change {
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 20px;
		padding: 0.2rem 0.6rem;
		display: inline-block;
	}

	.currency-change.up {
		background-color: rgba(16, 185, 129, 0.1);
		color: #10b981;
	}

	.currency-change.down {
		background-color: rgba(239, 68, 68, 0.1);
		color: #ef4444;
	}

	@media (max-width: 768px) {
		.currency-card {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
