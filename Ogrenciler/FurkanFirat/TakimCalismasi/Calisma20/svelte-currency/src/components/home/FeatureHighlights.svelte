<script>
	import { fly } from 'svelte/transition';
	import FeatureItem from './FeatureItem.svelte';

	const features = [
		{ icon: '💱', text: '150+ Para Birimi' },
		{ icon: '⚡', text: 'Anlık Güncellemeler' },
		{ icon: '📊', text: 'Detaylı Grafikler' }
	];
</script>

<div class="features" in:fly={{ y: 20, duration: 800, delay: 800 }}>
	{#each features as feature}
		<FeatureItem icon={feature.icon} text={feature.text} />
	{/each}
</div>

<style>
	.features {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.features {
			gap: 1.5rem;
		}
	}
</style>
