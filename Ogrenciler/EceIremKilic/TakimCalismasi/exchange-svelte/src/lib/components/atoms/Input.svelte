<script lang="ts">
  export let amount: number;
  export let placeholder: string = "";
</script>

<input
  id="amountInput"
  class="form-control form-control-lg"
  type="number"
  bind:value={amount}
  min="0"
  {placeholder}
/>
