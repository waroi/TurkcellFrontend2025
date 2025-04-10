import { writable } from "svelte/store";
import type { Currency } from "../types/type";

export const currencies = writable<Currency[]>([
  { key: "USD", value: 1 },
  { key: "EUR", value: 0 },
  { key: "IDR", value: 0 },
]);

export const getDefaultCurrencies = (): Currency[] => [
  { key: "USD", value: 1 },
  { key: "EUR", value: 0 },
  { key: "IDR", value: 0 },
];
