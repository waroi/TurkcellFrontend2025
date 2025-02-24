import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "a17d098aa83662acc470d974bf21e392";
      const url = `https://api.themoviedb.org/3/authentication?api_key=${API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Fetching data...</div>;
};

export default Services;
