import React from "react";
import { useState, useEffect } from "react";
import { getHealthNews } from "../model/RequestModel";
import HealthNewsViews from "../views/HealthNewsViews";

const HealthController = () => {
  const [healths, setHealths] = useState([]);
  const getAllHealths = async () => {
    const health = await getHealthNews();
    setHealths(health);
  };

  useEffect(() => {
    const fetchHealths = async () => {
      await getAllHealths();
    };
    fetchHealths();
  }, []);

  return <HealthNewsViews health={healths} />;
};

export default HealthController;
