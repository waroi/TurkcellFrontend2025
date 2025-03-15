"use client";

import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
import { ToastContainer } from "react-toastify";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" autoClose={500} />
    </>
  );
}
