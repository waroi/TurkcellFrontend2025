import React, { useEffect, useState } from "react";
import {getAllNews} from "./api/getNews";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Navbar/>
    <Footer/>
    </>
  )
}

export default App;
