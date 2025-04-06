import React from "react";
import Typography from "../Atoms/Typography";

function CardBodyTypeTwoItem({ dataBody }) {
  console.log(dataBody.dataType);
  if (dataBody.dataType === "geforce") {
    return (
      <div className="flex flex-col items-center justify-center border border-lime-500 bg-dark h-full">
        <Typography variant="h2" className="text-lime-500">
          {dataBody.header}
        </Typography>
        <Typography variant="p" className="text-center">{dataBody.desc}</Typography>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center border border-yellow-500 bg-dark h-full">
        <Typography variant="h2">
          {dataBody.timeExpires}
        </Typography>
        <Typography variant="p" className="line-through text-yellow-500">{dataBody.canceledPrice}</Typography>
        <Typography variant="h1">{dataBody.price}</Typography>
      </div>
    );
  }
}

export default CardBodyTypeTwoItem;
