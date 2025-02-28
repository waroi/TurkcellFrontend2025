import { useState } from "react";
import NewsClient from "./service/service";

function App() {
  const [news, setNews] = useState([]);
  async function getNews() {
    NewsClient.getNews().then((data) => {
      setNews(data);
      console.log(data);
    });
  }
  return <></>;
}

export default App;
