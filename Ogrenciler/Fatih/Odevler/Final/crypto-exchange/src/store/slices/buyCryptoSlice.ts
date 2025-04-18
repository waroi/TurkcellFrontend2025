import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuyCryptoState {
  stepOne: {
    payAmount: string;
    receiveAmount: string;
    fromCurrency: string;
    toCurrency: string;
  };
  stepTwo: {
    accountName: string;
    accountNumber: string;
    address: string;
    swiftCode: string;
    bankAddress: string;
  };
}

const initialState: BuyCryptoState = {
  stepOne: {
    payAmount: "",
    receiveAmount: "",
    fromCurrency: "usd",
    toCurrency: "bitcoin",
  },
  stepTwo: {
    accountName: "",
    accountNumber: "",
    address: "",
    swiftCode: "",
    bankAddress: "",
  },
};

const buyCryptoSlice = createSlice({
  name: "buyCrypto",
  initialState,
  reducers: {
    setStepOneData(state, action: PayloadAction<BuyCryptoState["stepOne"]>) {
      state.stepOne = action.payload;
    },
    setStepTwoData(state, action: PayloadAction<BuyCryptoState["stepTwo"]>) {
      state.stepTwo = action.payload;
    },
    resetBuyCrypto(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setStepOneData, setStepTwoData, resetBuyCrypto } =
  buyCryptoSlice.actions;

export default buyCryptoSlice.reducer;
