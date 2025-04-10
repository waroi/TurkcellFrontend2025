<script>
	import { goto } from '$app/navigation';

	function goToExchange() {
		goto('/exchange');
	}
</script>

<h2>Hoş geldiniz!</h2>
<p>Dilediğiniz para birimini istediğiniz zaman dönüştürün.</p>

<button on:click={goToExchange}> Hemen Dönüştür </button>
