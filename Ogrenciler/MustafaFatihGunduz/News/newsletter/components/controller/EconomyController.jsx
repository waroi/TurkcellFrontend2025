import React from "react";
import { useState, useEffect } from "react";
import { getEconomyNews } from "../model/RequestModel";
import EconomyNewsView from "../views/EconomyNewsView";

const EconomyController = () => {
  const [economys, setEconomys] = useState([]);
  const getAllEconomys = async () => {
    const economy = await getEconomyNews();
    setEconomys(economy);
  };

  useEffect(() => {
    const fetchEconomys = async () => {
      await getAllEconomys();
    };
    fetchEconomys();
  }, []);

  return <EconomyNewsView economy={economys} />;
};

export default EconomyController;
