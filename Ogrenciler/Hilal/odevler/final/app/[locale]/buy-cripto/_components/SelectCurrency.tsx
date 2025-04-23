"use client";

import BuyForm from "@/app/_components/ui/Forms/BuyForm";

const SelectCurrency = () => {
  return (
    <div className="d-flex flex-column gap-4 p-4 bg-surface rounded ">
      <h4 className="fw-bold">Select Crypto</h4>
      <BuyForm side="buy" />
    </div>
  );
};

export default SelectCurrency;
