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
        if (exchangeType.value === currency.code) {
          exchangeRate.value = currency.rate
          exchange.value = exchangeRate.value * amount.value
        }
      })
    })
    .catch((err) => (error.value = err))
}

watch(amount, () => {
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
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">{{ amountType }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li @click="handleAmountClick(currency)" class="dropdown-item" v-for="currency in currencyData.data"
                :key="currency.code"> <img
                  :src="`https://flagcdn.com/24x18/${currency.code.slice(0, 2).toLowerCase()}.png`" width="16"
                  height="12" :alt="currency.name"> {{ currency.name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Currency exchange amount" readonly v-model="exchange">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">{{ exchangeType }}</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li @click="handleExchangeClick(currency)" class="dropdown-item" v-for="currency in currencyData.data"
                :key="currency.code"><img
                  :src="`https://flagcdn.com/24x18/${currency.code.slice(0, 2).toLowerCase()}.png`" width="16"
                  height="12" :alt="currency.name"> {{ currency.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>

</template>

<style scoped>
.form-control {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fcfcfc;
  font-weight: 600;
  font-size: 1.2rem;
}

.dropdown-menu {
  max-height: 300px;
  overflow-y: scroll;
}
</style>
