import React, { useState, useEffect } from "react";
import { fetchTime } from "../../services/service";
import "./Time.css";
const Time = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("balikesir");
  const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kastamonu",
    "Kayseri",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Şanlıurfa",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şırnak",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await fetchTime(city);
        setData(fetch);
        console.log("ff", fetch);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [city]);
  const replaceTurkishChars = (str) => {
    const turkishChars = {
      ç: "c",
      ı: "i",
      ğ: "g",
      ş: "s",
      ü: "u",
      ö: "o",
      Ç: "C",
      İ: "I",
      Ğ: "G",
      Ş: "S",
      Ü: "U",
      Ö: "O",
    };
    return str
      .split("")
      .map((char) => turkishChars[char] || char)
      .join("");
  };
  function handleCityChange(e) {
    let city = e.target.value;
    city = replaceTurkishChars(city);
    setCity(city);
  }
  return (
    <div className="time d-flex flex-wrap justify-content-center  text-center text-white rounded mt-5 pt-4">
      <img
        src="https://static.hurriyet.com.tr/static/images/redesign/ramadan-2025-bg-left-2.png"
        alt=""
      />
      <div className="d-flex ms-3">
        <select
          defaultValue="Balıkesir"
          onChange={handleCityChange}
          className="my-auto me-2 rounded-pill p-2 border-0 text-center"
        >
          {cities.map((cityOption, index) => (
            <option key={index} value={cityOption}>
              {cityOption.charAt(0).toUpperCase() + cityOption.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <h4 className="p-5">İftar Vakti : </h4>
      </div>
      <div>
        <h4 className="p-5">
          {data.length > 4 ? data[4].saat : "Yükleniyor..."}
        </h4>
      </div>
      <img
        src="https://static.hurriyet.com.tr/static/images/redesign/ramadan-2025-bg-left-2.png"
        alt=""
      />
    </div>
  );
};

export default Time;
