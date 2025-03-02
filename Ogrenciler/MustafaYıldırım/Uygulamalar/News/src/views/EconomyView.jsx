import React from "react";
import Kur from "../components/Kur";
import NewsList from "../components/NewsList";
import { useOutletContext } from "react-router";

function EconomyView() {
  const { news } = useOutletContext();
  return (
    <>
      {/* <Kur /> */}
      <h2>Ekonomi Haberleri</h2>
      <NewsList news={news} />
    </>
  );
}

export default EconomyView;
