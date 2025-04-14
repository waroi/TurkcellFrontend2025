<script lang="ts">
  export let value: string;
  export let onChange: (event: Event) => void;
  export let options: { key: string }[];
</script>

<select
  id="baseCurrencySelect"
  class="form-select"
  bind:value
  on:change={onChange}
>
  {#each options as option}
    <option value={option.key}>
      {option.key}
    </option>
  {/each}
</select>
