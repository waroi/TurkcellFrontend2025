"use client";

import React, { useState } from "react";
import Nav from "../../../_components/ui/Nav";

const OrderNavs = () => {
  const orderNavList: string[] = ["order-history", "open-orders", "closed-orders"];
  const [selectedTab, setSelectedTab] = useState<string>("order-history");

  return (
    <div className="d-flex w-75 body3">
      {orderNavList.map((item) => (
   <Nav key={item} item={item} selectedTab={selectedTab} setSelectedTab={setSelectedTab} tPage="TradePage" tParentKey={"orderNavs"}/>
      ))}
    </div>
  );
};

export default OrderNavs;
