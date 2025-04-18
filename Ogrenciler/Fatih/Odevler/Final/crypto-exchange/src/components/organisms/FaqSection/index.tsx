import React from "react";
import FaqItem from "../../molecules/FaqItem";

const FaqSection = () => {
  return (
    <div className="container py-5 w-50">
      <h2 className="fw-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-muted text-center mb-4">Learn how to get started</p>

      <div className="border-top">
        <FaqItem
          question="What is Rockie"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas."
          defaultOpen
        />
        <FaqItem question="How to start with Rockie" />
        <FaqItem question="What Cryptocurrencies can I use to purchase" />
        <FaqItem question="How to buy & sell in Rockie" />
      </div>
    </div>
  );
};

export default FaqSection;
