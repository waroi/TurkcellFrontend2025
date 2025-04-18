"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

type DisplayTableProps = {
  data: any[];
  columns: string[];
  parentKey: string;
  translationPage: string;
  children?: React.ReactNode;
  side?: "bids" | "asks";
};

const DisplayTable = ({
  data,
  columns,
  parentKey,
  translationPage,
  children,
  side,
}: DisplayTableProps) => {
  const t = useTranslations(translationPage);

  return (
    <div className="d-flex flex-column gap-2">
      {children && <div>{children}</div>}

      <div className="d-flex justify-content-between text-secondary body2 fw-bold">
        {columns.map((key) => (
          <span key={key}>{t(`${parentKey}.${key}`)}</span>
        ))}
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "d-flex justify-content-between  text-start body3"
          )}
        >
          <span className={clsx(
            side === "bids"
              ? "text-success"
              : side === "asks"
              ? "text-critical"
              : ""
          )}>{item?.price ||item?.time}</span>
          <span>{item?.quantity}</span>
          <span>{item?.amount.toFixed(3)}</span>
    </div>))}
    </div>
  );
};

export default DisplayTable;
