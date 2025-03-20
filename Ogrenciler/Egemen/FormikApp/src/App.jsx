import { useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import Navbar from "./components/organisms/Navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <GeneralForm />
    </>
  );
}

export default App;
