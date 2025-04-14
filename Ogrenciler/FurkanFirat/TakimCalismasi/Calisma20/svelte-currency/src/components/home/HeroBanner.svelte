<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';
	import ActionButton from './ActionButton.svelte';

	function goToExchange(): void {
		goto('/exchange');
	}
</script>

<div class="hero-content" in:fade={{ duration: 800, delay: 200 }}>
	<h1 in:fly={{ y: 20, duration: 800, delay: 400 }}>Döviz Dünyasına Hoş Geldiniz</h1>

	<p in:fly={{ y: 20, duration: 800, delay: 600 }}>
		Anlık güncel kurlar ile dilediğiniz para birimini istediğiniz zaman dönüştürün. Hızlı, güvenilir
		ve kullanımı kolay döviz çevirici ile finansal işlemlerinizi kolaylaştırın.
	</p>

	<ActionButton label="Hemen Dönüştür" onClick={goToExchange} delayAnimation={800} />
</div>

<style>
	.hero-content {
		max-width: 800px;
		margin-bottom: 3rem;
		text-align: center;
	}

	h1 {
		font-size: 2.8rem;
		color: #2c3e50;
		margin-bottom: 1.5rem;
		font-weight: 700;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.6;
		color: #5d6c7b;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.2rem;
		}

		p {
			font-size: 1.1rem;
		}
	}
</style>
