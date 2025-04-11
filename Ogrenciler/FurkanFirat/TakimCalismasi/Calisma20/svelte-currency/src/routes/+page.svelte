<script>
	import { goto } from '$app/navigation';

	function goToExchange() {
		goto('/exchange');
	}
</script>

<h1>Hoş geldiniz!</h1>
<p>Dilediğiniz para birimini istediğiniz zaman dönüştürün.</p>

<button class="btn" on:click={goToExchange}> Hemen Dönüştür </button>
