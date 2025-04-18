import React from "react";
import Image from "next/image";
import { AmountInputProps } from "@/types/trades";
import styles from "./AmountInput.module.css";

const AmountInput = ({
  label,
  value,
  onChange,
  onCurrencyChange,
  currencyIcon,
  currencySymbol,
  options,
  disabled,
}: AmountInputProps) => {
  return (
    <div className="mb-3">
      <label className={`${styles.label} mb-1`}>{label}</label>
      <div className="border rounded-4 d-flex justify-content-between align-items-center px-3 py-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`${styles.input} border-0 form-control shadow-none w-50`}
          disabled={disabled}
        />
        <div className="d-flex align-items-center gap-1">
          {currencyIcon && (
            <Image src={currencyIcon} width={20} height={20} alt="icon" />
          )}
          {options ? (
            <select
              className={`${styles.options} form-select border-0 bg-transparent p-0 shadow-none`}
              value={
                options.find((opt) => opt.label === currencySymbol)?.value || ""
              }
              onChange={(e) => onCurrencyChange?.(e.target.value)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <span className="fw-medium">{currencySymbol}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmountInput;
