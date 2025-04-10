import { writable } from "svelte/store";

type currency = {
  key: string;
  value: number;
};

export const currencies: any = writable(
  [ {key: 12431231, value: 3256235 }],



  () => () => console.log("no more subscribers")
);