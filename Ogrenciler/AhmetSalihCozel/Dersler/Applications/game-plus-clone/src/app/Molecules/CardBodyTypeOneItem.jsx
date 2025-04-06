import React, { useEffect } from "react";
import { useCardOneRadioStore, useTwinRadioStore } from "../Store/ComCom";
import Typography from "../Atoms/Typography";
import Badge from "../Atoms/Badge";

function CardBodyTypeOneItem({data1,data2,twinRadioValue}) {
  const { radioValue, toggleRadioValue } = useCardOneRadioStore();


  useEffect(() => {}, [twinRadioValue]);

  function renderCardBody() {
    return twinRadioValue === "Süreli"
      ? data1
      : data2;
  }

  function isSelected(index) {
    return radioValue === index;
  }

  return (
    <fieldset>
      <div className="mt-4 flex flex-col justify-center items-center gap-5 w-full">
        {renderCardBody().map((CardBodyItem, index) => (
          <label
            key={index}
            className={`group flex w-full justify-between items-center px-5 py-1 cursor-pointer rounded-xl min-h-[80px] hover:border-lime-500 ${
              isSelected(index)
                ? "border text-white border-lime-500 bg-black"
                : "bg-neutral-700"
            }`}
          >
            <input
              type="radio"
              name="package"
              value={index}
              className="sr-only w-full"
              checked={radioValue === index}
              onChange={() => toggleRadioValue(index)}
            />
            <div className="flex flex-col items-left">
              <div className="flex gap-2 items-center">
                <Typography variant="p" className="font-bold">
                  {CardBodyItem.timeExpires}
                </Typography>
                <Badge
                  className={`
                    ${CardBodyItem.discount === "" ? "hidden" : ""}`}>
                  {CardBodyItem.discount}
                </Badge>
              </div>
              <Typography
                variant="p"
                className={`font-light ${
                  isSelected(index) ? "block" : "hidden"}
                  group-hover:block
                `}
              >
                {CardBodyItem.installment}
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Typography
                variant="p"
                className={`font-bold text-yellow-400 line-through font-normal ${
                  isSelected(index) ? "block" : "hidden"}
                  group-hover:block
                `}
              >
                {CardBodyItem.canceledPrice}
              </Typography>
              <Typography variant="h3" className={`font-bold group-hover:text-[28px] ${isSelected(index) ? "text-lime-500 text-[28px]" : ""}`}>
                {CardBodyItem.price}
              </Typography>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default CardBodyTypeOneItem;
