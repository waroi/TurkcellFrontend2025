import React from "react";
import { useState, useEffect } from "react";
import { getSportNews } from "../model/RequestModel";
import SportNewsView from "../views/SportNewsView";

const SportController = () => {
  const [sports, setSports] = useState([]);
  const getAllSports = async () => {
    const sport = await getSportNews();
    setSports(sport);
  };

  useEffect(() => {
    const fetchSports = async () => {
      await getAllSports();
    };
    fetchSports();
  }, []);

  return <SportNewsView sport={sports} />;
};

export default SportController;
