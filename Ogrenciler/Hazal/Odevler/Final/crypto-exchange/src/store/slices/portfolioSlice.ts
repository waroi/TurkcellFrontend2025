import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PortfolioItem } from './../../types/portfolio'


interface PortfolioState {
  items: PortfolioItem[]
  loading: boolean
  error: string | null
  balance: number
}

const initialState: PortfolioState = {
  items: [],
  loading: false,
  error: null,
  balance: 10000, // Starting balance
}

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    fetchPortfolioStart(state) {
      state.loading = true
      state.error = null
    },
    fetchPortfolioSuccess(state, action: PayloadAction<PortfolioItem[]>) {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    fetchPortfolioFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    buyCrypto(state, action: PayloadAction<{ coinId: string; amount: number; price: number }>) {
      const { coinId, amount, price } = action.payload
      const totalCost = amount * price
      
      if (state.balance >= totalCost) {
        const existingItem = state.items.find(item => item.coinId === coinId)
        
        if (existingItem) {
          existingItem.amount += amount
          existingItem.totalInvested += totalCost
        } else {
          state.items.push({
            coinId,
            amount,
            totalInvested: totalCost,
            currentValue: totalCost,
          })
        }
        
        state.balance -= totalCost
      }
    },
    sellCrypto(state, action: PayloadAction<{ coinId: string; amount: number; price: number }>) {
      const { coinId, amount, price } = action.payload
      const existingItem = state.items.find(item => item.coinId === coinId)
      
      if (existingItem && existingItem.amount >= amount) {
        const totalValue = amount * price
        existingItem.amount -= amount
        existingItem.totalInvested -= (existingItem.totalInvested / existingItem.amount) * amount
        state.balance += totalValue
        
        if (existingItem.amount === 0) {
          state.items = state.items.filter(item => item.coinId !== coinId)
        }
      }
    },
    updatePortfolioValue(state, action: PayloadAction<{ coinId: string; currentPrice: number }[]>) {
      action.payload.forEach(({ coinId, currentPrice }) => {
        const item = state.items.find(item => item.coinId === coinId)
        if (item) {
          item.currentValue = item.amount * currentPrice
        }
      })
    },
  },
})

export const {
  fetchPortfolioStart,
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
  buyCrypto,
  sellCrypto,
  updatePortfolioValue,
} = portfolioSlice.actions

export default portfolioSlice.reducer