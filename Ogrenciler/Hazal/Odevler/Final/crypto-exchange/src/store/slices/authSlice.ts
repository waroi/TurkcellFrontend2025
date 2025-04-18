import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: null | {
    uid: string
    email: string | null
    displayName: string | null
  }
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload
      state.loading = false
      state.error = null
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null
    },
    registerStart(state) {
      state.loading = true
      state.error = null
    },
    registerSuccess(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload
      state.loading = false
      state.error = null
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
} = authSlice.actions

export default authSlice.reducer