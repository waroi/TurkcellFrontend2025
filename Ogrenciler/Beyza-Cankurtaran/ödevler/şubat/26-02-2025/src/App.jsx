import "./scss/main.scss";
import Router from "./routes/Router";
import { useState } from "react";
import products from "./data/data.json";

function App() {
  const [selector, setSelector] = useState();
  const getirProduct = () =>
    selector
      ? products.filter((product) => product.category[0].name === selector)
      : products;
  return (
    <>
      <Router getirProduct={getirProduct} setSelector={setSelector} />
    </>
  );
}

export default App;
