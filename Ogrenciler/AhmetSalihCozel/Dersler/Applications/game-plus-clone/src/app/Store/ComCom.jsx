import { create } from "zustand";

const useSideBarStore = create((set) => ({
  isSideClosed: false,
  toggleSideBar: () => {set((state) => ({ isSideClosed: !state.isSideClosed }))},
  setIsSideClosed: (boolean) => {set({ isSideClosed: boolean })},
}));

const useTwinRadioStore = create((set) => ({
  radioValue: "Süreli",
  toggleRadioValue: () => {set((state) => ({ radioValue: state.radioValue === "Süreli" ? "Süresiz": "Süreli" }))},
}));

const useCardOneRadioStore = create((set) => ({
  radioValue: 1000,
  toggleRadioValue: (index) => {set({ radioValue: index})},
}));

const useCardTwoRadioStore = create((set) => ({
  radioValue: 1000,
  toggleRadioValue: (index) => {set({ radioValue: index})},
}));

export {useSideBarStore, useTwinRadioStore, useCardOneRadioStore, useCardTwoRadioStore};
