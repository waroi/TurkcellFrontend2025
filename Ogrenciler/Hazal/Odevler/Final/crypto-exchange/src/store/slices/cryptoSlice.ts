import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {CryptoCurrency} from './../../types/crypto'

interface CryptoState {
  coins: CryptoCurrency[]
  marketData: any
  loading: boolean
  error: string | null
  selectedCoin: CryptoCurrency | null
  watchlist: string[]
}

const initialState: CryptoState = {
  coins: [],
  marketData: null,
  loading: false,
  error: null,
  selectedCoin: null,
  watchlist: [],
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fetchCoinsStart(state) {
      state.loading = true
      state.error = null
    },
    fetchCoinsSuccess(state, action: PayloadAction<CryptoCurrency[]>) {
      state.coins = action.payload
      state.loading = false
      state.error = null
    },
    fetchCoinsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    selectCoin(state, action: PayloadAction<CryptoCurrency>) {
      state.selectedCoin = action.payload
    },
    addToWatchlist(state, action: PayloadAction<string>) {
      if (!state.watchlist.includes(action.payload)) {
        state.watchlist.push(action.payload)
      }
    },
    removeFromWatchlist(state, action: PayloadAction<string>) {
      state.watchlist = state.watchlist.filter(id => id !== action.payload)
    },
  },
})

export const {
  fetchCoinsStart,
  fetchCoinsSuccess,
  fetchCoinsFailure,
  selectCoin,
  addToWatchlist,
  removeFromWatchlist,
} = cryptoSlice.actions

export default cryptoSlice.reducer