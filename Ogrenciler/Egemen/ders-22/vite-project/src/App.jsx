import "./App.css";

import { Button1, Button2 } from "./styled.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button1 size="30px">Örnek Button 1</Button1>
      <Button2 size="50px">Örnek Button 2</Button2>
    </>
  );
}

export default App;
