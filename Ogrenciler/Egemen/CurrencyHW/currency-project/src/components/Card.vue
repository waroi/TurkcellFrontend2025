


<script setup>

const props = defineProps({
    currencyData: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
   <div class="container">
        <div class="currency-card">
            <pre>{{ currencyData }}</pre>
            <h1>Hello</h1>
        </div>
   </div>
 
</template>

<style scoped>


</style>
