import Header from "./components/organisms/Header";
import Main from "./components/organisms/Main";
import { useState, useEffect } from "react";
function App() {
  const [category, setCategory] = useState("");
  useEffect(() => {
    console.log(category);
  }, []);
  return (
    <div>
      <Header category={category} setCategory={setCategory}></Header>
      <Main category={category}></Main>
    </div>
  );
}
export default App;
