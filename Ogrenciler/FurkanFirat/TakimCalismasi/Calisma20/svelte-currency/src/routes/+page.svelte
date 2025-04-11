<script>
	import HeroBanner from '../components/home/HeroBanner.svelte';
	import FeatureHighlights from '../components/home/FeatureHighlights.svelte';
	import CurrencyCards from '../components/home/CurrencyCards.svelte';
</script>

<section class="home-container">
	<HeroBanner />
	<FeatureHighlights />
	<CurrencyCards />
</section>

<style>
	.home-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3rem 1rem;
		max-width: 90rem;
		margin: 0 auto;
	}
</style>
