import React from "react";
import Deneme from "./components/Deneme";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme isim="Egemen" yas={25} />
      <Deneme isim="Sila" yas={25} />
    </React.Fragment>
  );
}

export default App;
