<script lang="ts">
  import { amount } from "../../../store/store";

  export let placeholder: string = "";
  export let id: string = "";
</script>

<input
  {id}
  class="form-control form-control-lg"
  type="number"
  bind:value={$amount}
  min="0"
  {placeholder}
/>
