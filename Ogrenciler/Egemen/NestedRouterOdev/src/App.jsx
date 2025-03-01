import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    getArticles();
  });

  const getArticles = async () => {
    const url =
      "https://newsapi.org/v2/everything?" +
       q=`{}` +
      "language=tr&" +
      "from=2025-02-27&" +
      "sortBy=popularity&" +
      "apiKey=b9b9267a4400423eb272474b19898915";

    fetch(url)
      .then((response) => response.json()) // JSON olarak ayrıştır
      .then((data) => setArticles(articles)) // Ayrıştırılmış veriyi yazdır
  
      .catch((error) => console.error("Hata:", error)); // Hata yakalama
  };

  return <div>Check the console for news articles.</div>;
}

export default App;
