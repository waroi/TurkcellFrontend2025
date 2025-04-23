import * as yup from "yup";

export const buySchema = yup.object({
    amount: yup.number()
      .required("Amount is required")
      .positive("Amount must be a positive number")
      .min(0.01, "Amount must be at least 0.01 BTC"),
  });