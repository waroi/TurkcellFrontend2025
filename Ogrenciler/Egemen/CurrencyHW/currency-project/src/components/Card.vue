<script setup>
import { ref, watch } from 'vue'
import { fetchData } from "../service/dbController.ts";

const currencyData = ref(null)
const amount = ref(1)
const amountType = ref(null)
const exchange = ref(null)
const exchangeRate = ref(null)
const exchangeType = ref(null)
const error = ref(null)

fetchData()
  .then((json) => {
    currencyData.value = json
    console.log(currencyData.value)
    amountType.value = currencyData.value.base
    exchange.value = currencyData.value.data[0].rate
    exchangeRate.value = currencyData.value.data[0].rate
    exchangeType.value = currencyData.value.data[0].code
  })
  .catch((err) => (error.value = err))


function handleExchangeClick(currency) {
  exchange.value = currency.rate
  amount.value = 1
  exchangeRate.value = currency.rate
  exchangeType.value = currency.code
}

function handleAmountClick(currency) {
  amountType.value = currency.code
  amount.value = 1

  fetchData(amountType.value)
    .then((json) => {
      currencyData.value = json
      currencyData.value.data.map((currency) => {
        if (exchangeType == data.code) {
          exchangeRate.value = data.rate
          exchange.value = exchangeRate.value * amount.value
        }
      })
    })
    .catch((err) => (error.value = err))
}

watch(amount, () => {
  console.log("amount ", amount.value, " exchange ", exchange.value)
  exchange.value = exchangeRate.value * amount.value
})
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="currencyData">
    <div class="container">
      <div class="currency-card">
        <div class="left">
          <div class="input-group mb-3">
            <input type="number" class="form-control" aria-label="Currency type dropdown" v-model="amount">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">{{ amountType }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li @click="handleAmountClick(currency)" class="dropdown-item" v-for="currency in currencyData.data"
                :key="currency.code"> {{ currency.name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Currency exchange amount" readonly v-model="exchange">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">{{ exchangeType }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li @click="handleExchangeClick(currency)" class="dropdown-item" v-for="currency in currencyData.data"
                :key="currency.code"> {{ currency.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>

</template>

<style scoped></style>
