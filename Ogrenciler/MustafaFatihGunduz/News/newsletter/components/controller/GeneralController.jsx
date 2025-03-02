import React from "react";
import { useState, useEffect } from "react";
import { getGeneralNews } from "../model/RequestModel";
import GeneralNewsView from "../views/GeneralNewsView";

const GeneralController = () => {
  const [generals, setGenerals] = useState([]);
  const getAllGenerals = async () => {
    const general = await getGeneralNews();
    setGenerals(general);
  };

  useEffect(() => {
    const fetchGenerals = async () => {
      await getAllGenerals();
    };
    fetchGenerals();
  }, []);

  return <GeneralNewsView general={generals} />;
};

export default GeneralController;
