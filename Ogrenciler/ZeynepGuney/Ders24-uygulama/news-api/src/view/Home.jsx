import { useState, useEffect } from "react";
import fetchData from "../services/service"
import Slider from "../components/Slider/Slider";

const Home = () => {
    const [data, setData] = useState([])
      useEffect(() => {
        const getData = async () => {
          try {
            const fetch = await fetchData();
            setData(fetch);
            console.log("ff"+fetch);
          } catch (error) {
            console.log(error);
          }
        };
        getData();
      }, []);
    return (
        data.length === 0 ? (
            <p>Ürün bulunamadı veya yükleniyor...</p>
          ) : (
        <Slider news={data}></Slider>)
    )
}

export default Home