<script lang="ts">
  //   export let text: string;
  //   export let onClick: () => any;
  //   export let variant: string = "outline-secondary";
  let { children = null, text, variant, onClick, disabled = false } = $props();
</script>

<button type="button" {disabled} class={`btn btn-${variant}`} onclick={onClick}>
  {text}
  {@render children?.()}
</button>
