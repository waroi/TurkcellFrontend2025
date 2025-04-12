<script lang="ts">
	const appTitle = 'Döviz Kurları';
</script>

<nav>
	<div class="container">
		<h1>{appTitle}</h1>
		<div class="nav-links">
			<a href="/">Ana Sayfa</a>
			<a href="/exchange">Dönüştür</a>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: #2c3e50;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	nav h1 {
		margin: 0;
		font-size: 1.8rem;
		font-weight: 600;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
	}

	.nav-links a {
		color: #fff;
		text-decoration: none;
		padding: 0.5rem 0;
		position: relative;
		font-weight: 500;
	}

	.nav-links a:hover {
		color: #3498db;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #3498db;
		transition: width 0.3s ease;
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}

		.nav-links {
			margin-top: 1rem;
			width: 100%;
			justify-content: space-between;
		}
	}
</style>
