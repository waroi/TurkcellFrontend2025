import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    getArticles();
  });

  const getArticles = async () => {
    const url =
      "https://api.collectapi.com/news/getNews?country=tr&tag=general";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "apikey 3zm8ochjnksSfs1B4DDHVo:7LWVHiFncvNduxosa4qVEI",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Hatası! Durum: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data.result);
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-5">
          {articles?.map((article) => (
            <div key={article.id} className="card mb-3 col-6">
              <img src={article?.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article?.name}</h5>
                <p className="card-text">{article?.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{article?.date}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
