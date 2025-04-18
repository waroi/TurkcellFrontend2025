export interface OrderLevel {
  price: string;
  amount: string;
}

export interface OrderBooksTable {
  type: "ask" | "bid";
  data: { price: string; amount: string }[];
}
