import React, { useEffect, useState } from "react";
import {getAllNews} from "./api/getNews";
import './App.css';

function App() {
  const [news, setNews] = useState();
  useEffect(() => {
    getAllNews()
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    </>
  )
}

export default App;
