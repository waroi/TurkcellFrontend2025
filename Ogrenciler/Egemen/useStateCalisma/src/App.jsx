import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstname] = useState("Egemen");
  const [lastName, setLastname] = useState("Aksoz");
  const [names, setNames] = useState(["Ebes", "Adem", "egemen"]);
  const [userInfo, setUserInfo] = useState({
    username: "egemen",
    password: 1212,
  });
  console.log(names);

  useEffect(() => {
    console.log("her zaman calisir");
  });

  useEffect(() => {
    console.log("component ilk render edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve firstname stati degistiginde calisir"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve lastname stati degistiginde calisir"
    );
  }, [lastName]);

  const handleChangeFirstName = () => {
    setFirstname("Sevda");
  };

  const handleChangeLastName = () => {
    setLastname("Kocaman");
  };
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>
        <button onClick={handleChangeFirstName}>İsmi Degistir</button>
        <button onClick={handleChangeLastName}>Soyisim Degistir</button>

        <h1>Names</h1>
        {names.map((name, index) => {
          <div>{name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
