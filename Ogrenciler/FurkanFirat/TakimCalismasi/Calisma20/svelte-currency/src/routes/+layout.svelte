<script lang="ts">
	import '../app.css';
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';
</script>

<div class="app">
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		padding: 2rem 0;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}
</style>
