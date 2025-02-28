import "./scss/main.scss";
import Router from "./routes/Router";
import { useState } from "react";
import products from "./data/data.json";

function App() {
  const [selector, setSelector] = useState();
  const getirProduct = selector
    ? products.filter((product) => product.category === selector)
    : products;

  return (
    <>
      <Router getirProduct={getirProduct} />
    </>
  );
}

export default App;
