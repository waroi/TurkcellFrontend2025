import React from "react";
import { useCardOneRadioStore } from "../Store/ComCom";
import Typography from "../Atoms/Typography";
import Badge from "../Atoms/Badge";

function CardBodyItem() {
  const { radioValue, toggleRadioValue } = useCardOneRadioStore();
  const CardBodyItemData = [
    {
      timeExpires: "1 Ay",
      price: "680 ₺",
      canceledPrice: "",
      discount: "",
      installment: "",
    },
    {
      timeExpires: "3 Ay",
      price: "1800 ₺",
      canceledPrice: "",
      discount: "",
      installment: "3 taksit imkanı ile",
    },
    {
      timeExpires: "6 Ay",
      price: "2720 ₺",
      canceledPrice: "3400 ₺",
      discount: "%20",
      installment: "4 taksit imkanı ile",
    },
  ];
  return (
    <fieldset>
      <div className="mt-4 flex flex-col justify-center items-center gap-5 border border-lime-500 w-100">
        {CardBodyItemData.map((CardBodyItem, index) => (
          <label
            key={index}
            className={`flex w-100 justify-between items-center p-5 cursor-pointer bg-neutral-700 rounded-xl hover:border-lime-500 ${
              radioValue === index
                ? "border text-wihte border-lime-500"
                : "opacity-50"
            }`}
          >
            <input
              type="radio"
              name="package"
              value={index}
              className="sr-only"
              checked={radioValue === index}
              onChange={() => toggleRadioValue(index)}
            />
            <div className="flex flex-col items-left p-2">
              <div className="flex gap-2 items-center">
                <Typography variant="p" className="font-bold">
                  {CardBodyItem.timeExpires}
                </Typography>
                <Badge className={`${CardBodyItem.discount === "" ? "hidden" : ""}`}>{CardBodyItem.discount}</Badge>
              </div>
              <Typography variant="p" className="font-light">{CardBodyItem.installment}</Typography>
            </div>
            <div className="flex items-center gap-3">
                <Typography variant="p" className="font-bold text-yellow-400 line-through font-normal">{CardBodyItem.canceledPrice}</Typography>
                <Typography variant="h3" className="font-bold">{CardBodyItem.price}</Typography>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default CardBodyItem;
