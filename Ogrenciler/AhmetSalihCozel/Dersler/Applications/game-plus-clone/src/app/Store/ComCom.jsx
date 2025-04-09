import { create } from "zustand";

const useSideBarStore = create((set) => ({
  isSideClosed: false,
  toggleSideBar: () => {set((state) => ({ isSideClosed: !state.isSideClosed }))},
  setIsSideClosed: (boolean) => {set({ isSideClosed: boolean })},
}));

const useTwinRadioOneStore = create((set) => ({
  twinRadioOneValue: "Süresiz",
  toggleTwinRadioOneValue: () => {set((state) => ({ twinRadioOneValue: state.twinRadioOneValue === "Süreli" ? "Süresiz": "Süreli" }))},
}));

const useTwinRadioTwoStore = create((set) => ({
  twinRadioTwoValue: "Süresiz",
  toggleTwinRadioTwoValue: () => {set((state) => ({ twinRadioTwoValue: state.twinRadioTwoValue === "Süreli" ? "Süresiz": "Süreli" }))},
}));

const useCardOneRadioStore = create((set) => ({
  radioValue: 1000,
  toggleRadioValue: (index) => {set({ radioValue: index})},
}));

const useCardTwoRadioStore = create((set) => ({
  radioValue: 1000,
  toggleRadioValue: (index) => {set({ radioValue: index})},
}));

export {useSideBarStore, useTwinRadioOneStore, useTwinRadioTwoStore, useCardOneRadioStore, useCardTwoRadioStore};
