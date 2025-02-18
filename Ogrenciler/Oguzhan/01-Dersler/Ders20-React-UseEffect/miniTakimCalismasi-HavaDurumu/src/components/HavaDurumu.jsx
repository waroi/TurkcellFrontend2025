import React, { useState } from "react";

const HavaDurumu = () => {
    const [weathers,setWeathers]= useState([]);
    const [selectedWeather, setSelectedWeather] = useState(null);

    async function getWeather(city) {

        await fetch(
            `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
            {
              headers: {
                "Content-type": "application/json",
                authorization: "apikey 1773352110716adf6ec1a705cf532c04",
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                setWeathers(data.result);
                setSelectedWeather(data.result[0]);
              } else {
                setSelectedWeather(null);
              }
            })
            .catch((err) => console.log(err));
        }
        
    }
    
  return (
    <>
      <div>{sıcaklık}</div>
      <div>{sehir}</div>
    </>
  );


export default HavaDurumu;
