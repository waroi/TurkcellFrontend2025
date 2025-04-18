import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coin } from "@/types/coin";

interface SellStepOneData {
  selectedCoin: Coin | null;
  payAmount: string;
}

interface SellStepTwoData {
  payAmount: string;
  receiveAmount: string;
  fromCurrency: string;
  toCurrency: string;
}

interface SellStepThreeData {
  accountName: string;
  accountNumber: string;
  address: string;
  swiftCode: string;
  bankAddress: string;
}

interface SellCryptoState {
  stepOne: SellStepOneData;
  stepTwo: SellStepTwoData;
  stepThree: SellStepThreeData;
}

const initialState: SellCryptoState = {
  stepOne: {
    selectedCoin: null,
    payAmount: "",
  },
  stepTwo: {
    payAmount: "",
    receiveAmount: "",
    fromCurrency: "",
    toCurrency: "",
  },
  stepThree: {
    accountName: "",
    accountNumber: "",
    address: "",
    swiftCode: "",
    bankAddress: "",
  },
};

const sellCryptoSlice = createSlice({
  name: "sellCrypto",
  initialState,
  reducers: {
    setSellStepOneData(state, action: PayloadAction<SellStepOneData>) {
      state.stepOne = action.payload;
    },
    setSellStepTwoData(state, action: PayloadAction<SellStepTwoData>) {
      state.stepTwo = action.payload;
    },
    setSellStepThreeData(state, action: PayloadAction<SellStepThreeData>) {
      state.stepThree = action.payload;
    },
    resetSellCrypto() {
      return initialState;
    },
  },
});

export const {
  setSellStepOneData,
  setSellStepTwoData,
  setSellStepThreeData,
  resetSellCrypto,
} = sellCryptoSlice.actions;

export default sellCryptoSlice.reducer;
