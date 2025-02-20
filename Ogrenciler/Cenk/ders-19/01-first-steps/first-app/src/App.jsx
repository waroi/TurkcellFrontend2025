import Deneme from "./components/Deneme";
import "./App.css";

function App() {
  return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme isim="Cenk" yas={23}></Deneme>
      <Deneme isim="Tuğçe" yas={21}></Deneme>
    </>
  );
}

export default App;
