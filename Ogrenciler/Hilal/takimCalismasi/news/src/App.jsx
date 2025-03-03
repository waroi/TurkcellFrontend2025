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
      "kategori",
      category,
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`
    );
    fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Sonucu:", result);
        if (result.success && result.result.length > 0) {
          setNews(result.result);
        } else {
          console.log("Bu kategoriye ait haber bulunamadı.");
          setNews([]);
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
