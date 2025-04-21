"use client";

import { login } from "@/services/firebase";
import { useEffect } from "react";
import useCryptoStore from "@/store/cryptoStore";

export default function AutoLogin() {
  const cryptoStore = useCryptoStore();

  useEffect(() => {
    if (localStorage.getItem("unsafeemail")) {
      login(
        localStorage.getItem("unsafeemail"),
        localStorage.getItem("unsafepw")
      )
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          cryptoStore.set({ user });
        })
        .catch(() => {});
    }
  }, []);

  return null;
}
