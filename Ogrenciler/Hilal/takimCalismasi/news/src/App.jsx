import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Routes from "./routes/Routes";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleCategory = (categoryValue) => {
    setCategory(categoryValue);
  };

  const fetchNews = () => {
    console.log(
      "kategorri",
      category,
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`
    );
    fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "apikey 3x7QIiA38neH7W9ejpRlNC:6EVQkSZqQPzQMlgvTQA14N",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Sonucu:", result); // Yanıtı kontrol et
        if (result.success && result.result.length > 0) {
          setNews(result.result); // Başarılıysa haberleri ayarla
        } else {
          console.log("Bu kategoriye ait haber bulunamadı.");
          setNews([]); // Haber yoksa boş dizi set et
        }
      })
      .catch((error) => {
        console.error("API Hatası:", error);
      });
  };

  return (
    <>
      <Navbar handleCategory={handleCategory} />
      <Routes news={news} handleCategory={handleCategory} />
    </>
  );
}

export default App;
