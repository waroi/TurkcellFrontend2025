<script lang="ts">
  import Card from "./lib/Card.svelte";

  function getPairConversion(from: string, to: string): Promise<number> {
    return fetch(
      `https://v6.exchangerate-api.com/v6/2e15a4f6b9ac3c8ac8b8829a/pair/${from}/${to}`
    )
      .then((response: Response) => response.json())
      .then((response: { conversion_rate: number }) =>
        parseFloat(response.conversion_rate.toFixed(2))
      );
  }
</script>

<main>
  <h1>Currency Exchange Calculator</h1>
  <Card {getPairConversion} />
</main>
