<script setup>

import { fetchData } from "../service/dbController.ts";
import Card from "./Card.vue"
const props = defineProps({
    currencyData: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
     


  <header>

    <h1>Currency App</h1>
  
  </header>

  <main>

    <Card :currencyData = "currencyData" />
   
  </main>




 
</template>

<style scoped>


</style>
