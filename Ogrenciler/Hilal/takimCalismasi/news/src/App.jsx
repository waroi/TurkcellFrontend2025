import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeView from "../views/HomeView";
import Navbar from "../components/Navbar";

function App() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("tr");
  const [topic, setTopic] = useState("general");

  useEffect(() => {
    fetchNews(country,topic);
  }, []);
  useEffect(() => {
    fetchNews(country,topic);
  }, [country,topic]);

  const fetchNews = (country,topic) => {
    fetch(
      `https://api.collectapi.com/news/getNews?country=${country}&tag=${topic}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "apikey 3v5NN9t6MJdnyc03bxe3sl:52MlUT5x0QEWCCA3PiURTZ",
        },
      }
    )
      .then((response) => response.json()) // response.json() return edilmeli
      .then((result) => {
        console.log("API Response:", result);
        setNews(result.result); // Eğer veri "result" içinde geliyorsa
      })
      .catch((error) => {
        console.error("API Hatası:", error);
      });
  };

  return (
    <>
      <Navbar country={country} topic={topic} setCountry = {setCountry} setTopic={setTopic}/>
      <HomeView news = {news} />
    </>
  );
}

export default App;
