import {useEffect} from "react";
import "./App.css";


function App() {
  const fetch = async () => {
    // const response = await fetch("https://api.github.com/users/elinoza");
    // const data = await response.json();
  
    console.log("hello");
  };
  useEffect(() => {
    fetch();

  }, []);
  
  return <></>;
}

export default App;
