import { useState, useEffect } from "react";
import {fetchData} from "../services/service";
import Time from "../components/Time/Time";
import Slider from "../components/Slider/Slider";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await fetchData();
        setData(fetch);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return data.length === 0 ? (
    <p>Haberler yükleniyor...</p>
  ) : (
    <div className="container">
      <Time></Time>
      <Slider news={data}></Slider>
      <Banner></Banner>
      <h2>Günlük Haberler</h2>
      <CardContainer news={data} />
    </div>
  );
};

export default Home;
