<script lang="ts">
	const appTitle = 'Döviz Kurları';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-content">
			<div class="footer-logo">
				<h3>{appTitle}</h3>
				<p>Güncel döviz kurları ve finansal bilgiler</p>
			</div>
			<div class="footer-links">
				<h4>Hızlı Erişim</h4>
				<a href="/">Ana Sayfa</a>
				<a href="/exchange">Dönüştür</a>
			</div>
			<div class="footer-contact">
				<h4>İletişim</h4>
				<p>info@dovizapp.com</p>
				<p>+90 212 123 45 67</p>
			</div>
		</div>
		<div class="copyright">
			<p>&copy; {currentYear} Döviz Uygulaması. Tüm hakları saklıdır.</p>
		</div>
	</div>
</footer>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	footer {
		background-color: #2c3e50;
		color: #ecf0f1;
		padding: 2rem 0 1rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.footer-logo h3 {
		margin: 0 0 0.5rem;
		font-size: 1.5rem;
	}

	.footer-logo p {
		color: #bdc3c7;
		margin: 0;
	}

	.footer-links {
		display: flex;
		flex-direction: column;
	}

	.footer-links h4,
	.footer-contact h4 {
		margin: 0 0 1rem;
		font-size: 1.1rem;
	}

	.footer-links a {
		color: #bdc3c7;
		text-decoration: none;
		margin-bottom: 0.5rem;
		transition: color 0.3s;
	}

	.footer-links a:hover {
		color: #3498db;
	}

	.footer-contact p {
		margin: 0 0 0.5rem;
		color: #bdc3c7;
	}

	.copyright {
		border-top: 1px solid #34495e;
		padding-top: 1rem;
		text-align: center;
		color: #bdc3c7;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
		}
	}
</style>
