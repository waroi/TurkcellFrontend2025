import React from "react";
import { useEffect, useState } from "react";
import HeroView from "../views/HeroView";
import { getGeneralNews } from "../model/RequestModel";

const HeroController = () => {
  const [generalLetter, setGeneralLetter] = useState([]);
  const getGeneralNew = async () => {
    const general = await getGeneralNews();
    setGeneralLetter(general.result[7]);
  };

  useEffect(() => {
    const fetchNews = async () => {
      await getGeneralNew();
    };
    fetchNews();
  }, []);

  return <HeroView hero={generalLetter} />;
};

export default HeroController;
