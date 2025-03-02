import React from "react";
import { useOutletContext } from "react-router";
import NewsList from "../components/NewsList";

function TechnologyView() {
  const { news } = useOutletContext();
  return (
    <>
      <h2>Teknoloji Haberleri</h2>
      <NewsList news={news} />
    </>
  );
}

export default TechnologyView;
