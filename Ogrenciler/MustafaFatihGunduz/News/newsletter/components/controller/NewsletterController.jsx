import React, { useEffect } from "react";
import { useState } from "react";
import {
  getSportNews,
  getEconomyNews,
  getGeneralNews,
  getHealthNews,
} from "../model/RequestModel";
import NewsletterView from "../views/NewsletterView";

const NewsletterController = () => {
  const [sportNewsLetter, setSportNewsLetter] = useState([]);
  const [economyLetter, setEconomyLetter] = useState([]);
  const [generalLetter, setGeneralLetter] = useState([]);
  const [healthLetter, setHealthLetter] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      await getSportsNew();
      await getEconomyNew();
      await getGeneralNew();
      await getHealthNew();
    };
    fetchNews();
  }, []);

  const getSportsNew = async () => {
    const sport = await getSportNews();
    setSportNewsLetter(sport);
  };

  const getEconomyNew = async () => {
    const economy = await getEconomyNews();
    setEconomyLetter(economy);
  };
  const getGeneralNew = async () => {
    const general = await getGeneralNews();
    setGeneralLetter(general);
  };
  const getHealthNew = async () => {
    const health = await getHealthNews();
    setHealthLetter(health);
  };
  return (
    <div>
      <NewsletterView
        sports={sportNewsLetter}
        economys={economyLetter}
        generals={generalLetter}
        healths={healthLetter}
      />
    </div>
  );
};

export default NewsletterController;
