import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Routes from "./routes/Routes";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    // Yeni kategori seçildiğinde haberleri çekiyoruz
    fetchNews(category);
  }, [category]);

  const fetchNews = (category) => {
    fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "apikey 3v5NN9t6MJdnyc03bxe3sl:52MlUT5x0QEWCCA3PiURTZ",
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
      <Navbar setCategory={setCategory} />
      <Routes category={category} setCategory={setCategory} news={news} />
    </>
  );
}

export default App;
